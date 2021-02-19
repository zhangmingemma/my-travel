import { safeGet } from "./fnUtil"

let holdOn = null as (Promise<ICloud.CallFunctionResult> | null)
let __hasInit = false

export const login = async():Promise<ICloud.CallFunctionResult> => {
    if (!__hasInit) {
        wx.cloud.init()
        __hasInit = true
    }
    const res = await wx.cloud.callFunction({
        name: 'login',
    })
    console.info('[cloud function]login', res)
    return res
}

export const cloudRequest = async <U, T>(option:IOptions<T>):Promise<U> => {
    holdOn = holdOn || login()
    await holdOn
    
    const res:any = await wx.cloud.callFunction({
        name: option.name,
        data: option?.data || {}
    })
    if (safeGet(['result','errCode'])(res) != 0) {
        throw new Error(`[cloud function]${option.name}, ${JSON.stringify(option.data)}`)
    }
    console.info('[cloud function]', option, res)
    return res.result || {}
}