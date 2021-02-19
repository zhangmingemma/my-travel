const Sys = require('./utils/sys')

App< IAppOption >({
    onLaunch () {
        Sys.setup({})
    }
})
