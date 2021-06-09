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
                    case 0: return [4, wx.getLocation({
                            type: 'gcj02'
                        })];
                    case 1:
                        location = _a.sent();
                        console.info('[LocationMgr] doLocation', location);
                        return [2, [location.longitude, location.latitude]];
                }
            });
        });
    };
    return LocationMgr;
}());
exports.default = new LocationMgr();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25NZ3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2NhdGlvbk1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF5RDtBQUV6RDtJQUFBO1FBQ0ksYUFBUSxHQUFHLEVBQWMsQ0FBQTtJQXdCN0IsQ0FBQztJQXRCUyxpQ0FBVyxHQUFqQjs7Ozs7NEJBQ3dCLFdBQU0sMEJBQVksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFBOzt3QkFBdEQsV0FBVyxHQUFHLFNBQXdDOzZCQUN4RCxXQUFXLEVBQVgsY0FBVzt3QkFDTSxXQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxDLFFBQVEsR0FBRyxTQUF1Qjt3QkFDeEMsV0FBTyxRQUFRLEVBQUE7NEJBRUgsV0FBTSx5QkFBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUE7O3dCQUE3QyxHQUFHLEdBQUcsU0FBdUM7NkJBQy9DLEdBQUcsRUFBSCxjQUFHO3dCQUNjLFdBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBbEMsUUFBUSxHQUFHLFNBQXVCO3dCQUN4QyxXQUFPLFFBQVEsRUFBQTs0QkFFbkIsV0FBTyxJQUFJLEVBQUE7Ozs7S0FFbEI7SUFFSyxnQ0FBVSxHQUFoQjs7Ozs7NEJBQ3FCLFdBQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDbEMsSUFBSSxFQUFFLE9BQU87eUJBQ2hCLENBQUMsRUFBQTs7d0JBRkksUUFBUSxHQUFHLFNBRWY7d0JBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQTt3QkFDbEQsV0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzs7O0tBQ2pEO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEF1dGhvcml6ZSwgZG9BdXRob3JpemUgfSBmcm9tICcuL09wZW5EYXRhTWdyJ1xuXG5jbGFzcyBMb2NhdGlvbk1nciB7XG4gICAgbG9jYXRpb24gPSBbXSBhcyBudW1iZXJbXVxuXG4gICAgYXN5bmMgZ2V0TG9jYXRpb24oKTpQcm9taXNlPG51bGwgfCBudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBpc0F1dGhvcml6ZSA9IGF3YWl0IGdldEF1dGhvcml6ZSgnc2NvcGUudXNlckxvY2F0aW9uJylcbiAgICAgICAgaWYgKGlzQXV0aG9yaXplKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHRoaXMuZG9Mb2NhdGlvbigpXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRvQXV0aG9yaXplKCdzY29wZS51c2VyTG9jYXRpb24nKVxuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgdGhpcy5kb0xvY2F0aW9uKClcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb25cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZG9Mb2NhdGlvbigpOlByb21pc2U8bnVtYmVyW10+IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgICB0eXBlOiAnZ2NqMDInXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0xvY2F0aW9uTWdyXSBkb0xvY2F0aW9uJywgbG9jYXRpb24pXG4gICAgICAgIHJldHVybiBbbG9jYXRpb24ubG9uZ2l0dWRlLCBsb2NhdGlvbi5sYXRpdHVkZV1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2NhdGlvbk1ncigpIl19