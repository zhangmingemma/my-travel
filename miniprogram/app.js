"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devkit_1 = require("./devkit");
App({
    onLaunch: function () {
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: function (res) {
                console.log('[云函数] [login] user openid: ', res);
            },
            fail: function (err) {
                console.error('[云函数] [login] 调用失败', err);
            }
        });
    },
    onShow: function () {
        console.error(devkit_1.Sys);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQThCO0FBRzlCLEdBQUcsQ0FBZTtJQUNkLFFBQVEsRUFBRTtRQUdOLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDakQsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUMxQyxDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU0sRUFBRTtRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN5cyB9IGZyb20gJy4vZGV2a2l0J1xuXG4vL2FwcC5qc1xuQXBwPCBJQXBwT3B0aW9uID4oe1xuICAgIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICBcbiAgICAgICAgLy8gTmV0d29yay5sb2dpbigpXG4gICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW+S6keWHveaVsF0gW2xvZ2luXSB1c2VyIG9wZW5pZDogJywgcmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1vkupHlh73mlbBdIFtsb2dpbl0g6LCD55So5aSx6LSlJywgZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihTeXMpXG4gICAgfSxcbn0pXG4iXX0=