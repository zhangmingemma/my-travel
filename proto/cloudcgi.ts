/** login */
export interface LoginResp {
    errMsg: string,
    requestID: string,
    result: LoginData
}
export interface LoginData {
    appid: string,
    env: string,
    event: LoginEvent,
    openid: string,
    unionid: string
}
export interface LoginEvent {
    userInfo: LoginUserInfo
}
export interface LoginUserInfo {
    appId: string,
    openId: string
}