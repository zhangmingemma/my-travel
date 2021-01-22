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
var cloud = require('wx-server-sdk');
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});
exports.main = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var wxContext;
    return __generator(this, function (_a) {
        console.log(event);
        console.log(context);
        wxContext = cloud.getWXContext();
        return [2, {
                event: event,
                openid: wxContext.OPENID,
                appid: wxContext.APPID,
                unionid: wxContext.UNIONID,
                env: wxContext.ENV,
            }];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBR3RDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFVCxHQUFHLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtDQUMvQixDQUFDLENBQUE7QUFRRixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQU8sS0FBUyxFQUFFLE9BQVc7OztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFNZCxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBRXRDLFdBQU87Z0JBQ0wsS0FBSyxPQUFBO2dCQUNMLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDeEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUN0QixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQzFCLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRzthQUNuQixFQUFBOztLQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDkupHlh73mlbDmqKHmnb9cbi8vIOmDqOe9su+8muWcqCBjbG91ZC1mdW5jdGlvbnMvbG9naW4g5paH5Lu25aS55Y+z5Ye76YCJ5oupIOKAnOS4iuS8oOW5tumDqOe9suKAnVxuXG5jb25zdCBjbG91ZCA9IHJlcXVpcmUoJ3d4LXNlcnZlci1zZGsnKVxuXG4vLyDliJ3lp4vljJYgY2xvdWRcbmNsb3VkLmluaXQoe1xuICAvLyBBUEkg6LCD55So6YO95L+d5oyB5ZKM5LqR5Ye95pWw5b2T5YmN5omA5Zyo546v5aKD5LiA6Ie0XG4gIGVudjogY2xvdWQuRFlOQU1JQ19DVVJSRU5UX0VOVlxufSlcblxuLyoqXG4gKiDov5nkuKrnpLrkvovlsIbnu4/oh6rliqjpibTmnYPov4fnmoTlsI/nqIvluo/nlKjmiLcgb3BlbmlkIOi/lOWbnue7meWwj+eoi+W6j+err1xuICogXG4gKiBldmVudCDlj4LmlbDljIXlkKvlsI/nqIvluo/nq6/osIPnlKjkvKDlhaXnmoQgZGF0YVxuICogXG4gKi9cbmV4cG9ydHMubWFpbiA9IGFzeW5jIChldmVudDphbnksIGNvbnRleHQ6YW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGV2ZW50KVxuICBjb25zb2xlLmxvZyhjb250ZXh0KVxuXG4gIC8vIOWPr+aJp+ihjOWFtuS7luiHquWumuS5iemAu+i+kVxuICAvLyBjb25zb2xlLmxvZyDnmoTlhoXlrrnlj6/ku6XlnKjkupHlvIDlj5HkupHlh73mlbDosIPnlKjml6Xlv5fmn6XnnItcblxuICAvLyDojrflj5YgV1ggQ29udGV4dCAo5b6u5L+h6LCD55So5LiK5LiL5paHKe+8jOWMheaLrCBPUEVOSUTjgIFBUFBJROOAgeWPiiBVTklPTklE77yI6ZyA5ruh6LazIFVOSU9OSUQg6I635Y+W5p2h5Lu277yJ562J5L+h5oGvXG4gIGNvbnN0IHd4Q29udGV4dCA9IGNsb3VkLmdldFdYQ29udGV4dCgpXG5cbiAgcmV0dXJuIHtcbiAgICBldmVudCxcbiAgICBvcGVuaWQ6IHd4Q29udGV4dC5PUEVOSUQsXG4gICAgYXBwaWQ6IHd4Q29udGV4dC5BUFBJRCxcbiAgICB1bmlvbmlkOiB3eENvbnRleHQuVU5JT05JRCxcbiAgICBlbnY6IHd4Q29udGV4dC5FTlYsXG4gIH1cbn1cblxuIl19