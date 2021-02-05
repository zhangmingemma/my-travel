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
exports.cloudRequest = exports.login = void 0;
var holdOn = null;
var __hasInit = false;
var login = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!__hasInit) {
                    wx.cloud.init();
                    __hasInit = true;
                }
                return [4, wx.cloud.callFunction({
                        name: 'login',
                    })];
            case 1:
                res = _a.sent();
                return [2, res];
        }
    });
}); };
exports.login = login;
var cloudRequest = function (option) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                holdOn = holdOn || exports.login();
                return [4, holdOn];
            case 1:
                _a.sent();
                return [4, wx.cloud.callFunction({
                        name: option.name,
                        data: (option === null || option === void 0 ? void 0 : option.data) || {}
                    })];
            case 2:
                res = _a.sent();
                return [2, res.result];
        }
    });
}); };
exports.cloudRequest = cloudRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxNQUFNLEdBQUcsSUFBbUQsQ0FBQTtBQUNoRSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUE7QUFFZCxJQUFNLEtBQUssR0FBRzs7Ozs7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ1osRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDZixTQUFTLEdBQUcsSUFBSSxDQUFBO2lCQUNuQjtnQkFDVyxXQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO3dCQUNwQyxJQUFJLEVBQUUsT0FBTztxQkFDaEIsQ0FBQyxFQUFBOztnQkFGSSxHQUFHLEdBQUcsU0FFVjtnQkFDRixXQUFPLEdBQUcsRUFBQTs7O0tBQ2IsQ0FBQTtBQVRZLFFBQUEsS0FBSyxTQVNqQjtBQUVNLElBQU0sWUFBWSxHQUFHLFVBQWEsTUFBa0I7Ozs7O2dCQUN2RCxNQUFNLEdBQUcsTUFBTSxJQUFJLGFBQUssRUFBRSxDQUFBO2dCQUMxQixXQUFNLE1BQU0sRUFBQTs7Z0JBQVosU0FBWSxDQUFBO2dCQUVJLFdBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7d0JBQ3hDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsSUFBSSxFQUFFLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksS0FBSSxFQUFFO3FCQUMzQixDQUFDLEVBQUE7O2dCQUhJLEdBQUcsR0FBTyxTQUdkO2dCQUVGLFdBQU8sR0FBRyxDQUFDLE1BQU0sRUFBQTs7O0tBQ3BCLENBQUE7QUFWWSxRQUFBLFlBQVksZ0JBVXhCIiwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgaG9sZE9uID0gbnVsbCBhcyAoUHJvbWlzZTxJQ2xvdWQuQ2FsbEZ1bmN0aW9uUmVzdWx0PiB8IG51bGwpXG5sZXQgX19oYXNJbml0ID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMoKTpQcm9taXNlPElDbG91ZC5DYWxsRnVuY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIV9faGFzSW5pdCkge1xuICAgICAgICB3eC5jbG91ZC5pbml0KClcbiAgICAgICAgX19oYXNJbml0ID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgIH0pXG4gICAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgY29uc3QgY2xvdWRSZXF1ZXN0ID0gYXN5bmMgPFUsIFQ+KG9wdGlvbjpJT3B0aW9uczxUPik6UHJvbWlzZTxVPiA9PiB7XG4gICAgaG9sZE9uID0gaG9sZE9uIHx8IGxvZ2luKClcbiAgICBhd2FpdCBob2xkT25cbiAgICBcbiAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgbmFtZTogb3B0aW9uLm5hbWUsXG4gICAgICAgIGRhdGE6IG9wdGlvbj8uZGF0YSB8fCB7fVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnJlc3VsdFxufSJdfQ==