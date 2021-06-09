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
var PAGESIZE = 50;
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
                        storageData = wx.getStorageSync(define_1.StorageKey.GeoCitysStorage);
                        console.info('[GeoDataMgr] getStorageSync', define_1.StorageKey.GeoCitysStorage, storageData);
                        if (storageData) {
                            this.geoCityList = storageData;
                            return [2, this.geoCityList];
                        }
                        if (!!this.geoCityCount) return [3, 2];
                        return [4, this.getGeoCityCount()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
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
                                    wx.setStorage({
                                        key: define_1.StorageKey.GeoCitysStorage,
                                        data: _this.geoCityList
                                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvRGF0YU1nci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdlb0RhdGFNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMEM7QUFDMUMsMENBQTRDO0FBQzVDLDRDQUErQztBQUMvQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7QUFFbkI7SUFBQTtRQUNJLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLGdCQUFXLEdBQUcsRUFBZ0IsQ0FBQTtJQTBHbEMsQ0FBQztJQXZHUyxvQ0FBZSxHQUFyQjs7Ozs7NEJBQ3lCLFdBQU0sc0JBQVksQ0FBcUI7NEJBQ3hELElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRTtnQ0FDRixNQUFNLEVBQUUsVUFBVTs2QkFDckI7eUJBQ0osQ0FBQyxFQUFBOzt3QkFMSSxLQUFlLFNBS25CLEVBTEssS0FBSyxXQUFBLEVBQUUsR0FBRyxTQUFBO3dCQU1qQixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDckQsSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDUixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssS0FBSSxDQUFDLENBQUE7eUJBQ3RDOzZCQUFNOzRCQUNILGlCQUFTLEVBQUUsQ0FBQTt5QkFDZDt3QkFDRCxXQUFPLElBQUksQ0FBQyxZQUFZLEVBQUE7Ozs7S0FDM0I7SUFHSyxnQ0FBVyxHQUFqQjs7Ozs7Ozt3QkFFVSxXQUFXLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO3dCQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLG1CQUFVLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFBO3dCQUNwRixJQUFJLFdBQVcsRUFBRTs0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VSxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tIFwiLi4vdXRpbHMvYWxlcnRcIlxuaW1wb3J0IHsgU3RvcmFnZUtleSB9IGZyb20gXCIuLi91dGlscy9kZWZpbmVcIlxuaW1wb3J0IHsgY2xvdWRSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzL25ldHdvcmtcIlxuY29uc3QgUEFHRVNJWkUgPSA1MFxuXG5jbGFzcyBHZW9EYXRhTWdyIHtcbiAgICBnZW9DaXR5Q291bnQgPSAwXG4gICAgZ2VvQ2l0eUxpc3QgPSBbXSBhcyBJR2VvQ2VsbFtdXG4gICAgXG4gICAgLy8g6I635Y+W5Zyw5Zu+5Z+O5biC5oC75pWwXG4gICAgYXN5bmMgZ2V0R2VvQ2l0eUNvdW50KCk6UHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qge2Vycm9yLCByZXN9ID0gYXdhaXQgY2xvdWRSZXF1ZXN0PHt0b3RhbDogbnVtYmVyfSx7fT4oe1xuICAgICAgICAgICAgbmFtZTogJ2dlb2RhdGEnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2dldENvdW50J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmluZm8oJ1tHZW9EYXRhTWdyXSBnZXRDaXR5Q291bnQnLCBlcnJvciwgcmVzKVxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmdlb0NpdHlDb3VudCA9IHJlcz8udG90YWwgfHwgMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd01vZGFsKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZW9DaXR5Q291bnRcbiAgICB9XG5cbiAgICAvLyDojrflj5blnLDlm77lhajpg6jln47luIJcbiAgICBhc3luYyBnZXRHZW9DaXR5cygpOlByb21pc2U8bnVsbCB8IElHZW9DZWxsW10+IHtcbiAgICAgICAgLy8g5Y+W57yT5a2YXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoU3RvcmFnZUtleS5HZW9DaXR5c1N0b3JhZ2UpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0dlb0RhdGFNZ3JdIGdldFN0b3JhZ2VTeW5jJywgU3RvcmFnZUtleS5HZW9DaXR5c1N0b3JhZ2UsIHN0b3JhZ2VEYXRhKVxuICAgICAgICBpZiAoc3RvcmFnZURhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VvQ2l0eUxpc3QgPSBzdG9yYWdlRGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VvQ2l0eUxpc3RcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWPluaAu+aVsOWQju+8jOWIhueJh+W5tuWPkeiOt+WPluWFqOmDqOWcsOWbvuaVsOaNrlxuICAgICAgICBpZiAoIXRoaXMuZ2VvQ2l0eUNvdW50KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldEdlb0NpdHlDb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhc2tDb3VudCA9IE1hdGguY2VpbCh0aGlzLmdlb0NpdHlDb3VudC9QQUdFU0laRSlcbiAgICAgICAgbGV0IHByb21pc2VzID0gW11cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goY2xvdWRSZXF1ZXN0PHtkYXRhOiBJR2VvQ2VsbFtdfSwgSUdldEdlb0RhdGFSZXE+KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2VvZGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBQQUdFU0laRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogaSpQQUdFU0laRVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0dlb0RhdGFNZ3JdIGdldEdlb0NpdHlzJywgcmVzKVxuXG4gICAgICAgIC8vIOWkhOeQhuWcsOWbvuaVsOaNru+8jOiuoeWFpee8k+WtmFxuICAgICAgICBpZiAoIHJlcyAmJiByZXMubGVuZ3RoICYmICFyZXMuZmluZChpdGVtID0+IGl0ZW0uZXJyb3IpKSB7XG4gICAgICAgICAgICByZXMubWFwKChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpdGVtLnJlcz8uZGF0YSB8fCBbXVxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZElkcyA9IHRoaXMuZ2VvQ2l0eUxpc3QubWFwKChpdGVtOklHZW9DZWxsKSA9PiBpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGRhdGEuZmlsdGVyKChpdGVtOklHZW9DZWxsKSA9PiBvbGRJZHMuaW5kZXhPZihpdGVtLl9pZCkgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlb0NpdHlMaXN0ID0gdGhpcy5nZW9DaXR5TGlzdC5jb25jYXQobmV3TGlzdClcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFN0b3JhZ2VLZXkuR2VvQ2l0eXNTdG9yYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5nZW9DaXR5TGlzdFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ1tHZW9EYXRhTWdyXSBnZXRHZW9DaXR5cyBDaXR5c0NvdW50JywgdGhpcy5nZW9DaXR5TGlzdC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlb0NpdHlMaXN0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93TW9kYWwoKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPluWcsOWbvuWFqOmDqOecgeS7vVxuICAgIGFzeW5jIGdldEdlb1Byb3ZpbmNlcygpIHtcblxuICAgIH1cblxuICAgIC8vIOe7j+e6rOW6puafpeivouWfjuW4glxuICAgIGFzeW5jIGdldEdlb0NpdHlCeUxvY2F0aW9uKCkge1xuXG4gICAgfVxuXG4gICAgLy8g57uP57qs5bqm5p+l6K+i55yB5Lu9XG4gICAgYXN5bmMgZ2V0R2VvUHJvdmluY2VCeUxvY2F0aW9uKCkge1xuXG4gICAgfVxuXG4gICAgLy8g6I635Y+W5Y676L+H5Z+O5biCXG4gICAgYXN5bmMgZ2V0Q2l0eXMoKSB7XG5cbiAgICB9XG5cbiAgICAvLyDojrflj5bljrvov4fnnIHku71cbiAgICBhc3luYyBnZXRQcm92aW5jZXMoKSB7XG5cbiAgICB9XG5cbiAgICAvLyDorr7nva7ljrvov4fln47luIJcbiAgICBhc3luYyBzZXRDaXR5cygpIHtcblxuICAgIH1cblxuICAgIC8vIOiuvue9ruWOu+i/h+ecgeS7vVxuICAgIGFzeW5jIHNldFByb3ZpbmNlKCkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2VvRGF0YU1ncigpIl19