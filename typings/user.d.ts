declare interface IUserCloudCgiResult {
    cloudID: string,
    data: IUserInfo
}

declare interface IUserInfo {
    avatarUrl: string,
    city: string,
    country: string,
    gender: enGender,
    language: string
    nickName: string
    openId: string
    province: string
    watermark: object
}

declare enum enGender {
    male = 1,
    female = 2
}