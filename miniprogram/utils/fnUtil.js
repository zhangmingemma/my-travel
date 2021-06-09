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
exports.checkWxFuncAvailable = exports.promiseWrap = exports.safeGet = void 0;
var safeGet = function (attrList) {
    return function (obj) {
        attrList.map(function (attr) {
            obj = (obj || {})[attr];
        });
        return obj;
    };
};
exports.safeGet = safeGet;
var promiseWrap = function (promise) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, promise];
            case 1:
                res = _a.sent();
                return [2, { error: null, res: res }];
            case 2:
                e_1 = _a.sent();
                console.error(e_1);
                return [2, { error: e_1, res: null }];
            case 3: return [2];
        }
    });
}); };
exports.promiseWrap = promiseWrap;
var checkWxFuncAvailable = function (func) {
    return func && typeof func === 'function';
};
exports.checkWxFuncAvailable = checkWxFuncAvailable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm5VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm5VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sT0FBTyxHQUFHLFVBQUMsUUFBa0I7SUFDdEMsT0FBTyxVQUFDLEdBQVE7UUFDWixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBWTtZQUN0QixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQVBZLFFBQUEsT0FBTyxXQU9uQjtBQUVNLElBQU0sV0FBVyxHQUFHLFVBQWdCLE9BQWtCOzs7Ozs7Z0JBRXpDLFdBQU0sT0FBTyxFQUFBOztnQkFBbkIsR0FBRyxHQUFHLFNBQWE7Z0JBQ3pCLFdBQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBQTs7O2dCQUU5QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFBO2dCQUNoQixXQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEVBQUE7Ozs7S0FFbkMsQ0FBQTtBQVJZLFFBQUEsV0FBVyxlQVF2QjtBQUVNLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxJQUFjO0lBQy9DLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQTtBQUM3QyxDQUFDLENBQUE7QUFGWSxRQUFBLG9CQUFvQix3QkFFaEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2FmZUdldCA9IChhdHRyTGlzdDogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gKG9iajogYW55KSA9PiB7XG4gICAgICAgIGF0dHJMaXN0Lm1hcCgoYXR0cjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBvYmogPSAob2JqIHx8IHt9KVthdHRyXVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvbWlzZVdyYXAgPSBhc3luYzxVLCBUPWFueT4ocHJvbWlzZTpQcm9taXNlPFU+KTpQcm9taXNlPHtlcnJvcjpudWxsfFQsIHJlczpudWxsfFV9PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHJvbWlzZVxuICAgICAgICByZXR1cm4ge2Vycm9yOiBudWxsLCByZXM6IHJlc31cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4ge2Vycm9yOiBlLCByZXM6IG51bGx9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hlY2tXeEZ1bmNBdmFpbGFibGUgPSAoZnVuYzogRnVuY3Rpb24pID0+IHtcbiAgICByZXR1cm4gZnVuYyAmJiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJ1xufSJdfQ==