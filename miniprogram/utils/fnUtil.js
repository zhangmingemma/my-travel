"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeGet = void 0;
var safeGet = function (attrList) {
    return function (obj) {
        attrList.map(function (attr) {
            obj = (obj || {})[attr];
        });
        return obj;
    };
};
exports.safeGet = safeGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm5VdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm5VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sT0FBTyxHQUFHLFVBQUMsUUFBa0I7SUFDdEMsT0FBTyxVQUFDLEdBQVE7UUFDWixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBWTtZQUN0QixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQVBZLFFBQUEsT0FBTyxXQU9uQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzYWZlR2V0ID0gKGF0dHJMaXN0OiBzdHJpbmdbXSkgPT4ge1xuICAgIHJldHVybiAob2JqOiBhbnkpID0+IHtcbiAgICAgICAgYXR0ckxpc3QubWFwKChhdHRyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIG9iaiA9IChvYmogfHwge30pW2F0dHJdXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG59Il19