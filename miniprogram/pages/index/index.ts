import globalData from "../../globalData";
import { getAuthorize, getUserCloudID, getUserInfo } from "../../models/openDataModel"
import { hideLoading, showLoading } from "../../utils/alert";

Page({
    cloudID: '',
    data: {
        userInfo: null as (IUserInfo | null),
        showAuthorize: false,
        ready: false
    },

    async onLoad() {
        await this.initUserInfo()
        await this.initLocation()
    },

    async initUserInfo() {
        const authorize = await getAuthorize('scope.userInfo')
        this.setData({
            showAuthorize: !authorize,
            ready: !authorize
        })
        if (authorize) {
            const res:any = await getUserCloudID()
            this.cloudID = res.cloudID || ''
            await this.onGetUserInfo()
        }
    },

    async getUserAuthorize(e:any) {
        this.cloudID = e.detail.cloudID
        showLoading()
        await this.onGetUserInfo()
    },

    async onGetUserInfo() {
        const res = await getUserInfo(this.cloudID)
        globalData.userInfo = res.data
        this.setData({
            userInfo: globalData.userInfo,
            showAuthorize: false,
            ready: true
        })
        hideLoading()
    },

    async initLocation() {
        
    }
});
