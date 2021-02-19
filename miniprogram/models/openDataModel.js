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
exports.getUserInfo = exports.getUserCloudID = exports.getAuthorize = void 0;
var network_1 = require("../utils/network");
var getAuthorize = function (scope) { return __awaiter(void 0, void 0, void 0, function () {
    var authSetting;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, wx.getSetting()];
            case 1:
                authSetting = (_a.sent()).authSetting;
                console.info('wx.authorize start', authSetting);
                return [2, authSetting && authSetting[scope] || false];
        }
    });
}); };
exports.getAuthorize = getAuthorize;
var getUserCloudID = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, wx.getUserInfo({})];
            case 1:
                res = _a.sent();
                console.info('wx.getUserInfo suc', res);
                return [2, res];
            case 2:
                e_1 = _a.sent();
                console.error('getUserInfo fail', e_1);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getUserCloudID = getUserCloudID;
var getUserInfo = function (cloudID) { return __awaiter(void 0, void 0, void 0, function () {
    var list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, network_1.cloudRequest({
                    name: 'openapi',
                    data: {
                        action: 'getOpenData',
                        openData: { list: [cloudID] }
                    }
                })];
            case 1:
                list = (_a.sent()).list;
                return [2, list && list.length && list[0] || list];
        }
    });
}); };
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbkRhdGFNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW5EYXRhTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBRXpDLElBQU0sWUFBWSxHQUFHLFVBQU0sS0FBeUM7Ozs7b0JBQ0gsV0FBTSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUE7O2dCQUFsRixXQUFXLEdBQWtELENBQUEsU0FBcUIsQ0FBQSxZQUF2RTtnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQTtnQkFDL0MsV0FBTyxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBQTs7O0tBQ3BELENBQUE7QUFKWSxRQUFBLFlBQVksZ0JBSXhCO0FBRU0sSUFBTSxjQUFjLEdBQUc7Ozs7OztnQkFFVixXQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUE7O2dCQUE5QixHQUFHLEdBQUcsU0FBd0I7Z0JBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3ZDLFdBQU8sR0FBRyxFQUFBOzs7Z0JBRVYsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxHQUFDLENBQUMsQ0FBQTs7Ozs7S0FFM0MsQ0FBQTtBQVJZLFFBQUEsY0FBYyxrQkFRMUI7QUFFTSxJQUFNLFdBQVcsR0FBRyxVQUFNLE9BQWU7Ozs7b0JBQzdCLFdBQU0sc0JBQVksQ0FBQztvQkFDOUIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFO3dCQUNGLE1BQU0sRUFBRSxhQUFhO3dCQUNyQixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBRSxPQUFPLENBQUUsRUFBQztxQkFDakM7aUJBQ0osQ0FBQyxFQUFBOztnQkFOSyxJQUFJLEdBQUksQ0FBQSxTQU1iLENBQUEsS0FOUztnQkFPWCxXQUFPLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUE7OztLQUNoRCxDQUFBO0FBVFksUUFBQSxXQUFXLGVBU3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvdWRSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzL25ldHdvcmtcIjtcblxuZXhwb3J0IGNvbnN0IGdldEF1dGhvcml6ZSA9IGFzeW5jKHNjb3BlOmtleW9mIFdlY2hhdE1pbmlwcm9ncmFtLkF1dGhTZXR0aW5nKTpQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCB7YXV0aFNldHRpbmd9IDoge2F1dGhTZXR0aW5nOldlY2hhdE1pbmlwcm9ncmFtLkF1dGhTZXR0aW5nfSA9IGF3YWl0IHd4LmdldFNldHRpbmcoKTtcbiAgICBjb25zb2xlLmluZm8oJ3d4LmF1dGhvcml6ZSBzdGFydCcsIGF1dGhTZXR0aW5nKVxuICAgIHJldHVybiBhdXRoU2V0dGluZyAmJiBhdXRoU2V0dGluZ1tzY29wZV0gfHwgZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJDbG91ZElEID0gYXN5bmMoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd3guZ2V0VXNlckluZm8oe30pXG4gICAgICAgIGNvbnNvbGUuaW5mbygnd3guZ2V0VXNlckluZm8gc3VjJywgcmVzKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dldFVzZXJJbmZvIGZhaWwnLCBlKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMoY2xvdWRJRDogc3RyaW5nKTpQcm9taXNlPElVc2VyQ2xvdWRDZ2lSZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB7bGlzdH0gPSBhd2FpdCBjbG91ZFJlcXVlc3Qoe1xuICAgICAgICBuYW1lOiAnb3BlbmFwaScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2dldE9wZW5EYXRhJyxcbiAgICAgICAgICAgIG9wZW5EYXRhOiB7IGxpc3Q6IFsgY2xvdWRJRCBdfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbGlzdCAmJiBsaXN0Lmxlbmd0aCAmJiBsaXN0WzBdIHx8IGxpc3Rcbn0iXX0=