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
Object.defineProperty(exports, "__esModule", { value: true });
var FootprintsMgr_1 = require("../../models/FootprintsMgr");
var EventCenter = require("../../utils/eventcenter");
var alert_1 = require("../../utils/alert");
Page({
    __submiting: false,
    data: {
        dataReady: false,
        list: [],
        curProvinceIdx: 0,
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert_1.showLoading();
                        return [4, FootprintsMgr_1.default.getAllCitys()];
                    case 1:
                        list = _a.sent();
                        alert_1.hideLoading();
                        this.setData({
                            dataReady: true,
                            list: list
                        });
                        return [2];
                }
            });
        });
    },
    switchProvince: function (_a) {
        var index = _a.currentTarget.dataset.index;
        if (this.data.curProvinceIdx != index) {
            this.setData({
                curProvinceIdx: index
            });
        }
    },
    chooseCity: function (_a) {
        var _b;
        var _c = _a.currentTarget.dataset, index = _c.index, item = _c.item;
        item.isChoose = !item.isChoose;
        var curProvince = this.data.list[this.data.curProvinceIdx];
        var chooseCityCount = (curProvince.chooseCityCount || 0) + (item.isChoose ? 1 : -1);
        this.setData((_b = {},
            _b["list[" + this.data.curProvinceIdx + "].list[" + index + "]"] = item,
            _b["list[" + this.data.curProvinceIdx + "].chooseCityCount"] = chooseCityCount,
            _b));
    },
    onSubmit: function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = this.data.list;
                        if (this.__submiting)
                            return [2];
                        this.__submiting = true;
                        return [4, FootprintsMgr_1.default.addFootPrints(list)];
                    case 1:
                        error = _a.sent();
                        this.__submiting = false;
                        if (error) {
                            alert_1.showModal({
                                content: error,
                                showCancel: false
                            });
                        }
                        else {
                            alert_1.showSuccessTip();
                            setTimeout(wx.navigateBack, 1500);
                            EventCenter.emit('updateFootprints');
                        }
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3ZELDJDQUF3RjtBQUV4RixJQUFJLENBQUM7SUFDRCxXQUFXLEVBQUUsS0FBSztJQUNsQixJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUsRUFBcUI7UUFDM0IsY0FBYyxFQUFFLENBQUM7S0FFcEI7SUFFSyxNQUFNOzs7Ozs7d0JBQ1IsbUJBQVcsRUFBRSxDQUFBO3dCQUNBLFdBQU0sdUJBQWEsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXhDLElBQUksR0FBRyxTQUFpQzt3QkFDOUMsbUJBQVcsRUFBRSxDQUFBO3dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1QsU0FBUyxFQUFFLElBQUk7NEJBQ2YsSUFBSSxNQUFBO3lCQUNQLENBQUMsQ0FBQTs7Ozs7S0FDTDtJQUVELGNBQWMsRUFBZCxVQUFlLEVBQXdGO1lBQTFELEtBQUssaUNBQUE7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxjQUFjLEVBQUUsS0FBSzthQUN4QixDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCxVQUFVLEVBQVYsVUFBVyxFQUFtSTs7WUFBaEgsNkJBQXdCLEVBQWIsS0FBSyxXQUFBLEVBQUUsSUFBSSxVQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzlCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDNUQsSUFBTSxlQUFlLEdBQUcsQ0FBQyxXQUFXLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxPQUFPO1lBQ1IsR0FBQyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxlQUFVLEtBQUssTUFBRyxJQUFHLElBQUk7WUFDMUQsR0FBQyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxzQkFBbUIsSUFBRyxlQUFlO2dCQUN4RSxDQUFBO0lBQ04sQ0FBQztJQUVLLFFBQVE7Ozs7Ozt3QkFDSixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7d0JBQzNCLElBQUksSUFBSSxDQUFDLFdBQVc7NEJBQUUsV0FBTTt3QkFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7d0JBQ1QsV0FBTSx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQS9DLEtBQUssR0FBRyxTQUF1Qzt3QkFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7d0JBQ3hCLElBQUksS0FBSyxFQUFFOzRCQUNQLGlCQUFTLENBQUM7Z0NBQ04sT0FBTyxFQUFFLEtBQUs7Z0NBQ2QsVUFBVSxFQUFFLEtBQUs7NkJBQ3BCLENBQUMsQ0FBQTt5QkFDTDs2QkFBTTs0QkFDSCxzQkFBYyxFQUFFLENBQUE7NEJBQ2hCLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBOzRCQUNqQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7eUJBQ3ZDOzs7OztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RwcmludHNNZ3IgZnJvbSBcIi4uLy4uL21vZGVscy9Gb290cHJpbnRzTWdyXCI7XG5jb25zdCBFdmVudENlbnRlciA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9ldmVudGNlbnRlclwiKTtcbmltcG9ydCB7IGhpZGVMb2FkaW5nLCBzaG93TG9hZGluZywgc2hvd01vZGFsLCBzaG93U3VjY2Vzc1RpcCB9IGZyb20gXCIuLi8uLi91dGlscy9hbGVydFwiO1xuXG5QYWdlKHtcbiAgICBfX3N1Ym1pdGluZzogZmFsc2UsXG4gICAgZGF0YToge1xuICAgICAgICBkYXRhUmVhZHk6IGZhbHNlLFxuICAgICAgICBsaXN0OiBbXSBhcyBJUHJvdmluY2VDZWxsW10sXG4gICAgICAgIGN1clByb3ZpbmNlSWR4OiAwLFxuXG4gICAgfSxcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgc2hvd0xvYWRpbmcoKVxuICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgRm9vdHByaW50c01nci5nZXRBbGxDaXR5cygpXG4gICAgICAgIGhpZGVMb2FkaW5nKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGRhdGFSZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgIGxpc3RcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc3dpdGNoUHJvdmluY2UoeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaW5kZXggfX19OiB7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyBpbmRleDogbnVtYmVyIH19fSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmN1clByb3ZpbmNlSWR4ICE9IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGN1clByb3ZpbmNlSWR4OiBpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjaG9vc2VDaXR5KHsgY3VycmVudFRhcmdldDogeyBkYXRhc2V0OiB7IGluZGV4LCBpdGVtIH19fTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaW5kZXg6IG51bWJlciwgaXRlbTogSVByb3ZpbmNlQ2VsbFsnbGlzdCddW251bWJlcl0gfX19KSB7XG4gICAgICAgIGl0ZW0uaXNDaG9vc2UgPSAhaXRlbS5pc0Nob29zZVxuICAgICAgICBjb25zdCBjdXJQcm92aW5jZSA9IHRoaXMuZGF0YS5saXN0W3RoaXMuZGF0YS5jdXJQcm92aW5jZUlkeF1cbiAgICAgICAgY29uc3QgY2hvb3NlQ2l0eUNvdW50ID0gKGN1clByb3ZpbmNlLmNob29zZUNpdHlDb3VudCB8fCAwKSArIChpdGVtLmlzQ2hvb3NlID8gMSA6IC0xKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgW2BsaXN0WyR7dGhpcy5kYXRhLmN1clByb3ZpbmNlSWR4fV0ubGlzdFske2luZGV4fV1gXTogaXRlbSxcbiAgICAgICAgICAgIFtgbGlzdFske3RoaXMuZGF0YS5jdXJQcm92aW5jZUlkeH1dLmNob29zZUNpdHlDb3VudGBdOiBjaG9vc2VDaXR5Q291bnRcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmRhdGEubGlzdFxuICAgICAgICBpZiAodGhpcy5fX3N1Ym1pdGluZykgcmV0dXJuIFxuICAgICAgICB0aGlzLl9fc3VibWl0aW5nID0gdHJ1ZVxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IEZvb3RwcmludHNNZ3IuYWRkRm9vdFByaW50cyhsaXN0KVxuICAgICAgICB0aGlzLl9fc3VibWl0aW5nID0gZmFsc2VcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBzaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1N1Y2Nlc3NUaXAoKVxuICAgICAgICAgICAgc2V0VGltZW91dCh3eC5uYXZpZ2F0ZUJhY2ssIDE1MDApXG4gICAgICAgICAgICBFdmVudENlbnRlci5lbWl0KCd1cGRhdGVGb290cHJpbnRzJylcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19