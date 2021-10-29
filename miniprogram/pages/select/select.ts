import FootprintsMgr from "../../models/FootprintsMgr";
const EventCenter = require("../../utils/eventcenter");
import { hideLoading, showLoading, showModal, showSuccessTip } from "../../utils/alert";

Page({
    __submiting: false,
    data: {
        dataReady: false,
        list: [] as IProvinceCell[],
        curProvinceIdx: 0,

    },

    async onLoad() {
        showLoading()
        const list = await FootprintsMgr.getAllCitys()
        hideLoading()
        this.setData({
            dataReady: true,
            list
        })
    },

    switchProvince({ currentTarget: { dataset: { index }}}: { currentTarget: { dataset: { index: number }}}) {
        if (this.data.curProvinceIdx != index) {
            this.setData({
                curProvinceIdx: index
            })
        }
    },

    chooseCity({ currentTarget: { dataset: { index, item }}}: { currentTarget: { dataset: { index: number, item: IProvinceCell['list'][number] }}}) {
        item.isChoose = !item.isChoose
        const curProvince = this.data.list[this.data.curProvinceIdx]
        const chooseCityCount = (curProvince.chooseCityCount || 0) + (item.isChoose ? 1 : -1)
        this.setData({
            [`list[${this.data.curProvinceIdx}].list[${index}]`]: item,
            [`list[${this.data.curProvinceIdx}].chooseCityCount`]: chooseCityCount
        })
    },

    async onSubmit() {
        const list = this.data.list
        if (this.__submiting) return 
        this.__submiting = true
        const error = await FootprintsMgr.addFootPrints(list)
        this.__submiting = false
        if (error) {
            showModal({
                content: error,
                showCancel: false
            })
        } else {
            showSuccessTip()
            setTimeout(wx.navigateBack, 1500)
            EventCenter.emit('updateFootprints')
        }
    }
});
