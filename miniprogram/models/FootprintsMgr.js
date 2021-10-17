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
var alert_1 = require("../utils/alert");
var network_1 = require("../utils/network");
var FootprintsMgr = (function () {
    function FootprintsMgr() {
        this.outlineData = [];
    }
    FootprintsMgr.prototype.getUserMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            data: {
                                action: 'getUserMap'
                            }
                        })];
                    case 1:
                        _a = _b.sent(), error = _a.error, res = _a.res;
                        console.info('[FootprintsMgr] getUserMap', error, res);
                        if (error) {
                            alert_1.showModal();
                        }
                        else {
                            this.outlineData = res && res.outlines || [];
                        }
                        return [2, this.outlineData];
                }
            });
        });
    };
    FootprintsMgr.prototype.getAllCitys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, network_1.cloudRequest({
                            name: 'geodata',
                            data: {
                                action: 'getAllCitysProperties'
                            }
                        })];
                    case 1:
                        _a = _b.sent(), error = _a.error, res = _a.res;
                        console.info('[FootprintsMgr] getAllCitys', error, res);
                        if (error) {
                            alert_1.showModal();
                        }
                        else {
                            console.error(res, error);
                        }
                        return [2, res && res.data || null];
                }
            });
        });
    };
    return FootprintsMgr;
}());
exports.default = new FootprintsMgr();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdHByaW50c01nci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvb3RwcmludHNNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMEM7QUFDMUMsNENBQStDO0FBRS9DO0lBQUE7UUFDSSxnQkFBVyxHQUFlLEVBQUUsQ0FBQTtJQW1DaEMsQ0FBQztJQWhDUyxrQ0FBVSxHQUFoQjs7Ozs7NEJBQ3lCLFdBQU0sc0JBQVksQ0FBbUM7NEJBQ3RFLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRTtnQ0FDRixNQUFNLEVBQUUsWUFBWTs2QkFDdkI7eUJBQ0osQ0FBQyxFQUFBOzt3QkFMSSxLQUFlLFNBS25CLEVBTEssS0FBSyxXQUFBLEVBQUUsR0FBRyxTQUFBO3dCQU1qQixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDdEQsSUFBSSxLQUFLLEVBQUU7NEJBQ1AsaUJBQVMsRUFBRSxDQUFBO3lCQUNkOzZCQUFNOzRCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFBO3lCQUMvQzt3QkFDRCxXQUFPLElBQUksQ0FBQyxXQUFXLEVBQUE7Ozs7S0FDMUI7SUFHSyxtQ0FBVyxHQUFqQjs7Ozs7NEJBQ3lCLFdBQU0sc0JBQVksQ0FBMkM7NEJBQzlFLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRTtnQ0FDRixNQUFNLEVBQUUsdUJBQXVCOzZCQUNsQzt5QkFDSixDQUFDLEVBQUE7O3dCQUxJLEtBQWUsU0FLbkIsRUFMSyxLQUFLLFdBQUEsRUFBRSxHQUFHLFNBQUE7d0JBTWpCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUN2RCxJQUFJLEtBQUssRUFBRTs0QkFDUCxpQkFBUyxFQUFFLENBQUE7eUJBQ2Q7NkJBQU07NEJBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7eUJBQzVCO3dCQUNELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFBOzs7O0tBQ2pDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gXCIuLi91dGlscy9hbGVydFwiXG5pbXBvcnQgeyBjbG91ZFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHMvbmV0d29ya1wiXG5cbmNsYXNzIEZvb3RwcmludHNNZ3Ige1xuICAgIG91dGxpbmVEYXRhOiBJR2VvQ2VsbFtdID0gW11cbiAgICBcbiAgICAvLyDojrflj5bnlKjmiLfnmoTlnLDlm77ova7lu5NcbiAgICBhc3luYyBnZXRVc2VyTWFwKCk6UHJvbWlzZTxJR2VvQ2VsbFtdPiB7XG4gICAgICAgIGNvbnN0IHtlcnJvciwgcmVzfSA9IGF3YWl0IGNsb3VkUmVxdWVzdDx7b3V0bGluZXM6IG51bGwgfCBJR2VvQ2VsbFtdfSx7fT4oe1xuICAgICAgICAgICAgbmFtZTogJ2dlb2RhdGEnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2dldFVzZXJNYXAnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Zvb3RwcmludHNNZ3JdIGdldFVzZXJNYXAnLCBlcnJvciwgcmVzKVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNob3dNb2RhbCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVEYXRhID0gcmVzICYmIHJlcy5vdXRsaW5lcyB8fCBbXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm91dGxpbmVEYXRhXG4gICAgfVxuXG4gICAgLy8g6I635Y+W5omA5pyJ55yB5biC5YiX6KGoXG4gICAgYXN5bmMgZ2V0QWxsQ2l0eXMoKTpQcm9taXNlPG51bGwgfCBJR2VvQ2VsbFsncHJvcGVydGllcyddPiB7XG4gICAgICAgIGNvbnN0IHtlcnJvciwgcmVzfSA9IGF3YWl0IGNsb3VkUmVxdWVzdDx7ZGF0YTogbnVsbCB8IElHZW9DZWxsWydwcm9wZXJ0aWVzJ119LHt9Pih7XG4gICAgICAgICAgICBuYW1lOiAnZ2VvZGF0YScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0QWxsQ2l0eXNQcm9wZXJ0aWVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmluZm8oJ1tGb290cHJpbnRzTWdyXSBnZXRBbGxDaXR5cycsIGVycm9yLCByZXMpXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgc2hvd01vZGFsKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzLCBlcnJvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzICYmIHJlcy5kYXRhIHx8IG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGb290cHJpbnRzTWdyKCkiXX0=