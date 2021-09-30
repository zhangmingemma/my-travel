import { promiseWrap } from '../utils/fnUtil'

export const getAuthorize = async(scope:keyof WechatMiniprogram.AuthSetting, withSubscriptions:boolean = false) => {
    const {res} = await promiseWrap(wx.getSetting({ withSubscriptions }))
    console.info('[OpenDataMgr] getAuthorize', scope, withSubscriptions, res)
    if ( withSubscriptions ) {
        return res?.subscriptionsSetting
    } 
    if ( res?.authSetting ) {
        return (res.authSetting as WechatMiniprogram.AuthSetting)[scope]
    }
    return false
}

export const doAuthorize = async(scope:keyof WechatMiniprogram.AuthSetting) => {
    const {res} = await promiseWrap(wx.authorize({ scope }))
    console.info('[OpenDataMgr] doAuthorize', scope, res)
    return res
}