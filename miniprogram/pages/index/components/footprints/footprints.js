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
var FootprintsMgr_1 = require("../../../../models/FootprintsMgr");
var alert_1 = require("../../../../utils/alert");
var define_1 = require("../../../../utils/define");
var genOption_1 = require("./genOption");
Component({
    data: {
        mapData: {},
        mapOption: {},
        mapType: define_1.MapEnum.MapType.CHINA
    },
    methods: {
        onLoad: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initMapData()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        },
        initMapData: function () {
            return __awaiter(this, void 0, void 0, function () {
                var outlines;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert_1.showLoading();
                            return [4, FootprintsMgr_1.default.getUserMap()];
                        case 1:
                            outlines = _a.sent();
                            if (outlines) {
                                this.setData({
                                    mapOption: genOption_1.genOption(this.data.mapType, [{
                                            name: '海南省',
                                            value: 1
                                        }, {
                                            name: '内蒙古自治区',
                                            value: 1
                                        }]),
                                    mapData: {
                                        type: "FeatureCollection",
                                        features: outlines
                                    }
                                });
                                alert_1.hideLoading();
                            }
                            return [2];
                    }
                });
            });
        },
        onAdd: function () {
            wx.navigateTo({
                url: "/pages/select/select"
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdHByaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RwcmludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsaURBQW1FO0FBQ25FLG1EQUFtRDtBQUNuRCx5Q0FBd0M7QUFFeEMsU0FBUyxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEVBR1I7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLO0tBQ2pDO0lBRUQsT0FBTyxFQUFFO1FBQ0MsTUFBTTs7OztnQ0FDUixXQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7NEJBQXhCLFNBQXdCLENBQUE7Ozs7O1NBQzNCO1FBRUssV0FBVzs7Ozs7OzRCQUNiLG1CQUFXLEVBQUUsQ0FBQTs0QkFDSSxXQUFNLHVCQUFhLENBQUMsVUFBVSxFQUFFLEVBQUE7OzRCQUEzQyxRQUFRLEdBQUcsU0FBZ0M7NEJBQ2pELElBQUksUUFBUSxFQUFFO2dDQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7b0NBQ1QsU0FBUyxFQUFFLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0Q0FDckMsSUFBSSxFQUFFLEtBQUs7NENBQ1gsS0FBSyxFQUFFLENBQUM7eUNBQ1gsRUFBRTs0Q0FDQyxJQUFJLEVBQUUsUUFBUTs0Q0FDZCxLQUFLLEVBQUUsQ0FBQzt5Q0FDWCxDQUFDLENBQUM7b0NBQ0gsT0FBTyxFQUFFO3dDQUNMLElBQUksRUFBRSxtQkFBbUI7d0NBQ3pCLFFBQVEsRUFBRSxRQUFRO3FDQUNyQjtpQ0FDSixDQUFDLENBQUE7Z0NBQ0YsbUJBQVcsRUFBRSxDQUFBOzZCQUNoQjs7Ozs7U0FDSjtRQUVELEtBQUs7WUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxzQkFBc0I7YUFDOUIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RwcmludHNNZ3IgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Gb290cHJpbnRzTWdyXCI7XG5pbXBvcnQgeyBoaWRlTG9hZGluZywgc2hvd0xvYWRpbmcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvYWxlcnRcIjtcbmltcG9ydCB7IE1hcEVudW0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvZGVmaW5lXCI7XG5pbXBvcnQgeyBnZW5PcHRpb24gfSBmcm9tIFwiLi9nZW5PcHRpb25cIjtcblxuQ29tcG9uZW50KHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG1hcERhdGE6IHt9IGFzIHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBJR2VvQ2VsbFtdXG4gICAgICAgIH0sXG4gICAgICAgIG1hcE9wdGlvbjoge30sXG4gICAgICAgIG1hcFR5cGU6IE1hcEVudW0uTWFwVHlwZS5DSElOQVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdE1hcERhdGEoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGluaXRNYXBEYXRhKCkge1xuICAgICAgICAgICAgc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgY29uc3Qgb3V0bGluZXMgPSBhd2FpdCBGb290cHJpbnRzTWdyLmdldFVzZXJNYXAoKVxuICAgICAgICAgICAgaWYgKG91dGxpbmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgbWFwT3B0aW9uOiBnZW5PcHRpb24odGhpcy5kYXRhLm1hcFR5cGUsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5rW35Y2X55yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflhoXokpnlj6Toh6rmsrvljLonLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgICAgICAgICBtYXBEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogb3V0bGluZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uQWRkKCkge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3NlbGVjdC9zZWxlY3RgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=