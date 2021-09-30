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
            return __generator(this, function (_a) {
                this.initMapData();
                return [2];
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
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QztBQUN2QywyQ0FBNEQ7QUFDNUQsc0RBQWdEO0FBQ2hELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRTlDLFNBQVMsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsRUFBRTtRQUNYLFdBQVcsRUFBRSxFQUF5QjtRQUN0QyxVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtJQUNLLFFBQVE7OztnQkFDVixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7Ozs7S0FDckI7SUFDRCxPQUFPLEVBQUU7UUFDQyxXQUFXOzs7Ozs7NEJBQ2IsbUJBQVcsRUFBRSxDQUFBOzRCQUNiLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQTs0QkFBZSxXQUFNLG9CQUFVLENBQUMsV0FBVyxFQUFFLEVBQUE7OzRCQUF0RCxHQUFVLFdBQVcsR0FBRyxTQUE4QixDQUFBOzRCQUN0RCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dDQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29DQUMvQixJQUFJLEVBQUUsbUJBQW1CO29DQUN6QixJQUFJLEVBQUUsYUFBYTtvQ0FDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztpQ0FDbEMsQ0FBQyxDQUFBO2dDQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQ0FDaEIsbUJBQVcsRUFBRSxDQUFBOzZCQUNoQjs7Ozs7U0FDSjtRQUVELFNBQVM7WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULFVBQVUsRUFBRSxJQUFJO2dCQUNoQixFQUFFLEVBQUU7b0JBQ0EsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7aUJBQzFCO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELFFBQVEsRUFBUjtZQUFBLGlCQWVDO1lBZEcsSUFBTSxJQUFJLEdBQUcsVUFBQyxNQUFVLEVBQUUsS0FBWSxFQUFFLE1BQWEsRUFBRSxHQUFVO2dCQUM3RCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQ3JDLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxNQUFNO29CQUNkLGdCQUFnQixFQUFFLEdBQUc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUM7Z0JBQ0gsSUFBTSxNQUFNLEdBQUcscUJBQVMsRUFBRSxDQUFBO2dCQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMvQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN2QixPQUFPLEtBQUssQ0FBQTtZQUNoQixDQUFDLENBQUE7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbk9wdGlvbiB9IGZyb20gJy4vZ2VuT3B0aW9uJ1xuaW1wb3J0IHsgaGlkZUxvYWRpbmcsIHNob3dMb2FkaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnQnXG5pbXBvcnQgR2VvRGF0YU1nciBmcm9tICcuLi8uLi9tb2RlbHMvR2VvRGF0YU1ncidcbmNvbnN0IGVjaGFydHMgPSByZXF1aXJlKCcuL2VjLWNhbnZhcy9lY2hhcnRzJylcblxuQ29tcG9uZW50KHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGVjOiB7fSxcbiAgICAgICAgb3B0aW9uOiB7fSwgXG4gICAgICAgIG1hcERhdGE6IHt9LFxuICAgICAgICBnZW9DaXR5TGlzdDogW10gYXMgKG51bGwgfCBJR2VvQ2VsbFtdKSxcbiAgICAgICAgY2hhcnRSZWFkeTogZmFsc2UsXG4gICAgICAgIGdlb0NlbGxDb3VudDogMFxuICAgIH0sXG4gICAgYXN5bmMgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdE1hcERhdGEoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBpbml0TWFwRGF0YSgpIHtcbiAgICAgICAgICAgIHNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZW9DaXR5TGlzdCA9IGF3YWl0IEdlb0RhdGFNZ3IuZ2V0R2VvQ2l0eXMoKVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5nZW9DaXR5TGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5tYXBEYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTAwMDAwX2Z1bGxcIixcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IHRoaXMuZGF0YS5nZW9DaXR5TGlzdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5Yid5aeL5YyW5Zyw5Zu+XG4gICAgICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY2hhcnRSZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYzoge1xuICAgICAgICAgICAgICAgICAgICBvbkluaXQ6IHRoaXMuc2V0Q2hhcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOiuvue9ruazqOWGjOWcsOWbvlxuICAgICAgICBzZXRDaGFydCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSAoY2FudmFzOmFueSwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCBkcHI6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBlY2hhcnRzLmluaXQoY2FudmFzLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW86IGRwcixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6ICdjYW52YXMnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZ2VuT3B0aW9uKClcbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpXG4gICAgICAgICAgICAgICAgZWNoYXJ0cy5yZWdpc3Rlck1hcCgnY2hpbmEnLCB0aGlzLmRhdGEubWFwRGF0YSlcbiAgICAgICAgICAgICAgICBjaGFydC5zZXRPcHRpb24ob3B0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluaXRcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==