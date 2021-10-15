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
var define_1 = require("../../utils/define");
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
                                this.data.mapData = {
                                    type: "FeatureCollection",
                                    features: this.data.geoCityList
                                };
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
                var option = genOption_1.genOption([
                    { name: '广州市', value: 1 },
                    { name: '阿拉善盟', value: 1 }
                ]);
                canvas.setChart(chart);
                echarts.registerMap(define_1.MapEnum.MapType.CHINA, _this.data.mapData);
                chart.setOption(option);
                return chart;
            };
            return init;
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QztBQUN2QywyQ0FBNEQ7QUFDNUQsc0RBQWdEO0FBQ2hELDZDQUE2QztBQUM3QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUU5QyxTQUFTLENBQUM7SUFDTixJQUFJLEVBQUU7UUFDRixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBeUI7UUFDdEMsVUFBVSxFQUFFLEtBQUs7UUFDakIsWUFBWSxFQUFFLENBQUM7S0FDbEI7SUFDSyxRQUFROzs7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBOzs7O0tBQ3JCO0lBQ0QsT0FBTyxFQUFFO1FBQ0MsV0FBVzs7Ozs7OzRCQUNiLG1CQUFXLEVBQUUsQ0FBQTs0QkFDYixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUE7NEJBQWUsV0FBTSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxFQUFBOzs0QkFBdEQsR0FBVSxXQUFXLEdBQUcsU0FBOEIsQ0FBQTs0QkFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7b0NBQ2hCLElBQUksRUFBRSxtQkFBbUI7b0NBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7aUNBQ2xDLENBQUE7Z0NBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO2dDQUNoQixtQkFBVyxFQUFFLENBQUE7NkJBQ2hCOzs7OztTQUNKO1FBRUQsU0FBUztZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEVBQUUsRUFBRTtvQkFDQSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtpQkFDMUI7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsUUFBUSxFQUFSO1lBQUEsaUJBa0JDO1lBakJHLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBVSxFQUFFLEtBQVksRUFBRSxNQUFhLEVBQUUsR0FBVTtnQkFDN0QsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUNyQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsTUFBTTtvQkFDZCxnQkFBZ0IsRUFBRSxHQUFHO29CQUNyQixRQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQyxDQUFDO2dCQUNILElBQU0sTUFBTSxHQUFHLHFCQUFTLENBQUM7b0JBQ3ZCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztpQkFDMUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzdELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFBO1lBQ2hCLENBQUMsQ0FBQTtZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2YsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuT3B0aW9uIH0gZnJvbSAnLi9nZW5PcHRpb24nXG5pbXBvcnQgeyBoaWRlTG9hZGluZywgc2hvd0xvYWRpbmcgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydCdcbmltcG9ydCBHZW9EYXRhTWdyIGZyb20gJy4uLy4uL21vZGVscy9HZW9EYXRhTWdyJ1xuaW1wb3J0IHsgTWFwRW51bSB9IGZyb20gJy4uLy4uL3V0aWxzL2RlZmluZSc7XG5jb25zdCBlY2hhcnRzID0gcmVxdWlyZSgnLi9lYy1jYW52YXMvZWNoYXJ0cycpXG5cbkNvbXBvbmVudCh7XG4gICAgZGF0YToge1xuICAgICAgICBlYzoge30sXG4gICAgICAgIG9wdGlvbjoge30sIFxuICAgICAgICBtYXBEYXRhOiB7fSxcbiAgICAgICAgZ2VvQ2l0eUxpc3Q6IFtdIGFzIChudWxsIHwgSUdlb0NlbGxbXSksXG4gICAgICAgIGNoYXJ0UmVhZHk6IGZhbHNlLFxuICAgICAgICBnZW9DZWxsQ291bnQ6IDBcbiAgICB9LFxuICAgIGFzeW5jIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLmluaXRNYXBEYXRhKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgaW5pdE1hcERhdGEoKSB7XG4gICAgICAgICAgICBzaG93TG9hZGluZygpXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2VvQ2l0eUxpc3QgPSBhd2FpdCBHZW9EYXRhTWdyLmdldEdlb0NpdHlzKClcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZ2VvQ2l0eUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubWFwRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogdGhpcy5kYXRhLmdlb0NpdHlMaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOWIneWni+WMluWcsOWbvlxuICAgICAgICBpbml0Q2hhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNoYXJ0UmVhZHk6IHRydWUsXG4gICAgICAgICAgICAgICAgZWM6IHtcbiAgICAgICAgICAgICAgICAgICAgb25Jbml0OiB0aGlzLnNldENoYXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDorr7nva7ms6jlhozlnLDlm75cbiAgICAgICAgc2V0Q2hhcnQoKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKGNhbnZhczphbnksIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgZHByOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNhbnZhcywgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvOiBkcHIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAnY2FudmFzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGdlbk9wdGlvbihbXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICflub/lt57luIInLCB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAn6Zi/5ouJ5ZaE55ufJywgdmFsdWU6IDF9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpXG4gICAgICAgICAgICAgICAgZWNoYXJ0cy5yZWdpc3Rlck1hcChNYXBFbnVtLk1hcFR5cGUuQ0hJTkEsIHRoaXMuZGF0YS5tYXBEYXRhKVxuICAgICAgICAgICAgICAgIGNoYXJ0LnNldE9wdGlvbihvcHRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5pdFxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19