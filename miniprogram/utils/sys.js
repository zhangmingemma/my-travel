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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFFZCxLQUFLLEVBQUwsVUFBTyxPQUF5QjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtRQUUzQixJQUFJO1lBQ0EsSUFBTSxVQUFVLEdBQWdDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQ3RFLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQ3BFLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQTtnQkFDL0MsVUFBVSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFBO2FBQ3BEO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtTQUN0QjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDOUMsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7SUFFRCxVQUFVLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsRUFBRTtZQUM1RixPQUFPLFNBQVMsQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLEVBQUU7WUFDaEMsT0FBTyxTQUFTLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ2hDLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsRUFBRTtZQUNoQyxPQUFPLGNBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFRCxtQkFBbUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBfbG9hZGVkOiBmYWxzZSxcblxuICAgIHNldHVwIChvcHRpb25zOiB7IGFwcGlkOnN0cmluZyB9KSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dXBPcHRpb25zID0gb3B0aW9uc1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzeXN0ZW1JbmZvOldlY2hhdE1pbmlwcm9ncmFtLlN5c3RlbUluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXG4gICAgICAgICAgICBpZiAoc3lzdGVtSW5mby5wbGF0Zm9ybSA9PT0gJ3dpbmRvd3MnIHx8IHN5c3RlbUluZm8ucGxhdGZvcm0gPT09ICdtYWMnKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtSW5mby5zY3JlZW5XaWR0aCA9IHN5c3RlbUluZm8ud2luZG93V2lkdGhcbiAgICAgICAgICAgICAgICBzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN5c3RlbUluZm8sIG9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignZ2V0U3lzdGVtSW5mb1N5bmMgZmFpbCcsIGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGhvbmVNb2RlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JlZW5IZWlnaHQgPj0gODEyICYmICh0aGlzLnBsYXRmb3JtID09ICdpb3MnIHx8IHRoaXMucGxhdGZvcm0gPT0gJ2RldnRvb2xzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBcImlQaG9uZVhcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcmVlbldpZHRoIDw9IDMyMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaVBob25lNVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuV2lkdGggPD0gMzc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJpUGhvbmU2XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JlZW5XaWR0aCA8PSA0MTQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImlQaG9uZTYgUGx1c1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbkJhckhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gNDQgKyBwYXJzZUludCh0aGlzLnN0YXR1c0JhckhlaWdodCB8fCAyMCk7XG4gICAgfSxcblxuICAgIHJlbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXR1cCh0aGlzLnNldHVwT3B0aW9ucyk7XG4gICAgfVxufSJdfQ==