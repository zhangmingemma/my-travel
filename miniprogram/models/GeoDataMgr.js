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
var alert_1 = require("../utils/alert");
var define_1 = require("../utils/define");
var network_1 = require("../utils/network");
var PAGESIZE = 40;
var GeoDataMgr = (function () {
    function GeoDataMgr() {
        this.geoCityCount = 0;
        this.geoCityList = [];
    }
    GeoDataMgr.prototype.getGeoCityCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            data: {
                                action: 'getCount'
                            }
                        })];
                    case 1:
                        _a = _b.sent(), error = _a.error, res = _a.res;
                        console.info('[GeoDataMgr] getCityCount', error, res);
                        if (!error) {
                            this.geoCityCount = (res === null || res === void 0 ? void 0 : res.total) || 0;
                        }
                        else {
                            alert_1.showModal();
                        }
                        return [2, this.geoCityCount];
                }
            });
        });
    };
    GeoDataMgr.prototype.getGeoCitys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageData, taskCount, promises, i, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.geoCityCount) return [3, 2];
                        return [4, this.getGeoCityCount()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        storageData = wx.getStorageSync(define_1.StorageKey.GeoCitysStorage);
                        console.info('[GeoDataMgr] getStorageSync', define_1.StorageKey.GeoCitysStorage, storageData);
                        if (storageData && storageData.length == this.geoCityCount) {
                            this.geoCityList = storageData;
                            return [2, this.geoCityList];
                        }
                        taskCount = Math.ceil(this.geoCityCount / PAGESIZE);
                        promises = [];
                        for (i = 0; i < taskCount; i++) {
                            promises.push(network_1.cloudRequest({
                                name: 'geodata',
                                data: {
                                    action: 'get',
                                    params: {
                                        count: PAGESIZE,
                                        offset: i * PAGESIZE
                                    }
                                }
                            }));
                        }
                        return [4, Promise.all(promises)];
                    case 3:
                        res = _a.sent();
                        console.info('[GeoDataMgr] getGeoCitys', res);
                        if (res && res.length && !res.find(function (item) { return item.error; })) {
                            res.map(function (item) {
                                var _a;
                                var data = ((_a = item.res) === null || _a === void 0 ? void 0 : _a.data) || [];
                                if (data && data.length) {
                                    var oldIds_1 = _this.geoCityList.map(function (item) { return item._id; });
                                    var newList = data.filter(function (item) { return oldIds_1.indexOf(item._id) < 0; });
                                    _this.geoCityList = _this.geoCityList.concat(newList);
                                    console.info('[GeoDataMgr] getGeoCitys CitysCount', _this.geoCityList.length);
                                }
                            });
                            return [2, this.geoCityList];
                        }
                        else {
                            alert_1.showModal();
                            return [2, null];
                        }
                        return [2];
                }
            });
        });
    };
    GeoDataMgr.prototype.getGeoProvinces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.getGeoCityByLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.getGeoProvinceByLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.getCitys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.getProvinces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.setCitys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    GeoDataMgr.prototype.setProvince = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    return GeoDataMgr;
}());
exports.default = new GeoDataMgr();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvRGF0YU1nci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdlb0RhdGFNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMEM7QUFDMUMsMENBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7QUFDbkI7SUFBQTtRQUNJLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLGdCQUFXLEdBQUcsRUFBZ0IsQ0FBQTtJQXNHbEMsQ0FBQztJQW5HUyxvQ0FBZSxHQUFyQjs7Ozs7NEJBQ3lCLFdBQU0sc0JBQVksQ0FBcUI7NEJBQ3hELElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRTtnQ0FDRixNQUFNLEVBQUUsVUFBVTs2QkFDckI7eUJBQ0osQ0FBQyxFQUFBOzt3QkFMSSxLQUFlLFNBS25CLEVBTEssS0FBSyxXQUFBLEVBQUUsR0FBRyxTQUFBO3dCQU1qQixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDckQsSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDUixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssS0FBSSxDQUFDLENBQUE7eUJBQ3RDOzZCQUFNOzRCQUNILGlCQUFTLEVBQUUsQ0FBQTt5QkFDZDt3QkFDRCxXQUFPLElBQUksQ0FBQyxZQUFZLEVBQUE7Ozs7S0FDM0I7SUFHSyxnQ0FBVyxHQUFqQjs7Ozs7Ozs2QkFFUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQWxCLGNBQWtCO3dCQUNsQixXQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQTVCLFNBQTRCLENBQUE7Ozt3QkFHMUIsV0FBVyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQTt3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bHMvYWxlcnRcIlxuaW1wb3J0IHsgU3RvcmFnZUtleSB9IGZyb20gXCIuLi91dGlscy9kZWZpbmVcIlxuaW1wb3J0IHsgY2xvdWRSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzL25ldHdvcmtcIlxuY29uc3QgUEFHRVNJWkUgPSA0MFxuY2xhc3MgR2VvRGF0YU1nciB7XG4gICAgZ2VvQ2l0eUNvdW50ID0gMFxuICAgIGdlb0NpdHlMaXN0ID0gW10gYXMgSUdlb0NlbGxbXVxuICAgIFxuICAgIC8vIOiOt+WPluWcsOWbvuWfjuW4guaAu+aVsFxuICAgIGFzeW5jIGdldEdlb0NpdHlDb3VudCgpOlByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHtlcnJvciwgcmVzfSA9IGF3YWl0IGNsb3VkUmVxdWVzdDx7dG90YWw6IG51bWJlcn0se30+KHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW9kYXRhJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdnZXRDb3VudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5pbmZvKCdbR2VvRGF0YU1ncl0gZ2V0Q2l0eUNvdW50JywgZXJyb3IsIHJlcylcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5nZW9DaXR5Q291bnQgPSByZXM/LnRvdGFsIHx8IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dNb2RhbCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VvQ2l0eUNvdW50XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Zyw5Zu+5YWo6YOo5Z+O5biCXG4gICAgYXN5bmMgZ2V0R2VvQ2l0eXMoKTpQcm9taXNlPG51bGwgfCBJR2VvQ2VsbFtdPiB7XG4gICAgICAgIC8vIOWPluaAu+aVsOWQju+8jOWIhueJh+W5tuWPkeiOt+WPluWFqOmDqOWcsOWbvuaVsOaNrlxuICAgICAgICBpZiAoIXRoaXMuZ2VvQ2l0eUNvdW50KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldEdlb0NpdHlDb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+W57yT5a2YOiDnvJPlrZjkuI3lpJ/kvJrmiKrmlq3mlbDmja7vvIzlm6DmraTpnIDopoHliKTmlq3mmK/lkKbnvJPlrZjkuoblhajpg6jlnLDlm77mlbDmja5cbiAgICAgICAgY29uc3Qgc3RvcmFnZURhdGEgPSB3eC5nZXRTdG9yYWdlU3luYyhTdG9yYWdlS2V5Lkdlb0NpdHlzU3RvcmFnZSlcbiAgICAgICAgY29uc29sZS5pbmZvKCdbR2VvRGF0YU1ncl0gZ2V0U3RvcmFnZVN5bmMnLCBTdG9yYWdlS2V5Lkdlb0NpdHlzU3RvcmFnZSwgc3RvcmFnZURhdGEpXG4gICAgICAgIGlmIChzdG9yYWdlRGF0YSAmJiBzdG9yYWdlRGF0YS5sZW5ndGggPT0gdGhpcy5nZW9DaXR5Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VvQ2l0eUxpc3QgPSBzdG9yYWdlRGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VvQ2l0eUxpc3RcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YXNrQ291bnQgPSBNYXRoLmNlaWwodGhpcy5nZW9DaXR5Q291bnQvUEFHRVNJWkUpXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNsb3VkUmVxdWVzdDx7ZGF0YTogSUdlb0NlbGxbXX0sIElHZXRHZW9EYXRhUmVxPih7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dlb2RhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogUEFHRVNJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IGkqUEFHRVNJWkVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICBjb25zb2xlLmluZm8oJ1tHZW9EYXRhTWdyXSBnZXRHZW9DaXR5cycsIHJlcylcblxuICAgICAgICAvLyDlpITnkIblnLDlm77mlbDmja7vvIzorqHlhaXnvJPlrZhcbiAgICAgICAgaWYgKCByZXMgJiYgcmVzLmxlbmd0aCAmJiAhcmVzLmZpbmQoaXRlbSA9PiBpdGVtLmVycm9yKSkge1xuICAgICAgICAgICAgcmVzLm1hcCgoaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5yZXM/LmRhdGEgfHwgW11cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRJZHMgPSB0aGlzLmdlb0NpdHlMaXN0Lm1hcCgoaXRlbTpJR2VvQ2VsbCkgPT4gaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBkYXRhLmZpbHRlcigoaXRlbTpJR2VvQ2VsbCkgPT4gb2xkSWRzLmluZGV4T2YoaXRlbS5faWQpIDwgMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW9DaXR5TGlzdCA9IHRoaXMuZ2VvQ2l0eUxpc3QuY29uY2F0KG5ld0xpc3QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnW0dlb0RhdGFNZ3JdIGdldEdlb0NpdHlzIENpdHlzQ291bnQnLCB0aGlzLmdlb0NpdHlMaXN0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VvQ2l0eUxpc3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dNb2RhbCgpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Zyw5Zu+5YWo6YOo55yB5Lu9XG4gICAgYXN5bmMgZ2V0R2VvUHJvdmluY2VzKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyDnu4/nuqzluqbmn6Xor6Lln47luIJcbiAgICBhc3luYyBnZXRHZW9DaXR5QnlMb2NhdGlvbigpIHtcblxuICAgIH1cblxuICAgIC8vIOe7j+e6rOW6puafpeivouecgeS7vVxuICAgIGFzeW5jIGdldEdlb1Byb3ZpbmNlQnlMb2NhdGlvbigpIHtcblxuICAgIH1cblxuICAgIC8vIOiOt+WPluWOu+i/h+WfjuW4glxuICAgIGFzeW5jIGdldENpdHlzKCkge1xuXG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Y676L+H55yB5Lu9XG4gICAgYXN5bmMgZ2V0UHJvdmluY2VzKCkge1xuXG4gICAgfVxuXG4gICAgLy8g6K6+572u5Y676L+H5Z+O5biCXG4gICAgYXN5bmMgc2V0Q2l0eXMoKSB7XG5cbiAgICB9XG5cbiAgICAvLyDorr7nva7ljrvov4fnnIHku71cbiAgICBhc3luYyBzZXRQcm92aW5jZSgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdlb0RhdGFNZ3IoKSJdfQ==