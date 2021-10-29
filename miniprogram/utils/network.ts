import { promiseWrap } from "./fnUtil"
let __hasInit = false

export const doRequest = async <U, T>(option:IBaseReq<T>):Promise<IBaseRes<U>> => {
    const res:any = await wx.cloud.callFunction({
        name: option.name,
        data: {
            action: option.action,
            params: option.params || {}
        }
    })
    return res
}

export const cloudRequest = async<U, T>(option: IBaseReq<T>):Promise<{error:null|any, res:U|undefined}> => {
    if (!__hasInit) {
        wx.cloud.init()
        __hasInit = true
    }
    
    console.info('[cloud function]req', option)
    const {error, res} = await promiseWrap(doRequest<U, T>(option))
    console.info('[cloud function]res', res)
    const data:U|undefined = res?.result?.data
    return {
        error: error || res?.result?.error, 
        res: data
    }
} 