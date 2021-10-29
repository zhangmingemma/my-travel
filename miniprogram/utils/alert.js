"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrorTip = exports.showSuccessTip = exports.hideLoading = exports.showLoading = exports.showModal = void 0;
var showModal = function (opts) {
    if (opts === void 0) { opts = { content: '一定是哪里不太对，等会儿再试试~', showCancel: false }; }
    wx.showModal(opts);
};
exports.showModal = showModal;
var showLoading = function (opts) {
    if (opts === void 0) { opts = { title: '拼命加载中...' }; }
    wx.showLoading(opts);
};
exports.showLoading = showLoading;
var hideLoading = function () {
    wx.hideLoading();
};
exports.hideLoading = hideLoading;
var showSuccessTip = function (tip) {
    if (tip === void 0) { tip = '成功啦~'; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQXdGO0lBQXhGLHFCQUFBLEVBQUEsU0FBeUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUM7SUFDOUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QixDQUFDLENBQUE7QUFGWSxRQUFBLFNBQVMsYUFFckI7QUFFTSxJQUFNLFdBQVcsR0FBRyxVQUFDLElBQWdFO0lBQWhFLHFCQUFBLEVBQUEsU0FBOEMsS0FBSyxFQUFFLFVBQVUsRUFBQztJQUN4RixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hCLENBQUMsQ0FBQTtBQUZZLFFBQUEsV0FBVyxlQUV2QjtBQUVNLElBQU0sV0FBVyxHQUFHO0lBQ3ZCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkI7QUFFTSxJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQW9CO0lBQXBCLG9CQUFBLEVBQUEsWUFBb0I7SUFDL0MsbUJBQVcsRUFBRSxDQUFBO0lBQ2IsVUFBVSxDQUFDO1FBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQVRZLFFBQUEsY0FBYyxrQkFTMUI7QUFFTSxJQUFNLFlBQVksR0FBRyxVQUFDLEdBQTBCO0lBQTFCLG9CQUFBLEVBQUEsa0JBQTBCO0lBQ25ELG1CQUFXLEVBQUUsQ0FBQTtJQUNiLFVBQVUsQ0FBQztRQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFUWSxRQUFBLFlBQVksZ0JBU3hCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNob3dNb2RhbCA9IChvcHRzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TW9kYWxPcHRpb249e2NvbnRlbnQ6ICfkuIDlrprmmK/lk6rph4zkuI3lpKrlr7nvvIznrYnkvJrlhL/lho3or5Xor5V+Jywgc2hvd0NhbmNlbDogZmFsc2V9KSA9PiB7XG4gICAgd3guc2hvd01vZGFsKG9wdHMpXG59XG5cbmV4cG9ydCBjb25zdCBzaG93TG9hZGluZyA9IChvcHRzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TG9hZGluZ09wdGlvbiA9IHsgdGl0bGU6ICfmi7zlkb3liqDovb3kuK0uLi4nfSkgPT4ge1xuICAgIHd4LnNob3dMb2FkaW5nKG9wdHMpXG59XG5cbmV4cG9ydCBjb25zdCBoaWRlTG9hZGluZyA9ICgpID0+IHtcbiAgICB3eC5oaWRlTG9hZGluZygpXG59XG5cbmV4cG9ydCBjb25zdCBzaG93U3VjY2Vzc1RpcCA9ICh0aXA6IHN0cmluZyA9ICfmiJDlip/llaZ+JykgPT4ge1xuICAgIGhpZGVMb2FkaW5nKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHRpdGxlOiB0aXAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzaG93RXJyb3JUaXAgPSAodGlwOiBzdHJpbmcgPSAn57O757uf57mB5b+Z77yM6K+356iN5ZCO5YaN6K+VJykgPT4ge1xuICAgIGhpZGVMb2FkaW5nKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIHRpdGxlOiB0aXAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KVxuICAgIH0pXG59Il19