export const showModal = (opts: WechatMiniprogram.ShowModalOption) => {
    wx.showModal(opts)
}

export const showLoading = (opts: WechatMiniprogram.ShowLoadingOption = { title: '加载中'}) => {
    wx.showLoading(opts)
}

export const hideLoading = () => {
    wx.hideLoading()
}

export const showSuccessTip = (tip: string = '操作成功') => {
    hideLoading()
    setTimeout(() => {
        wx.showToast({
            icon: 'success',
            title: tip,
            duration: 1500
        })
    })
}

export const showErrorTip = (tip: string = '系统繁忙，请稍后再试') => {
    hideLoading()
    setTimeout(() => {
        wx.showToast({
            icon: 'none',
            title: tip,
            duration: 1500
        })
    })
}