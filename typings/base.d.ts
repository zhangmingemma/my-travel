// cloud request base req
declare interface IBaseReq<P> {
    name: string,
    data?: IOptions<P>
}

declare interface IOptions<P=any> {
    action?: string,
    params?: P
}

declare interface IBaseRes<U> {
    errCode?: number,
    errMsg: string,
    result: U
}


