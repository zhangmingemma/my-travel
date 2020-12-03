export const safeCall = (fn: Function | undefined | null, ...args: any[]): any => {
    return fn && typeof fn === 'function' && fn(...args)
}

export const safeCloud = (fn: Function | undefined | null, ...args: any[]): any => {
    return wx.cloud && fn && typeof fn === 'function' && fn(...args)
}

