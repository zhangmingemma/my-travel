export const showModal = (opts: WechatMiniprogram.ShowModalOption={content: '一定是哪里不太对，等会儿再试试~', showCancel: false}) => {
    wx.showModal(opts)
}

export const showLoading = (opts: WechatMiniprogram.ShowLoadingOption = { title: '拼命加载中...'}) => {
    wx.showLoading(opts)
}

export const hideLoading = () => {
    wx.hideLoading()
}

export const showSuccessTip = (tip: string = '成功啦~') => {
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