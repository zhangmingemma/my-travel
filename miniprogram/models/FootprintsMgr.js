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
var network_1 = require("../utils/network");
var FootprintsMgr = (function () {
    function FootprintsMgr() {
        this.outlineData = [];
        this.cityCount = 0;
    }
    FootprintsMgr.prototype.getBaseMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, _b, _c, _d, outlines, _e, cityCount;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            action: 'getBaseMap'
                        })];
                    case 1:
                        _a = _f.sent(), error = _a.error, _b = _a.res, _c = _b === void 0 ? {} : _b, _d = _c.outlines, outlines = _d === void 0 ? [] : _d, _e = _c.cityCount, cityCount = _e === void 0 ? 370 : _e;
                        if (error) {
                            alert_1.showModal();
                        }
                        else {
                            this.outlineData = outlines;
                            this.cityCount = cityCount;
                        }
                        console.info('[FootprintsMgr] getBaseMap', this.outlineData);
                        return [2, this.outlineData];
                }
            });
        });
    };
    FootprintsMgr.prototype.getUserMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, outlines, _d, footprints;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            action: 'getUserMap'
                        })];
                    case 1:
                        _a = (_e.sent()).res, _b = _a === void 0 ? {} : _a, _c = _b.outlines, outlines = _c === void 0 ? [] : _c, _d = _b.footprints, footprints = _d === void 0 ? [] : _d;
                        console.info('[FootprintsMgr] getUserMap', outlines.map(function (x) { return x.properties.name; }), footprints.map(function (x) { return x.name; }));
                        return [2, {
                                outlines: this.outlineData.concat(outlines),
                                footprints: footprints.map(function (x) { return ({
                                    name: x.name,
                                    value: Math.floor(Math.random() * 10)
                                }); })
                            }];
                }
            });
        });
    };
    FootprintsMgr.prototype.getAllCitys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, _b, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            action: 'getAllCitysProperties'
                        })];
                    case 1:
                        _a = _c.sent(), error = _a.error, _b = _a.res, data = _b === void 0 ? [] : _b;
                        console.info('[FootprintsMgr] getAllCitys', error, data);
                        if (error) {
                            alert_1.showModal();
                        }
                        else {
                            return [2, data];
                        }
                        return [2, []];
                }
            });
        });
    };
    FootprintsMgr.prototype.addFootPrints = function (list) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var citys, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        citys = (_a = list
                            .filter(function (item) { return (item.chooseCityCount || 0) > 0; })) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, cur) {
                            var x = cur.list
                                .filter(function (city) { return city.isChoose; })
                                .map(function (city) { return ({
                                name: city.name,
                                adcode: city.adcode,
                                parentAdcode: city.parentAdcode,
                                isCity: city.isCity
                            }); });
                            return acc.concat(x);
                        }, []);
                        if (!citys || !citys.length)
                            return [2, '至少添加一个足迹，再提交噻~'];
                        return [4, network_1.cloudRequest({
                                name: 'geodata',
                                action: 'addUserFootPrints',
                                params: {
                                    citys: citys
                                }
                            })];
                    case 1:
                        error = (_b.sent()).error;
                        return [2, error];
                }
            });
        });
    };
    return FootprintsMgr;
}());
exports.default = new FootprintsMgr();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdHByaW50c01nci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvb3RwcmludHNNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMEM7QUFDMUMsNENBQStDO0FBRS9DO0lBQUE7UUFDSSxnQkFBVyxHQUFlLEVBQUUsQ0FBQTtRQUM1QixjQUFTLEdBQVcsQ0FBQyxDQUFBO0lBZ0Z6QixDQUFDO0lBN0VTLGtDQUFVLEdBQWhCOzs7Ozs0QkFDMkQsV0FBTSxzQkFBWSxDQUduRTs0QkFDRixJQUFJLEVBQUUsU0FBUzs0QkFDZixNQUFNLEVBQUUsWUFBWTt5QkFDdkIsQ0FBQyxFQUFBOzt3QkFOSSxLQUFpRCxTQU1yRCxFQU5LLEtBQUssV0FBQSxFQUFFLFdBQXFDLEVBQXJDLHFCQUFtQyxFQUFFLEtBQUEsRUFBL0IsZ0JBQVcsRUFBWCxRQUFRLG1CQUFDLEVBQUUsS0FBQSxFQUFFLGlCQUFhLEVBQWIsU0FBUyxtQkFBQyxHQUFHLEtBQUE7d0JBTzlDLElBQUksS0FBSyxFQUFFOzRCQUNQLGlCQUFTLEVBQUUsQ0FBQTt5QkFDZDs2QkFBTTs0QkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQTs0QkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7eUJBQzdCO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO3dCQUM1RCxXQUFPLElBQUksQ0FBQyxXQUFXLEVBQUE7Ozs7S0FDMUI7SUFHSyxrQ0FBVSxHQUFoQjs7Ozs7NEJBQ21ELFdBQU0sc0JBQVksQ0FHM0Q7NEJBQ0YsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsTUFBTSxFQUFFLFlBQVk7eUJBQ3ZCLENBQUMsRUFBQTs7d0JBTkssS0FBd0MsQ0FBQSxTQU03QyxDQUFBLElBTnlDLEVBQXBDLHFCQUFrQyxFQUFFLEtBQUEsRUFB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QWEsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSBcIi4uL3V0aWxzL2FsZXJ0XCJcbmltcG9ydCB7IGNsb3VkUmVxdWVzdCB9IGZyb20gXCIuLi91dGlscy9uZXR3b3JrXCJcblxuY2xhc3MgRm9vdHByaW50c01nciB7XG4gICAgb3V0bGluZURhdGE6IElHZW9DZWxsW10gPSBbXVxuICAgIGNpdHlDb3VudDogbnVtYmVyID0gMFxuICAgIFxuICAgIC8vIOiOt+WPluWfuuehgOWcsOWbvui9ruW7k1xuICAgIGFzeW5jIGdldEJhc2VNYXAoKTpQcm9taXNlPElHZW9DZWxsW10+IHtcbiAgICAgICAgY29uc3Qge2Vycm9yLCByZXM6eyBvdXRsaW5lcz1bXSwgY2l0eUNvdW50PTM3MCB9PXt9fSA9IGF3YWl0IGNsb3VkUmVxdWVzdDx7XG4gICAgICAgICAgICBvdXRsaW5lczogSUdlb0NlbGxbXSxcbiAgICAgICAgICAgIGNpdHlDb3VudDogbnVtYmVyXG4gICAgICAgIH0se30+KHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW9kYXRhJyxcbiAgICAgICAgICAgIGFjdGlvbjogJ2dldEJhc2VNYXAnXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgc2hvd01vZGFsKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZURhdGEgPSBvdXRsaW5lc1xuICAgICAgICAgICAgdGhpcy5jaXR5Q291bnQgPSBjaXR5Q291bnRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmluZm8oJ1tGb290cHJpbnRzTWdyXSBnZXRCYXNlTWFwJywgdGhpcy5vdXRsaW5lRGF0YSlcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGluZURhdGFcbiAgICB9XG5cbiAgICAvLyDojrflj5bnlKjmiLfotrPov7nlnLDlm77ova7lu5NcbiAgICBhc3luYyBnZXRVc2VyTWFwKCk6UHJvbWlzZTx7b3V0bGluZXM6IElHZW9DZWxsW10sIGZvb3RwcmludHM6e25hbWU6c3RyaW5nLCB2YWx1ZTpudW1iZXJ9W119PntcbiAgICAgICAgY29uc3Qge3Jlczoge291dGxpbmVzPVtdLCBmb290cHJpbnRzPVtdfT17fX0gPSBhd2FpdCBjbG91ZFJlcXVlc3Q8e1xuICAgICAgICAgICAgb3V0bGluZXM6IElHZW9DZWxsW10sXG4gICAgICAgICAgICBmb290cHJpbnRzOiBJRm9vdFByaW50Q2VsbFtdXG4gICAgICAgIH0se30+KHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW9kYXRhJyxcbiAgICAgICAgICAgIGFjdGlvbjogJ2dldFVzZXJNYXAnXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Zvb3RwcmludHNNZ3JdIGdldFVzZXJNYXAnLCBvdXRsaW5lcy5tYXAoeD0+eC5wcm9wZXJ0aWVzLm5hbWUpLCBmb290cHJpbnRzLm1hcCh4PT54Lm5hbWUpKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0bGluZXM6IHRoaXMub3V0bGluZURhdGEuY29uY2F0KG91dGxpbmVzKSxcbiAgICAgICAgICAgIGZvb3RwcmludHM6IGZvb3RwcmludHMubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMClcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5omA5pyJ55yB5biC5YiX6KGoXG4gICAgYXN5bmMgZ2V0QWxsQ2l0eXMoKTpQcm9taXNlPElQcm92aW5jZUNlbGxbXT4ge1xuICAgICAgICBjb25zdCB7ZXJyb3IsIHJlczogZGF0YSA9IFtdfSA9IGF3YWl0IGNsb3VkUmVxdWVzdDxJUHJvdmluY2VDZWxsW10se30+KHtcbiAgICAgICAgICAgIG5hbWU6ICdnZW9kYXRhJyxcbiAgICAgICAgICAgIGFjdGlvbjogJ2dldEFsbENpdHlzUHJvcGVydGllcydcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRm9vdHByaW50c01ncl0gZ2V0QWxsQ2l0eXMnLCBlcnJvciwgZGF0YSlcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBzaG93TW9kYWwoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICAvLyDorr7nva7nlKjmiLfotrPov7lcbiAgICBhc3luYyBhZGRGb290UHJpbnRzKGxpc3Q6IElQcm92aW5jZUNlbGxbXSkge1xuICAgICAgICBjb25zdCBjaXR5cyA9IGxpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAoaXRlbS5jaG9vc2VDaXR5Q291bnQgfHwgMCkgPiAwKVxuICAgICAgICAgICAgPy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGN1ci5saXN0XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoY2l0eSA9PiBjaXR5LmlzQ2hvb3NlKVxuICAgICAgICAgICAgICAgICAgICAubWFwKGNpdHkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNpdHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkY29kZTogY2l0eS5hZGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRBZGNvZGU6IGNpdHkucGFyZW50QWRjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaXR5OiBjaXR5LmlzQ2l0eVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdCh4KVxuICAgICAgICAgICAgfSxbXSlcbiAgICAgICAgaWYgKCFjaXR5cyB8fCAhY2l0eXMubGVuZ3RoKSByZXR1cm4gJ+iHs+Wwkea3u+WKoOS4gOS4qui2s+i/ue+8jOWGjeaPkOS6pOWZu34nXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGNsb3VkUmVxdWVzdDx7fSx7Y2l0eXM6IElGb290UHJpbnRDZWxsW119Pih7XG4gICAgICAgICAgICBuYW1lOiAnZ2VvZGF0YScsXG4gICAgICAgICAgICBhY3Rpb246ICdhZGRVc2VyRm9vdFByaW50cycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBjaXR5czogY2l0eXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRm9vdHByaW50c01ncigpIl19