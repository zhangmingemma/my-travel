import { cloudRequest } from "../utils/network";

export const getAuthorize = async(scope:keyof WechatMiniprogram.AuthSetting):Promise<boolean> => {
    const {authSetting} : {authSetting:WechatMiniprogram.AuthSetting} = await wx.getSetting();
    console.info('wx.authorize start', authSetting)
    return authSetting && authSetting[scope] || false
}

export const getUserCloudID = async() => {
    try {
        const res = await wx.getUserInfo({})
        console.info('wx.getUserInfo suc', res)
        return res
    } catch(e) {
        console.error('getUserInfo fail', e)
    }
}

export const getUserInfo = async(cloudID: string):Promise<IUserCloudCgiResult> => {
    const {list} = await cloudRequest({
        name: 'openapi',
        data: {
            action: 'getOpenData',
            openData: { list: [ cloudID ]}
        }
    })
    return list && list.length && list[0] || list
}