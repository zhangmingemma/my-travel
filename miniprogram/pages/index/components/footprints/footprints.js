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
var EventCenter = require("../../../../utils/eventcenter");
Component({
    data: {
        mapData: {},
        mapOption: {},
        chartReady: false,
        mapType: define_1.MapEnum.MapType.CHINA,
        cityCount: 0,
        cityCountPercent: 0,
        footprints: [],
    },
    methods: {
        onLoad: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initBaseMap()];
                        case 1:
                            _a.sent();
                            return [4, this.getUserMap()];
                        case 2:
                            _a.sent();
                            EventCenter.register('updateFootprints', this, 'onUpdateFootprints');
                            return [2];
                    }
                });
            });
        },
        initBaseMap: function () {
            return __awaiter(this, void 0, void 0, function () {
                var outlines, cityCount;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert_1.showLoading();
                            return [4, FootprintsMgr_1.default.getBaseMap()];
                        case 1:
                            outlines = _a.sent();
                            if (outlines === null || outlines === void 0 ? void 0 : outlines.length) {
                                this.setData({
                                    mapOption: genOption_1.genOption(this.data.mapType, []),
                                    mapData: {
                                        type: "FeatureCollection",
                                        features: outlines
                                    }
                                });
                            }
                            cityCount = FootprintsMgr_1.default.cityCount;
                            this.setData({
                                cityCount: cityCount,
                                chartReady: true
                            });
                            alert_1.hideLoading();
                            return [2];
                    }
                });
            });
        },
        getUserMap: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, outlines, footprints, cityCountPercent;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, FootprintsMgr_1.default.getUserMap()];
                        case 1:
                            _a = _b.sent(), outlines = _a.outlines, footprints = _a.footprints;
                            cityCountPercent = parseInt(((footprints.length / this.data.cityCount) * 100).toFixed(0));
                            if (footprints === null || footprints === void 0 ? void 0 : footprints.length) {
                                this.setData({
                                    footprints: footprints,
                                    cityCountPercent: cityCountPercent,
                                    mapOption: genOption_1.genOption(this.data.mapType, footprints),
                                    mapData: {
                                        type: "FeatureCollection",
                                        features: outlines
                                    }
                                });
                            }
                            return [2];
                    }
                });
            });
        },
        onUpdateFootprints: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert_1.showLoading();
                            return [4, this.getUserMap()];
                        case 1:
                            _a.sent();
                            alert_1.hideLoading();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdHByaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RwcmludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsaURBQW1FO0FBQ25FLG1EQUFtRDtBQUNuRCx5Q0FBd0M7QUFDeEMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFN0QsU0FBUyxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEVBR1I7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1FBQzlCLFNBQVMsRUFBRSxDQUFDO1FBQ1osZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixVQUFVLEVBQUUsRUFBbUM7S0FDbEQ7SUFFRCxPQUFPLEVBQUU7UUFDQyxNQUFNOzs7O2dDQUNSLFdBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzs0QkFBeEIsU0FBd0IsQ0FBQTs0QkFDeEIsV0FBTSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUE7OzRCQUF2QixTQUF1QixDQUFBOzRCQUN2QixXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFBOzs7OztTQUN2RTtRQUVLLFdBQVc7Ozs7Ozs0QkFDYixtQkFBVyxFQUFFLENBQUE7NEJBQ0ksV0FBTSx1QkFBYSxDQUFDLFVBQVUsRUFBRSxFQUFBOzs0QkFBM0MsUUFBUSxHQUFHLFNBQWdDOzRCQUNqRCxJQUFJLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLEVBQUU7Z0NBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7b0NBQ1QsU0FBUyxFQUFFLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO29DQUMzQyxPQUFPLEVBQUU7d0NBQ0wsSUFBSSxFQUFFLG1CQUFtQjt3Q0FDekIsUUFBUSxFQUFFLFFBQVE7cUNBQ3JCO2lDQUNKLENBQUMsQ0FBQTs2QkFDTDs0QkFDSyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxTQUFTLENBQUE7NEJBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsU0FBUyxXQUFBO2dDQUNULFVBQVUsRUFBRSxJQUFJOzZCQUNuQixDQUFDLENBQUE7NEJBQ0YsbUJBQVcsRUFBRSxDQUFBOzs7OztTQUNoQjtRQUVLLFVBQVU7Ozs7O2dDQUNtQixXQUFNLHVCQUFhLENBQUMsVUFBVSxFQUFFLEVBQUE7OzRCQUF6RCxLQUF5QixTQUFnQyxFQUF4RCxRQUFRLGNBQUEsRUFBRSxVQUFVLGdCQUFBOzRCQUNyQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDL0YsSUFBSSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsTUFBTSxFQUFFO2dDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO29DQUNULFVBQVUsWUFBQTtvQ0FDVixnQkFBZ0Isa0JBQUE7b0NBQ2hCLFNBQVMsRUFBRSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQ0FDbkQsT0FBTyxFQUFFO3dDQUNMLElBQUksRUFBRSxtQkFBbUI7d0NBQ3pCLFFBQVEsRUFBRSxRQUFRO3FDQUNyQjtpQ0FDSixDQUFDLENBQUE7NkJBQ0w7Ozs7O1NBQ0o7UUFFSyxrQkFBa0I7Ozs7OzRCQUNwQixtQkFBVyxFQUFFLENBQUE7NEJBQ2IsV0FBTSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUE7OzRCQUF2QixTQUF1QixDQUFBOzRCQUN2QixtQkFBVyxFQUFFLENBQUE7Ozs7O1NBQ2hCO1FBRUQsS0FBSztZQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1YsR0FBRyxFQUFFLHNCQUFzQjthQUM5QixDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdHByaW50c01nciBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL0Zvb3RwcmludHNNZ3JcIjtcbmltcG9ydCB7IGhpZGVMb2FkaW5nLCBzaG93TG9hZGluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9hbGVydFwiO1xuaW1wb3J0IHsgTWFwRW51bSB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9kZWZpbmVcIjtcbmltcG9ydCB7IGdlbk9wdGlvbiB9IGZyb20gXCIuL2dlbk9wdGlvblwiO1xuY29uc3QgRXZlbnRDZW50ZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdXRpbHMvZXZlbnRjZW50ZXJcIik7XG5cbkNvbXBvbmVudCh7XG4gICAgZGF0YToge1xuICAgICAgICBtYXBEYXRhOiB7fSBhcyB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBmZWF0dXJlczogSUdlb0NlbGxbXVxuICAgICAgICB9LFxuICAgICAgICBtYXBPcHRpb246IHt9LFxuICAgICAgICBjaGFydFJlYWR5OiBmYWxzZSxcbiAgICAgICAgbWFwVHlwZTogTWFwRW51bS5NYXBUeXBlLkNISU5BLFxuICAgICAgICBjaXR5Q291bnQ6IDAsXG4gICAgICAgIGNpdHlDb3VudFBlcmNlbnQ6IDAsXG4gICAgICAgIGZvb3RwcmludHM6IFtdIGFzIHtuYW1lOnN0cmluZywgdmFsdWU6bnVtYmVyfVtdLFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdEJhc2VNYXAoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRVc2VyTWFwKClcbiAgICAgICAgICAgIEV2ZW50Q2VudGVyLnJlZ2lzdGVyKCd1cGRhdGVGb290cHJpbnRzJywgdGhpcywgJ29uVXBkYXRlRm9vdHByaW50cycpXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgaW5pdEJhc2VNYXAoKSB7XG4gICAgICAgICAgICBzaG93TG9hZGluZygpXG4gICAgICAgICAgICBjb25zdCBvdXRsaW5lcyA9IGF3YWl0IEZvb3RwcmludHNNZ3IuZ2V0QmFzZU1hcCgpXG4gICAgICAgICAgICBpZiAob3V0bGluZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcE9wdGlvbjogZ2VuT3B0aW9uKHRoaXMuZGF0YS5tYXBUeXBlLCBbXSksXG4gICAgICAgICAgICAgICAgICAgIG1hcERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBvdXRsaW5lc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNpdHlDb3VudCA9IEZvb3RwcmludHNNZ3IuY2l0eUNvdW50XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNpdHlDb3VudCxcbiAgICAgICAgICAgICAgICBjaGFydFJlYWR5OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGdldFVzZXJNYXAoKSB7XG4gICAgICAgICAgICBjb25zdCB7b3V0bGluZXMsIGZvb3RwcmludHN9ID0gYXdhaXQgRm9vdHByaW50c01nci5nZXRVc2VyTWFwKClcbiAgICAgICAgICAgIGNvbnN0IGNpdHlDb3VudFBlcmNlbnQgPSBwYXJzZUludCgoKGZvb3RwcmludHMubGVuZ3RoIC8gdGhpcy5kYXRhLmNpdHlDb3VudCkgKiAxMDApLnRvRml4ZWQoMCkpXG4gICAgICAgICAgICBpZiAoZm9vdHByaW50cz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdHByaW50cyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eUNvdW50UGVyY2VudCxcbiAgICAgICAgICAgICAgICAgICAgbWFwT3B0aW9uOiBnZW5PcHRpb24odGhpcy5kYXRhLm1hcFR5cGUsIGZvb3RwcmludHMpLFxuICAgICAgICAgICAgICAgICAgICBtYXBEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogb3V0bGluZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgICBcbiAgICAgICAgYXN5bmMgb25VcGRhdGVGb290cHJpbnRzKCkge1xuICAgICAgICAgICAgc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRVc2VyTWFwKClcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKClcbiAgICAgICAgfSxcblxuICAgICAgICBvbkFkZCgpIHtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9zZWxlY3Qvc2VsZWN0YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19