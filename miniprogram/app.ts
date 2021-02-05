const Sys = require('./utils/sys')

//app.js
App< IAppOption >({
    onLaunch () {
        Sys.setup({})
    }
})
