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
var fnUtil_1 = require("../utils/fnUtil");
var OpenDataMgr_1 = require("./OpenDataMgr");
var LocationMgr = (function () {
    function LocationMgr() {
        this.location = [];
    }
    LocationMgr.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuthorize, location, res, location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, OpenDataMgr_1.getAuthorize('scope.userLocation')];
                    case 1:
                        isAuthorize = _a.sent();
                        if (!isAuthorize) return [3, 3];
                        return [4, this.doLocation()];
                    case 2:
                        location = _a.sent();
                        return [2, location];
                    case 3: return [4, OpenDataMgr_1.doAuthorize('scope.userLocation')];
                    case 4:
                        res = _a.sent();
                        if (!res) return [3, 6];
                        return [4, this.doLocation()];
                    case 5:
                        location = _a.sent();
                        return [2, location];
                    case 6: return [2, null];
                }
            });
        });
    };
    LocationMgr.prototype.doLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fnUtil_1.promiseWrap(wx.getLocation({
                            type: 'gcj02'
                        }))];
                    case 1:
                        location = (_a.sent()).res;
                        console.info('[LocationMgr] doLocation', location);
                        return [2, [(location === null || location === void 0 ? void 0 : location.longitude) || 0, (location === null || location === void 0 ? void 0 : location.latitude) || 0]];
                }
            });
        });
    };
    return LocationMgr;
}());
exports.default = new LocationMgr();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25NZ3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2NhdGlvbk1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE2QztBQUM3Qyw2Q0FBeUQ7QUFFekQ7SUFBQTtRQUNJLGFBQVEsR0FBRyxFQUFjLENBQUE7SUF3QjdCLENBQUM7SUF0QlMsaUNBQVcsR0FBakI7Ozs7OzRCQUN3QixXQUFNLDBCQUFZLENBQUMsb0JBQW9CLENBQUMsRUFBQTs7d0JBQXRELFdBQVcsR0FBRyxTQUF3Qzs2QkFDeEQsV0FBVyxFQUFYLGNBQVc7d0JBQ00sV0FBTSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUFsQyxRQUFRLEdBQUcsU0FBdUI7d0JBQ3hDLFdBQU8sUUFBUSxFQUFBOzRCQUVILFdBQU0seUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFBOzt3QkFBN0MsR0FBRyxHQUFHLFNBQXVDOzZCQUMvQyxHQUFHLEVBQUgsY0FBRzt3QkFDYyxXQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxDLFFBQVEsR0FBRyxTQUF1Qjt3QkFDeEMsV0FBTyxRQUFRLEVBQUE7NEJBRW5CLFdBQU8sSUFBSSxFQUFBOzs7O0tBRWxCO0lBRUssZ0NBQVUsR0FBaEI7Ozs7OzRCQUM0QixXQUFNLG9CQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDckQsSUFBSSxFQUFFLE9BQU87eUJBQ2hCLENBQUMsQ0FBQyxFQUFBOzt3QkFGUyxRQUFRLEdBQUksQ0FBQSxTQUVyQixDQUFBLElBRmlCO3dCQUdwQixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBQyxDQUFBO3dCQUNsRCxXQUFPLENBQUMsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsU0FBUyxLQUFJLENBQUMsRUFBRSxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxRQUFRLEtBQUksQ0FBQyxDQUFDLEVBQUE7Ozs7S0FDN0Q7SUFDTCxrQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZVdyYXAgfSBmcm9tICcuLi91dGlscy9mblV0aWwnXG5pbXBvcnQgeyBnZXRBdXRob3JpemUsIGRvQXV0aG9yaXplIH0gZnJvbSAnLi9PcGVuRGF0YU1ncidcblxuY2xhc3MgTG9jYXRpb25NZ3Ige1xuICAgIGxvY2F0aW9uID0gW10gYXMgbnVtYmVyW11cblxuICAgIGFzeW5jIGdldExvY2F0aW9uKCk6UHJvbWlzZTxudWxsIHwgbnVtYmVyW10+IHtcbiAgICAgICAgY29uc3QgaXNBdXRob3JpemUgPSBhd2FpdCBnZXRBdXRob3JpemUoJ3Njb3BlLnVzZXJMb2NhdGlvbicpXG4gICAgICAgIGlmIChpc0F1dGhvcml6ZSkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB0aGlzLmRvTG9jYXRpb24oKVxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkb0F1dGhvcml6ZSgnc2NvcGUudXNlckxvY2F0aW9uJylcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHRoaXMuZG9Mb2NhdGlvbigpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGRvTG9jYXRpb24oKTpQcm9taXNlPG51bWJlcltdPiB7XG4gICAgICAgIGNvbnN0IHtyZXM6IGxvY2F0aW9ufSA9IGF3YWl0IHByb21pc2VXcmFwKHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgICAgIHR5cGU6ICdnY2owMidcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0xvY2F0aW9uTWdyXSBkb0xvY2F0aW9uJywgbG9jYXRpb24pXG4gICAgICAgIHJldHVybiBbbG9jYXRpb24/LmxvbmdpdHVkZSB8fCAwLCBsb2NhdGlvbj8ubGF0aXR1ZGUgfHwgMF1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2NhdGlvbk1ncigpIl19