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
var genOption_1 = require("./genOption");
var alert_1 = require("../../utils/alert");
var GeoDataMgr_1 = require("../../models/GeoDataMgr");
var LocationMgr_1 = require("../../models/LocationMgr");
var network_1 = require("../../utils/network");
var echarts = require('./ec-canvas/echarts');
Component({
    data: {
        ec: {},
        option: {},
        mapData: {},
        geoCityList: [],
        chartReady: false,
        geoCellCount: 0
    },
    attached: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            data: {
                                action: 'get',
                                params: {
                                    adcode: 510100
                                }
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        this.data.mapData = JSON.stringify({
                            type: "FeatureCollection",
                            name: "100000_full",
                            features: res.res.data
                        });
                        console.error(res);
                        this.initChart();
                        return [2];
                }
            });
        });
    },
    methods: {
        initMapData: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert_1.showLoading();
                            _a = this.data;
                            return [4, GeoDataMgr_1.default.getGeoCitys()];
                        case 1:
                            _a.geoCityList = _b.sent();
                            if (this.data.geoCityList) {
                                this.data.mapData = JSON.stringify({
                                    type: "FeatureCollection",
                                    name: "100000_full",
                                    features: this.data.geoCityList
                                });
                                this.initChart();
                                alert_1.hideLoading();
                            }
                            return [2];
                    }
                });
            });
        },
        initChart: function () {
            this.setData({
                chartReady: true,
                ec: {
                    onInit: this.setChart()
                }
            });
        },
        setChart: function () {
            var _this = this;
            var init = function (canvas, width, height, dpr) {
                var chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr,
                    renderer: 'canvas'
                });
                var option = genOption_1.genOption();
                canvas.setChart(chart);
                echarts.registerMap('china', _this.data.mapData);
                chart.setOption(option);
                return chart;
            };
            return init;
        },
        getLocation: function () {
            LocationMgr_1.default.getLocation();
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QztBQUN2QywyQ0FBNEQ7QUFDNUQsc0RBQWdEO0FBQ2hELHdEQUFrRDtBQUNsRCwrQ0FBa0Q7QUFDbEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFFOUMsU0FBUyxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0YsRUFBRSxFQUFFLEVBQUU7UUFDTixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFO1FBQ1gsV0FBVyxFQUFFLEVBQXlCO1FBQ3RDLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0lBQ0ssUUFBUSxFQUFkOzs7Ozs0QkFnQm9CLFdBQU0sc0JBQVksQ0FBeUM7NEJBQ3ZFLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRTtnQ0FDRixNQUFNLEVBQUUsS0FBSztnQ0FDYixNQUFNLEVBQUU7b0NBQ0osTUFBTSxFQUFFLE1BQU07aUNBQ2pCOzZCQUNKO3lCQUNKLENBQUMsRUFBQTs7d0JBUkksR0FBRyxHQUFPLFNBUWQ7d0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDL0IsSUFBSSxFQUFFLG1CQUFtQjs0QkFDekIsSUFBSSxFQUFFLGFBQWE7NEJBQ25CLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUk7eUJBQ3pCLENBQUMsQ0FBQTt3QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7Ozs7O0tBR25CO0lBQ0QsT0FBTyxFQUFFO1FBQ0MsV0FBVzs7Ozs7OzRCQUNiLG1CQUFXLEVBQUUsQ0FBQTs0QkFDYixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUE7NEJBQWUsV0FBTSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxFQUFBOzs0QkFBdEQsR0FBVSxXQUFXLEdBQUcsU0FBOEIsQ0FBQTs0QkFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQ0FDL0IsSUFBSSxFQUFFLG1CQUFtQjtvQ0FDekIsSUFBSSxFQUFFLGFBQWE7b0NBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7aUNBQ2xDLENBQUMsQ0FBQTtnQ0FDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7Z0NBQ2hCLG1CQUFXLEVBQUUsQ0FBQTs2QkFDaEI7Ozs7O1NBQ0o7UUFFRCxTQUFTO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsRUFBRSxFQUFFO29CQUNBLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO2lCQUMxQjthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxRQUFRLEVBQVI7WUFBQSxpQkFlQztZQWRHLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBVSxFQUFFLEtBQVksRUFBRSxNQUFhLEVBQUUsR0FBVTtnQkFDN0QsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUNyQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsTUFBTTtvQkFDZCxnQkFBZ0IsRUFBRSxHQUFHO29CQUNyQixRQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQyxDQUFDO2dCQUNILElBQU0sTUFBTSxHQUFHLHFCQUFTLEVBQUUsQ0FBQTtnQkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkIsT0FBTyxLQUFLLENBQUE7WUFDaEIsQ0FBQyxDQUFBO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDZixDQUFDO1FBRUQsV0FBVztZQUNQLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuT3B0aW9uIH0gZnJvbSAnLi9nZW5PcHRpb24nXG5pbXBvcnQgeyBoaWRlTG9hZGluZywgc2hvd0xvYWRpbmcgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydCdcbmltcG9ydCBHZW9EYXRhTWdyIGZyb20gJy4uLy4uL21vZGVscy9HZW9EYXRhTWdyJ1xuaW1wb3J0IExvY2F0aW9uTWdyIGZyb20gJy4uLy4uL21vZGVscy9Mb2NhdGlvbk1ncidcbmltcG9ydCB7IGNsb3VkUmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL25ldHdvcmsnXG5jb25zdCBlY2hhcnRzID0gcmVxdWlyZSgnLi9lYy1jYW52YXMvZWNoYXJ0cycpXG5cbkNvbXBvbmVudCh7XG4gICAgZGF0YToge1xuICAgICAgICBlYzoge30sXG4gICAgICAgIG9wdGlvbjoge30sIFxuICAgICAgICBtYXBEYXRhOiB7fSxcbiAgICAgICAgZ2VvQ2l0eUxpc3Q6IFtdIGFzIChudWxsIHwgSUdlb0NlbGxbXSksXG4gICAgICAgIGNoYXJ0UmVhZHk6IGZhbHNlLFxuICAgICAgICBnZW9DZWxsQ291bnQ6IDBcbiAgICB9LFxuICAgIGFzeW5jIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBjbG91ZFJlcXVlc3Q8e2RhdGE6IElHZW9DZWxsW119LCBJR2V0R2VvRGF0YVJlcXxhbnk+KHtcbiAgICAgICAgLy8gICAgIG5hbWU6ICdnZW9kYXRhJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IHtcbiAgICAgICAgLy8gICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgICAvLyAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAvLyAgICAgICAgICAgICBhZGNvZGU6IFwiNzEwMDAwXCIsXG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwicHJvcGVydGllcy5wYXJlbnRcIjoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwiYWRjb2RlXCI6IDEwMDAwMFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwicHJvcGVydGllcy5jZW50ZXJcIjogWzEyMS41MDkwNjIsMjUuMDQ0MzMyXVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgY2xvdWRSZXF1ZXN0PHtkYXRhOiBJR2VvQ2VsbFtdfSwgSUdldEdlb0RhdGFSZXF8YW55Pih7XG4gICAgICAgICAgICBuYW1lOiAnZ2VvZGF0YScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRjb2RlOiA1MTAxMDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZGF0YS5tYXBEYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgICAgICAgICAgbmFtZTogXCIxMDAwMDBfZnVsbFwiLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHJlcy5yZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmVycm9yKHJlcylcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgICAvLyB0aGlzLmluaXRNYXBEYXRhKClcbiAgICAgICAgLy8gdGhpcy5nZXRMb2NhdGlvbigpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGluaXRNYXBEYXRhKCkge1xuICAgICAgICAgICAgc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgdGhpcy5kYXRhLmdlb0NpdHlMaXN0ID0gYXdhaXQgR2VvRGF0YU1nci5nZXRHZW9DaXR5cygpXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmdlb0NpdHlMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1hcERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIxMDAwMDBfZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogdGhpcy5kYXRhLmdlb0NpdHlMaXN0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICAgICAgICAgICAgaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDliJ3lp4vljJblnLDlm75cbiAgICAgICAgaW5pdENoYXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBjaGFydFJlYWR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGVjOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uSW5pdDogdGhpcy5zZXRDaGFydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6K6+572u5rOo5YaM5Zyw5Zu+XG4gICAgICAgIHNldENoYXJ0KCkge1xuICAgICAgICAgICAgY29uc3QgaW5pdCA9IChjYW52YXM6YW55LCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIGRwcjpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdChjYW52YXMsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbzogZHByLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogJ2NhbnZhcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBnZW5PcHRpb24oKVxuICAgICAgICAgICAgICAgIGNhbnZhcy5zZXRDaGFydChjaGFydClcbiAgICAgICAgICAgICAgICBlY2hhcnRzLnJlZ2lzdGVyTWFwKCdjaGluYScsIHRoaXMuZGF0YS5tYXBEYXRhKVxuICAgICAgICAgICAgICAgIGNoYXJ0LnNldE9wdGlvbihvcHRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5pdFxuICAgICAgICB9LFxuICAgICAgICAvLyDojrflj5bnlKjmiLflnLDnkIbkvY3nva5cbiAgICAgICAgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgICAgICBMb2NhdGlvbk1nci5nZXRMb2NhdGlvbigpXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=