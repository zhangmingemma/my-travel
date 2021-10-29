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
exports.cloudRequest = exports.doRequest = void 0;
var fnUtil_1 = require("./fnUtil");
var __hasInit = false;
var doRequest = function (option) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, wx.cloud.callFunction({
                    name: option.name,
                    data: {
                        action: option.action,
                        params: option.params || {}
                    }
                })];
            case 1:
                res = _a.sent();
                return [2, res];
        }
    });
}); };
exports.doRequest = doRequest;
var cloudRequest = function (option) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, res, data;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!__hasInit) {
                    wx.cloud.init();
                    __hasInit = true;
                }
                console.info('[cloud function]req', option);
                return [4, fnUtil_1.promiseWrap(exports.doRequest(option))];
            case 1:
                _a = _d.sent(), error = _a.error, res = _a.res;
                console.info('[cloud function]res', res);
                data = (_b = res === null || res === void 0 ? void 0 : res.result) === null || _b === void 0 ? void 0 : _b.data;
                return [2, {
                        error: error || ((_c = res === null || res === void 0 ? void 0 : res.result) === null || _c === void 0 ? void 0 : _c.error),
                        res: data
                    }];
        }
    });
}); };
exports.cloudRequest = cloudRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXNDO0FBQ3RDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQTtBQUVkLElBQU0sU0FBUyxHQUFHLFVBQWEsTUFBa0I7Ozs7b0JBQ3BDLFdBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7b0JBQ3hDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFO3dCQUNGLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTt3QkFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRTtxQkFDOUI7aUJBQ0osQ0FBQyxFQUFBOztnQkFOSSxHQUFHLEdBQU8sU0FNZDtnQkFDRixXQUFPLEdBQUcsRUFBQTs7O0tBQ2IsQ0FBQTtBQVRZLFFBQUEsU0FBUyxhQVNyQjtBQUVNLElBQU0sWUFBWSxHQUFHLFVBQVksTUFBbUI7Ozs7OztnQkFDdkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDWixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO29CQUNmLFNBQVMsR0FBRyxJQUFJLENBQUE7aUJBQ25CO2dCQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQ3RCLFdBQU0sb0JBQVcsQ0FBQyxpQkFBUyxDQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUE7O2dCQUF6RCxLQUFlLFNBQTBDLEVBQXhELEtBQUssV0FBQSxFQUFFLEdBQUcsU0FBQTtnQkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxTQUFlLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLElBQUksQ0FBQTtnQkFDMUMsV0FBTzt3QkFDSCxLQUFLLEVBQUUsS0FBSyxXQUFJLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLEtBQUssQ0FBQTt3QkFDbEMsR0FBRyxFQUFFLElBQUk7cUJBQ1osRUFBQTs7O0tBQ0osQ0FBQTtBQWRZLFFBQUEsWUFBWSxnQkFjeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9taXNlV3JhcCB9IGZyb20gXCIuL2ZuVXRpbFwiXG5sZXQgX19oYXNJbml0ID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jIDxVLCBUPihvcHRpb246SUJhc2VSZXE8VD4pOlByb21pc2U8SUJhc2VSZXM8VT4+ID0+IHtcbiAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgbmFtZTogb3B0aW9uLm5hbWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogb3B0aW9uLmFjdGlvbixcbiAgICAgICAgICAgIHBhcmFtczogb3B0aW9uLnBhcmFtcyB8fCB7fVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCBjbG91ZFJlcXVlc3QgPSBhc3luYzxVLCBUPihvcHRpb246IElCYXNlUmVxPFQ+KTpQcm9taXNlPHtlcnJvcjpudWxsfGFueSwgcmVzOlV8dW5kZWZpbmVkfT4gPT4ge1xuICAgIGlmICghX19oYXNJbml0KSB7XG4gICAgICAgIHd4LmNsb3VkLmluaXQoKVxuICAgICAgICBfX2hhc0luaXQgPSB0cnVlXG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUuaW5mbygnW2Nsb3VkIGZ1bmN0aW9uXXJlcScsIG9wdGlvbilcbiAgICBjb25zdCB7ZXJyb3IsIHJlc30gPSBhd2FpdCBwcm9taXNlV3JhcChkb1JlcXVlc3Q8VSwgVD4ob3B0aW9uKSlcbiAgICBjb25zb2xlLmluZm8oJ1tjbG91ZCBmdW5jdGlvbl1yZXMnLCByZXMpXG4gICAgY29uc3QgZGF0YTpVfHVuZGVmaW5lZCA9IHJlcz8ucmVzdWx0Py5kYXRhXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGVycm9yIHx8IHJlcz8ucmVzdWx0Py5lcnJvciwgXG4gICAgICAgIHJlczogZGF0YVxuICAgIH1cbn0gIl19