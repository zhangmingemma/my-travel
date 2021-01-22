"use strict";
module.exports = {
    _loaded: false,
    setup: function (options) {
        if (this._loaded) {
            return;
        }
        this.setupOptions = options;
        try {
            var systemInfo = wx.getSystemInfoSync();
            if (systemInfo.platform === 'windows' || systemInfo.platform === 'mac') {
                systemInfo.screenWidth = systemInfo.windowWidth;
                systemInfo.screenHeight = systemInfo.windowHeight;
            }
            Object.assign(this, systemInfo, options);
            this._loaded = true;
            return this._loaded;
        }
        catch (error) {
            console.error('getSystemInfoSync fail', error);
            return false;
        }
    },
    phoneModel: function () {
        if (!this._loaded) {
            return "";
        }
        else if (this.screenHeight >= 812 && (this.platform == 'ios' || this.platform == 'devtools')) {
            return "iPhoneX";
        }
        else if (this.screenWidth <= 320) {
            return "iPhone5";
        }
        else if (this.screenWidth <= 375) {
            return "iPhone6";
        }
        else if (this.screenWidth <= 414) {
            return "iPhone6 Plus";
        }
        else {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFFZCxLQUFLLEVBQUwsVUFBTyxPQUF5QjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtRQUUzQixJQUFJO1lBQ0EsSUFBTSxVQUFVLEdBQTZDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ25GLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQ3BFLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQTtnQkFDL0MsVUFBVSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFBO2FBQ3BEO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtTQUN0QjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDOUMsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7SUFFRCxVQUFVLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsRUFBRTtZQUM1RixPQUFPLFNBQVMsQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLEVBQUU7WUFDaEMsT0FBTyxTQUFTLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ2hDLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsRUFBRTtZQUNoQyxPQUFPLGNBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFRCxtQkFBbUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBfbG9hZGVkOiBmYWxzZSxcblxuICAgIHNldHVwIChvcHRpb25zOiB7IGFwcGlkOnN0cmluZyB9KSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dXBPcHRpb25zID0gb3B0aW9uc1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzeXN0ZW1JbmZvOldlY2hhdE1pbmlwcm9ncmFtLkdldFN5c3RlbUluZm9TeW5jUmVzdWx0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgICAgICAgICAgaWYgKHN5c3RlbUluZm8ucGxhdGZvcm0gPT09ICd3aW5kb3dzJyB8fCBzeXN0ZW1JbmZvLnBsYXRmb3JtID09PSAnbWFjJykge1xuICAgICAgICAgICAgICAgIHN5c3RlbUluZm8uc2NyZWVuV2lkdGggPSBzeXN0ZW1JbmZvLndpbmRvd1dpZHRoXG4gICAgICAgICAgICAgICAgc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgPSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzeXN0ZW1JbmZvLCBvcHRpb25zKVxuICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZFxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFN5c3RlbUluZm9TeW5jIGZhaWwnLCBlcnJvcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBob25lTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuSGVpZ2h0ID49IDgxMiAmJiAodGhpcy5wbGF0Zm9ybSA9PSAnaW9zJyB8fCB0aGlzLnBsYXRmb3JtID09ICdkZXZ0b29scycpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJpUGhvbmVYXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JlZW5XaWR0aCA8PSAzMjApIHtcbiAgICAgICAgICAgIHJldHVybiBcImlQaG9uZTVcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcmVlbldpZHRoIDw9IDM3NSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaVBob25lNlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuV2lkdGggPD0gNDE0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJpUGhvbmU2IFBsdXNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG5hdmlnYXRpb25CYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDQ0ICsgcGFyc2VJbnQodGhpcy5zdGF0dXNCYXJIZWlnaHQgfHwgMjApO1xuICAgIH0sXG5cbiAgICByZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0dXAodGhpcy5zZXR1cE9wdGlvbnMpO1xuICAgIH1cbn0iXX0=