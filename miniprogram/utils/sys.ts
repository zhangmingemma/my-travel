module.exports = {
    _loaded: false,

    setup (options: { appid:string }) {
        if (this._loaded) {
            return 
        }

        this.setupOptions = options

        try {
            const systemInfo:WechatMiniprogram.SystemInfo = wx.getSystemInfoSync()
            if (systemInfo.platform === 'windows' || systemInfo.platform === 'mac') {
                systemInfo.screenWidth = systemInfo.windowWidth
                systemInfo.screenHeight = systemInfo.windowHeight
            }
            Object.assign(this, systemInfo, options)
            this._loaded = true
            return this._loaded
        } catch (error:any) {
            console.error('getSystemInfoSync fail', error)
            return false
        }
    },

    phoneModel: function () {
        if (!this._loaded) {
            return "";
        } else if (this.screenHeight >= 812 && (this.platform == 'ios' || this.platform == 'devtools')) {
            return "iPhoneX";
        } else if (this.screenWidth <= 320) {
            return "iPhone5";
        } else if (this.screenWidth <= 375) {
            return "iPhone6";
        } else if (this.screenWidth <= 414) {
            return "iPhone6 Plus";
        } else {
            return "";
        }
    },

    navigationBarHeight: function () {
        return 44 + parseInt(this.statusBarHeight || 20);
    },

    reload: function () {
        this._loaded = false;
        this.setup(this.setupOptions);
    }
}