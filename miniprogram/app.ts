import { safeCloud } from './utils/fnUtil'

//app.js
App< IAppOption >({
    onLaunch: function () {
        safeCloud(wx.cloud.init, {
            traceUser: true,
        }) 
        
    }
})
