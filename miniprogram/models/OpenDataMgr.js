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
exports.doAuthorize = exports.getAuthorize = void 0;
var fnUtil_1 = require("../utils/fnUtil");
var getAuthorize = function (scope, withSubscriptions) {
    if (withSubscriptions === void 0) { withSubscriptions = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fnUtil_1.promiseWrap(wx.getSetting({ withSubscriptions: withSubscriptions }))];
                case 1:
                    res = (_a.sent()).res;
                    console.info('[OpenDataMgr] getAuthorize', scope, withSubscriptions, res);
                    if (withSubscriptions) {
                        return [2, res === null || res === void 0 ? void 0 : res.subscriptionsSetting];
                    }
                    if (res === null || res === void 0 ? void 0 : res.authSetting) {
                        return [2, res.authSetting[scope]];
                    }
                    return [2, false];
            }
        });
    });
};
exports.getAuthorize = getAuthorize;
var doAuthorize = function (scope) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fnUtil_1.promiseWrap(wx.authorize({ scope: scope }))];
            case 1:
                res = (_a.sent()).res;
                console.info('[OpenDataMgr] doAuthorize', scope, res);
                return [2, res];
        }
    });
}); };
exports.doAuthorize = doAuthorize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkRhdGFNZ3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPcGVuRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNkM7QUFFdEMsSUFBTSxZQUFZLEdBQUcsVUFBTSxLQUF5QyxFQUFFLGlCQUFpQztJQUFqQyxrQ0FBQSxFQUFBLHlCQUFpQzs7Ozs7d0JBQzVGLFdBQU0sb0JBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsaUJBQWlCLG1CQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O29CQUE5RCxHQUFHLEdBQUksQ0FBQSxTQUF1RCxDQUFBLElBQTNEO29CQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUN6RSxJQUFLLGlCQUFpQixFQUFHO3dCQUNyQixXQUFPLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxvQkFBb0IsRUFBQTtxQkFDbkM7b0JBQ0QsSUFBSyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsV0FBVyxFQUFHO3dCQUNwQixXQUFRLEdBQUcsQ0FBQyxXQUE2QyxDQUFDLEtBQUssQ0FBQyxFQUFBO3FCQUNuRTtvQkFDRCxXQUFPLEtBQUssRUFBQTs7OztDQUNmLENBQUE7QUFWWSxRQUFBLFlBQVksZ0JBVXhCO0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBTSxLQUF5Qzs7OztvQkFDeEQsV0FBTSxvQkFBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsRUFBQTs7Z0JBQWpELEdBQUcsR0FBSSxDQUFBLFNBQTBDLENBQUEsSUFBOUM7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3JELFdBQU8sR0FBRyxFQUFBOzs7S0FDYixDQUFBO0FBSlksUUFBQSxXQUFXLGVBSXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZVdyYXAgfSBmcm9tICcuLi91dGlscy9mblV0aWwnXG5cbmV4cG9ydCBjb25zdCBnZXRBdXRob3JpemUgPSBhc3luYyhzY29wZTprZXlvZiBXZWNoYXRNaW5pcHJvZ3JhbS5BdXRoU2V0dGluZywgd2l0aFN1YnNjcmlwdGlvbnM6Ym9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qge3Jlc30gPSBhd2FpdCBwcm9taXNlV3JhcCh3eC5nZXRTZXR0aW5nKHsgd2l0aFN1YnNjcmlwdGlvbnMgfSkpXG4gICAgY29uc29sZS5pbmZvKCdbT3BlbkRhdGFNZ3JdIGdldEF1dGhvcml6ZScsIHNjb3BlLCB3aXRoU3Vic2NyaXB0aW9ucywgcmVzKVxuICAgIGlmICggd2l0aFN1YnNjcmlwdGlvbnMgKSB7XG4gICAgICAgIHJldHVybiByZXM/LnN1YnNjcmlwdGlvbnNTZXR0aW5nXG4gICAgfSBcbiAgICBpZiAoIHJlcz8uYXV0aFNldHRpbmcgKSB7XG4gICAgICAgIHJldHVybiAocmVzLmF1dGhTZXR0aW5nIGFzIFdlY2hhdE1pbmlwcm9ncmFtLkF1dGhTZXR0aW5nKVtzY29wZV1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBkb0F1dGhvcml6ZSA9IGFzeW5jKHNjb3BlOmtleW9mIFdlY2hhdE1pbmlwcm9ncmFtLkF1dGhTZXR0aW5nKSA9PiB7XG4gICAgY29uc3Qge3Jlc30gPSBhd2FpdCBwcm9taXNlV3JhcCh3eC5hdXRob3JpemUoeyBzY29wZSB9KSlcbiAgICBjb25zb2xlLmluZm8oJ1tPcGVuRGF0YU1ncl0gZG9BdXRob3JpemUnLCBzY29wZSwgcmVzKVxuICAgIHJldHVybiByZXNcbn0iXX0=