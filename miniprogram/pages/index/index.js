"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = wx.getSystemInfoSync(), screenHeight = _a.screenHeight, statusBarHeight = _a.statusBarHeight;
Page({
    data: {
        screenHeight: screenHeight,
        statusBarHeight: statusBarHeight,
        selected: 0,
        tabs: [
            {
                pagePath: "/pages/footprints/footprints",
                iconPath: "/assets/footprints.png",
                selectedIconPath: "/assets/footprints_active.png",
                text: "足迹",
                component: "footprints"
            },
            {
                pagePath: "/pages/routes/routes",
                iconPath: "/assets/routes.png",
                selectedIconPath: "/assets/routes_active.png",
                text: "路线",
                component: "routes"
            },
            {
                pagePath: "/pages/my/my",
                iconPath: "/assets/my.png",
                selectedIconPath: "/assets/my_active.png",
                text: "我的",
                component: "my"
            }
        ]
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setTitle(0);
                return [2];
            });
        });
    },
    switchTab: function (_a) {
        var index = _a.currentTarget.dataset.index;
        if (this.data.selected !== index) {
            this.setData({
                selected: index,
            });
            this.setTitle(index);
        }
    },
    setTitle: function (index) {
        wx.setNavigationBarTitle({
            title: this.data.tabs[index].text
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFvQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBeEQsWUFBWSxrQkFBQSxFQUFFLGVBQWUscUJBQTJCLENBQUE7QUFFaEUsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsWUFBWSxjQUFBO1FBQ1osZUFBZSxpQkFBQTtRQUNmLFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ0JBQWdCLEVBQUUsK0JBQStCO2dCQUNqRCxJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsWUFBWTthQUMxQjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGdCQUFnQixFQUFFLDJCQUEyQjtnQkFDN0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsU0FBUyxFQUFFLFFBQVE7YUFDdEI7WUFDRDtnQkFDSSxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ0JBQWdCLEVBQUUsdUJBQXVCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsSUFBSTthQUNsQjtTQUNKO0tBQ0o7SUFDSyxNQUFNOzs7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7OztLQUNuQjtJQUNELFNBQVMsRUFBVCxVQUFVLEVBQTRGO1lBQTlELEtBQUssaUNBQUE7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxRQUFRLEVBQUUsS0FBSzthQUNsQixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNELFFBQVEsRUFBUixVQUFTLEtBQVk7UUFDakIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHNjcmVlbkhlaWdodCwgc3RhdHVzQmFySGVpZ2h0IH0gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXG5cblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgc2NyZWVuSGVpZ2h0LFxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgIHNlbGVjdGVkOiAwLFxuICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6IFwiL3BhZ2VzL2Zvb3RwcmludHMvZm9vdHByaW50c1wiLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiBcIi9hc3NldHMvZm9vdHByaW50cy5wbmdcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9hc3NldHMvZm9vdHByaW50c19hY3RpdmUucG5nXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLotrPov7lcIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiZm9vdHByaW50c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiBcIi9wYWdlcy9yb3V0ZXMvcm91dGVzXCIsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9yb3V0ZXMucG5nXCIsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIvYXNzZXRzL3JvdXRlc19hY3RpdmUucG5nXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCLot6/nur9cIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwicm91dGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6IFwiL3BhZ2VzL215L215XCIsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6IFwiL2Fzc2V0cy9teS5wbmdcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9hc3NldHMvbXlfYWN0aXZlLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIm15XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgYXN5bmMgb25Mb2FkKCkgeyAgXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoMClcbiAgICB9LFxuICAgIHN3aXRjaFRhYih7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyBpbmRleCB9IH0gfTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaW5kZXg6IG51bWJlciB9IH0gfSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNlbGVjdGVkICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZShpbmRleClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGl0bGUoaW5kZXg6bnVtYmVyKSB7XG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5kYXRhLnRhYnNbaW5kZXhdLnRleHRcbiAgICAgICAgfSlcbiAgICB9LFxufSk7XG4iXX0=