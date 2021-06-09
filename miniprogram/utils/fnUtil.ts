export const safeGet = (attrList: string[]) => {
    return (obj: any) => {
        attrList.map((attr: string) => {
            obj = (obj || {})[attr]
        })
        return obj
    }
}

export const promiseWrap = async<U, T=any>(promise:Promise<U>):Promise<{error:null|T, res:null|U}> => {
    try {
        const res = await promise
        return {error: null, res: res}
    } catch(e) {
        console.error(e)
        return {error: e, res: null}
    }
}

export const checkWxFuncAvailable = (func: Function) => {
    return func && typeof func === 'function'
}