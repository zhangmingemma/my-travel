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
var Network = (function () {
    function Network() {
        this.loginOn = null;
    }
    Network.prototype.login = function () {
        this.loginOn = this.loginOn || this.doLogin();
    };
    Network.prototype.doLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, wx.cloud.callFunction({
                            name: 'login'
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    return Network;
}());
exports.default = new Network();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBQ0ksWUFBTyxHQUE4QixJQUFJLENBQUE7SUFTN0MsQ0FBQztJQVJHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2pELENBQUM7SUFDSyx5QkFBTyxHQUFiOzs7OzRCQUNXLFdBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7NEJBQy9CLElBQUksRUFBRSxPQUFPO3lCQUNoQixDQUFDLEVBQUE7NEJBRkYsV0FBTyxTQUVMLEVBQUE7Ozs7S0FDTDtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpblJlc3AgfSBmcm9tICcuLi8uLi9wcm90by9jbG91ZGNnaSdcblxuY2xhc3MgTmV0d29yayB7XG4gICAgbG9naW5PbjogUHJvbWlzZTxMb2dpblJlc3A+IHwgbnVsbCA9IG51bGxcbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5sb2dpbk9uID0gdGhpcy5sb2dpbk9uIHx8IHRoaXMuZG9Mb2dpbigpXG4gICAgfVxuICAgIGFzeW5jIGRvTG9naW4oKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5ldHdvcmsoKSJdfQ==