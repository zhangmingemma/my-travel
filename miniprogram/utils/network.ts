import { promiseWrap } from "./fnUtil"
let __hasInit = false

export const doRequest = async <U, T>(option:IBaseReq<T>):Promise<IBaseRes<U>> => {
    const res:any = await wx.cloud.callFunction({
        name: option.name,
        data: option?.data || {}
    })
    return res
}

export const cloudRequest = async<U, T>(option: IBaseReq<T>):Promise<{error:null|any, res:null|undefined|U}> => {
    if (!__hasInit) {
        wx.cloud.init()
        __hasInit = true
    }
    
    console.info('[cloud function]req', option)
    const {error, res} = await promiseWrap(doRequest<U, T>(option))
    const data = res?.result
    console.info('[cloud function]res', data)
    return {error, res:data}
} 