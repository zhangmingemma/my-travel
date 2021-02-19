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
var globalData_1 = require("../../globalData");
var openDataModel_1 = require("../../models/openDataModel");
var alert_1 = require("../../utils/alert");
Page({
    cloudID: '',
    data: {
        userInfo: null,
        showAuthorize: false,
        ready: false
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.initUserInfo()];
                    case 1:
                        _a.sent();
                        return [4, this.initLocation()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    initUserInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorize, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, openDataModel_1.getAuthorize('scope.userInfo')];
                    case 1:
                        authorize = _a.sent();
                        this.setData({
                            showAuthorize: !authorize,
                            ready: !authorize
                        });
                        if (!authorize) return [3, 4];
                        return [4, openDataModel_1.getUserCloudID()];
                    case 2:
                        res = _a.sent();
                        this.cloudID = res.cloudID || '';
                        return [4, this.onGetUserInfo()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    },
    getUserAuthorize: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cloudID = e.detail.cloudID;
                        alert_1.showLoading();
                        return [4, this.onGetUserInfo()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    onGetUserInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, openDataModel_1.getUserInfo(this.cloudID)];
                    case 1:
                        res = _a.sent();
                        globalData_1.default.userInfo = res.data;
                        this.setData({
                            userInfo: globalData_1.default.userInfo,
                            showAuthorize: false,
                            ready: true
                        });
                        alert_1.hideLoading();
                        return [2];
                }
            });
        });
    },
    initLocation: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyw0REFBc0Y7QUFDdEYsMkNBQTZEO0FBRTdELElBQUksQ0FBQztJQUNELE9BQU8sRUFBRSxFQUFFO0lBQ1gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLElBQTBCO1FBQ3BDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLEtBQUssRUFBRSxLQUFLO0tBQ2Y7SUFFSyxNQUFNOzs7OzRCQUNSLFdBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQTt3QkFDekIsV0FBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUF6QixTQUF5QixDQUFBOzs7OztLQUM1QjtJQUVLLFlBQVksRUFBbEI7Ozs7OzRCQUNzQixXQUFNLDRCQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQWhELFNBQVMsR0FBRyxTQUFvQzt3QkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxhQUFhLEVBQUUsQ0FBQyxTQUFTOzRCQUN6QixLQUFLLEVBQUUsQ0FBQyxTQUFTO3lCQUNwQixDQUFDLENBQUE7NkJBQ0UsU0FBUyxFQUFULGNBQVM7d0JBQ08sV0FBTSw4QkFBYyxFQUFFLEVBQUE7O3dCQUFoQyxHQUFHLEdBQU8sU0FBc0I7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7d0JBQ2hDLFdBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFBOzt3QkFBMUIsU0FBMEIsQ0FBQTs7Ozs7O0tBRWpDO0lBRUssZ0JBQWdCLEVBQXRCLFVBQXVCLENBQUs7Ozs7O3dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFBO3dCQUMvQixtQkFBVyxFQUFFLENBQUE7d0JBQ2IsV0FBTSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUE7O3dCQUExQixTQUEwQixDQUFBOzs7OztLQUM3QjtJQUVLLGFBQWE7Ozs7OzRCQUNILFdBQU0sMkJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFyQyxHQUFHLEdBQUcsU0FBK0I7d0JBQzNDLG9CQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7d0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1QsUUFBUSxFQUFFLG9CQUFVLENBQUMsUUFBUTs0QkFDN0IsYUFBYSxFQUFFLEtBQUs7NEJBQ3BCLEtBQUssRUFBRSxJQUFJO3lCQUNkLENBQUMsQ0FBQTt3QkFDRixtQkFBVyxFQUFFLENBQUE7Ozs7O0tBQ2hCO0lBRUssWUFBWTs7Ozs7O0tBRWpCO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdsb2JhbERhdGEgZnJvbSBcIi4uLy4uL2dsb2JhbERhdGFcIjtcbmltcG9ydCB7IGdldEF1dGhvcml6ZSwgZ2V0VXNlckNsb3VkSUQsIGdldFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcGVuRGF0YU1vZGVsXCJcbmltcG9ydCB7IGhpZGVMb2FkaW5nLCBzaG93TG9hZGluZyB9IGZyb20gXCIuLi8uLi91dGlscy9hbGVydFwiO1xuXG5QYWdlKHtcbiAgICBjbG91ZElEOiAnJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJJbmZvOiBudWxsIGFzIChJVXNlckluZm8gfCBudWxsKSxcbiAgICAgICAgc2hvd0F1dGhvcml6ZTogZmFsc2UsXG4gICAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH0sXG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFVzZXJJbmZvKClcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0TG9jYXRpb24oKVxuICAgIH0sXG5cbiAgICBhc3luYyBpbml0VXNlckluZm8oKSB7XG4gICAgICAgIGNvbnN0IGF1dGhvcml6ZSA9IGF3YWl0IGdldEF1dGhvcml6ZSgnc2NvcGUudXNlckluZm8nKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgc2hvd0F1dGhvcml6ZTogIWF1dGhvcml6ZSxcbiAgICAgICAgICAgIHJlYWR5OiAhYXV0aG9yaXplXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChhdXRob3JpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlczphbnkgPSBhd2FpdCBnZXRVc2VyQ2xvdWRJRCgpXG4gICAgICAgICAgICB0aGlzLmNsb3VkSUQgPSByZXMuY2xvdWRJRCB8fCAnJ1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkdldFVzZXJJbmZvKClcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBnZXRVc2VyQXV0aG9yaXplKGU6YW55KSB7XG4gICAgICAgIHRoaXMuY2xvdWRJRCA9IGUuZGV0YWlsLmNsb3VkSURcbiAgICAgICAgc2hvd0xvYWRpbmcoKVxuICAgICAgICBhd2FpdCB0aGlzLm9uR2V0VXNlckluZm8oKVxuICAgIH0sXG5cbiAgICBhc3luYyBvbkdldFVzZXJJbmZvKCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRVc2VySW5mbyh0aGlzLmNsb3VkSUQpXG4gICAgICAgIGdsb2JhbERhdGEudXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IGdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgICAgICBzaG93QXV0aG9yaXplOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGhpZGVMb2FkaW5nKClcbiAgICB9LFxuXG4gICAgYXN5bmMgaW5pdExvY2F0aW9uKCkge1xuICAgICAgICBcbiAgICB9XG59KTtcbiJdfQ==