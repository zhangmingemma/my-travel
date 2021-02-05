"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console = require('../utils/console')('UserModel');
var User = (function () {
    function User() {
        this.holdOnPromise = null;
    }
    User.prototype.init = function () {
        this.holdOnPromise = wx.getSetting({});
        this.holdOnPromise.then(function (_a) {
            var authSetting = _a.authSetting;
            console.info('getsetting suc', authSetting);
        });
    };
    return User;
}());
exports.default = new User();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlck1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFeEQ7SUFBQTtRQUNJLGtCQUFhLEdBQXNFLElBQUksQ0FBQTtJQVMzRixDQUFDO0lBUEcsbUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQTBEO2dCQUF6RCxXQUFXLGlCQUFBO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBRUQsa0JBQWUsSUFBSSxJQUFJLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnNvbGUgPSByZXF1aXJlKCcuLi91dGlscy9jb25zb2xlJykoJ1VzZXJNb2RlbCcpXG5cbmNsYXNzIFVzZXIge1xuICAgIGhvbGRPblByb21pc2U6IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uR2V0U2V0dGluZ1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdD4gfCBudWxsID0gbnVsbFxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ob2xkT25Qcm9taXNlID0gd3guZ2V0U2V0dGluZyh7fSlcbiAgICAgICAgdGhpcy5ob2xkT25Qcm9taXNlLnRoZW4oKHthdXRoU2V0dGluZ306e2F1dGhTZXR0aW5nOiBXZWNoYXRNaW5pcHJvZ3JhbS5BdXRoU2V0dGluZ30pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnZ2V0c2V0dGluZyBzdWMnLCBhdXRoU2V0dGluZylcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlcigpIl19