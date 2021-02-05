const console = require('../utils/console')('UserModel')

class User {
    holdOnPromise: Promise<WechatMiniprogram.GetSettingSuccessCallbackResult> | null = null

    init() {
        this.holdOnPromise = wx.getSetting({})
        this.holdOnPromise.then(({authSetting}:{authSetting: WechatMiniprogram.AuthSetting}) => {
            console.info('getsetting suc', authSetting)
        })
        
    }
}

export default new User()