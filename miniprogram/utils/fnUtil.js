"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeCloud = exports.safeCall = void 0;
var safeCall = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return fn && typeof fn === 'function' && fn.apply(void 0, args);
};
exports.safeCall = safeCall;
var safeCloud = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return wx.cloud && fn && typeof fn === 'function' && fn.apply(void 0, args);
};
exports.safeCloud = safeCloud;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm5VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm5VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFBK0I7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUNwRSxPQUFPLEVBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLElBQUksRUFBRSxlQUFJLElBQUksQ0FBQyxDQUFBO0FBQ3hELENBQUMsQ0FBQTtBQUZZLFFBQUEsUUFBUSxZQUVwQjtBQUVNLElBQU0sU0FBUyxHQUFHLFVBQUMsRUFBK0I7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUNyRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsSUFBSSxFQUFFLGVBQUksSUFBSSxDQUFDLENBQUE7QUFDcEUsQ0FBQyxDQUFBO0FBRlksUUFBQSxTQUFTLGFBRXJCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNhZmVDYWxsID0gKGZuOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55ID0+IHtcbiAgICByZXR1cm4gZm4gJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKC4uLmFyZ3MpXG59XG5cbmV4cG9ydCBjb25zdCBzYWZlQ2xvdWQgPSAoZm46IEZ1bmN0aW9uIHwgdW5kZWZpbmVkIHwgbnVsbCwgLi4uYXJnczogYW55W10pOiBhbnkgPT4ge1xuICAgIHJldHVybiB3eC5jbG91ZCAmJiBmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgZm4oLi4uYXJncylcbn1cblxuIl19