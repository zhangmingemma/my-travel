// cloud request base req
declare interface IBaseReq<P> {
    name: string,
    action?: string,
    params?: P
}
declare interface IBaseRes<U> {
    errCode?: number,
    errMsg: string,
    result: IBaseResult<U>
}

declare interface IBaseResult<U> {
    error: string,
    data: U
}