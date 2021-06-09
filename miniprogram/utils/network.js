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
                    data: (option === null || option === void 0 ? void 0 : option.data) || {}
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
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!__hasInit) {
                    wx.cloud.init();
                    __hasInit = true;
                }
                console.info('[cloud function]req', option);
                return [4, fnUtil_1.promiseWrap(exports.doRequest(option))];
            case 1:
                _a = _b.sent(), error = _a.error, res = _a.res;
                data = res === null || res === void 0 ? void 0 : res.result;
                console.info('[cloud function]res', data);
                return [2, { error: error, res: data }];
        }
    });
}); };
exports.cloudRequest = cloudRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXNDO0FBQ3RDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQTtBQUVkLElBQU0sU0FBUyxHQUFHLFVBQWEsTUFBa0I7Ozs7b0JBQ3BDLFdBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7b0JBQ3hDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksS0FBSSxFQUFFO2lCQUMzQixDQUFDLEVBQUE7O2dCQUhJLEdBQUcsR0FBTyxTQUdkO2dCQUNGLFdBQU8sR0FBRyxFQUFBOzs7S0FDYixDQUFBO0FBTlksUUFBQSxTQUFTLGFBTXJCO0FBRU0sSUFBTSxZQUFZLEdBQUcsVUFBWSxNQUFtQjs7Ozs7Z0JBQ3ZELElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ1osRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDZixTQUFTLEdBQUcsSUFBSSxDQUFBO2lCQUNuQjtnQkFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUN0QixXQUFNLG9CQUFXLENBQUMsaUJBQVMsQ0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFBOztnQkFBekQsS0FBZSxTQUEwQyxFQUF4RCxLQUFLLFdBQUEsRUFBRSxHQUFHLFNBQUE7Z0JBQ1gsSUFBSSxHQUFHLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLENBQUE7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3pDLFdBQU8sRUFBQyxLQUFLLE9BQUEsRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUE7OztLQUMzQixDQUFBO0FBWFksUUFBQSxZQUFZLGdCQVd4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VXcmFwIH0gZnJvbSBcIi4vZm5VdGlsXCJcbmxldCBfX2hhc0luaXQgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZG9SZXF1ZXN0ID0gYXN5bmMgPFUsIFQ+KG9wdGlvbjpJQmFzZVJlcTxUPik6UHJvbWlzZTxJQmFzZVJlczxVPj4gPT4ge1xuICAgIGNvbnN0IHJlczphbnkgPSBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiBvcHRpb24ubmFtZSxcbiAgICAgICAgZGF0YTogb3B0aW9uPy5kYXRhIHx8IHt9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCBjbG91ZFJlcXVlc3QgPSBhc3luYzxVLCBUPihvcHRpb246IElCYXNlUmVxPFQ+KTpQcm9taXNlPHtlcnJvcjpudWxsfGFueSwgcmVzOm51bGx8dW5kZWZpbmVkfFV9PiA9PiB7XG4gICAgaWYgKCFfX2hhc0luaXQpIHtcbiAgICAgICAgd3guY2xvdWQuaW5pdCgpXG4gICAgICAgIF9faGFzSW5pdCA9IHRydWVcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5pbmZvKCdbY2xvdWQgZnVuY3Rpb25dcmVxJywgb3B0aW9uKVxuICAgIGNvbnN0IHtlcnJvciwgcmVzfSA9IGF3YWl0IHByb21pc2VXcmFwKGRvUmVxdWVzdDxVLCBUPihvcHRpb24pKVxuICAgIGNvbnN0IGRhdGEgPSByZXM/LnJlc3VsdFxuICAgIGNvbnNvbGUuaW5mbygnW2Nsb3VkIGZ1bmN0aW9uXXJlcycsIGRhdGEpXG4gICAgcmV0dXJuIHtlcnJvciwgcmVzOmRhdGF9XG59ICJdfQ==