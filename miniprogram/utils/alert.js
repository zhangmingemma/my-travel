"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrorTip = exports.showSuccessTip = exports.hideLoading = exports.showLoading = exports.showModal = void 0;
var showModal = function (opts) {
    if (opts === void 0) { opts = { content: '数据加载错误，请稍后再试', showCancel: false }; }
    wx.showModal(opts);
};
exports.showModal = showModal;
var showLoading = function (opts) {
    if (opts === void 0) { opts = { title: '加载中' }; }
    wx.showLoading(opts);
};
exports.showLoading = showLoading;
var hideLoading = function () {
    wx.hideLoading();
};
exports.hideLoading = hideLoading;
var showSuccessTip = function (tip) {
    if (tip === void 0) { tip = '操作成功'; }
    exports.hideLoading();
    setTimeout(function () {
        wx.showToast({
            icon: 'success',
            title: tip,
            duration: 1500
        });
    });
};
exports.showSuccessTip = showSuccessTip;
var showErrorTip = function (tip) {
    if (tip === void 0) { tip = '系统繁忙，请稍后再试'; }
    exports.hideLoading();
    setTimeout(function () {
        wx.showToast({
            icon: 'none',
            title: tip,
            duration: 1500
        });
    });
};
exports.showErrorTip = showErrorTip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQW9GO0lBQXBGLHFCQUFBLEVBQUEsU0FBeUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDO0lBQzFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBRlksUUFBQSxTQUFTLGFBRXJCO0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQyxJQUEyRDtJQUEzRCxxQkFBQSxFQUFBLFNBQThDLEtBQUssRUFBRSxLQUFLLEVBQUM7SUFDbkYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkI7QUFFTSxJQUFNLFdBQVcsR0FBRztJQUN2QixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7QUFDcEIsQ0FBQyxDQUFBO0FBRlksUUFBQSxXQUFXLGVBRXZCO0FBRU0sSUFBTSxjQUFjLEdBQUcsVUFBQyxHQUFvQjtJQUFwQixvQkFBQSxFQUFBLFlBQW9CO0lBQy9DLG1CQUFXLEVBQUUsQ0FBQTtJQUNiLFVBQVUsQ0FBQztRQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFUWSxRQUFBLGNBQWMsa0JBUzFCO0FBRU0sSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUEwQjtJQUExQixvQkFBQSxFQUFBLGtCQUEwQjtJQUNuRCxtQkFBVyxFQUFFLENBQUE7SUFDYixVQUFVLENBQUM7UUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBVFksUUFBQSxZQUFZLGdCQVN4QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzaG93TW9kYWwgPSAob3B0czogV2VjaGF0TWluaXByb2dyYW0uU2hvd01vZGFsT3B0aW9uPXtjb250ZW50OiAn5pWw5o2u5Yqg6L296ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJywgc2hvd0NhbmNlbDogZmFsc2V9KSA9PiB7XG4gICAgd3guc2hvd01vZGFsKG9wdHMpXG59XG5cbmV4cG9ydCBjb25zdCBzaG93TG9hZGluZyA9IChvcHRzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TG9hZGluZ09wdGlvbiA9IHsgdGl0bGU6ICfliqDovb3kuK0nfSkgPT4ge1xuICAgIHd4LnNob3dMb2FkaW5nKG9wdHMpXG59XG5cbmV4cG9ydCBjb25zdCBoaWRlTG9hZGluZyA9ICgpID0+IHtcbiAgICB3eC5oaWRlTG9hZGluZygpXG59XG5cbmV4cG9ydCBjb25zdCBzaG93U3VjY2Vzc1RpcCA9ICh0aXA6IHN0cmluZyA9ICfmk43kvZzmiJDlip8nKSA9PiB7XG4gICAgaGlkZUxvYWRpbmcoKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGl0bGU6IHRpcCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dFcnJvclRpcCA9ICh0aXA6IHN0cmluZyA9ICfns7vnu5/nuYHlv5nvvIzor7fnqI3lkI7lho3or5UnKSA9PiB7XG4gICAgaGlkZUxvYWRpbmcoKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgdGl0bGU6IHRpcCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgIH0pXG4gICAgfSlcbn0iXX0=