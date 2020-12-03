"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fnUtil_1 = require("./utils/fnUtil");
App({
    onLaunch: function () {
        fnUtil_1.safeCloud(wx.cloud.init, {
            traceUser: true,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTBDO0FBRzFDLEdBQUcsQ0FBZTtJQUNkLFFBQVEsRUFBRTtRQUNOLGtCQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhZmVDbG91ZCB9IGZyb20gJy4vdXRpbHMvZm5VdGlsJ1xuXG4vL2FwcC5qc1xuQXBwPCBJQXBwT3B0aW9uID4oe1xuICAgIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhZmVDbG91ZCh3eC5jbG91ZC5pbml0LCB7XG4gICAgICAgICAgICB0cmFjZVVzZXI6IHRydWUsXG4gICAgICAgIH0pIFxuICAgICAgICBcbiAgICB9XG59KVxuIl19