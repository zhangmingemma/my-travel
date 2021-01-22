import { Sys } from './devkit'

//app.js
App< IAppOption >({
    onLaunch: function () {
         
        // Network.login()
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
              console.log('[云函数] [login] user openid: ', res)
            },
            fail: err => {
              console.error('[云函数] [login] 调用失败', err)
            }
        })
    },

    onShow: function () {
        console.error(Sys)
    },
})
