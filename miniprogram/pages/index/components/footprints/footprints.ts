import FootprintsMgr from "../../../../models/FootprintsMgr";
import { hideLoading, showLoading } from "../../../../utils/alert";
import { MapEnum } from "../../../../utils/define";
import { genOption } from "./genOption";
const EventCenter = require("../../../../utils/eventcenter");

Component({
    data: {
        mapData: {} as {
            type: String,
            features: IGeoCell[]
        },
        mapOption: {},
        chartReady: false,
        mapType: MapEnum.MapType.CHINA,
        cityCount: 0,
        cityCountPercent: 0,
        footprints: [] as {name:string, value:number}[],
    },

    methods: {
        async onLoad() {
            await this.initBaseMap()
            await this.getUserMap()
            EventCenter.register('updateFootprints', this, 'onUpdateFootprints')
        },

        async initBaseMap() {
            showLoading()
            const outlines = await FootprintsMgr.getBaseMap()
            if (outlines?.length) {
                this.setData({
                    mapOption: genOption(this.data.mapType, []),
                    mapData: {
                        type: "FeatureCollection",
                        features: outlines
                    }
                })
            }
            const cityCount = FootprintsMgr.cityCount
            this.setData({
                cityCount,
                chartReady: true
            })
            hideLoading()
        },

        async getUserMap() {
            const {outlines, footprints} = await FootprintsMgr.getUserMap()
            const cityCountPercent = parseInt(((footprints.length / this.data.cityCount) * 100).toFixed(0))
            if (footprints?.length) {
                this.setData({
                    footprints,
                    cityCountPercent,
                    mapOption: genOption(this.data.mapType, footprints),
                    mapData: {
                        type: "FeatureCollection",
                        features: outlines
                    }
                })
            }
        }, 
        
        async onUpdateFootprints() {
            showLoading()
            await this.getUserMap()
            hideLoading()
        },

        onAdd() {
            wx.navigateTo({
                url: `/pages/select/select`
            })
        }
    }
});
