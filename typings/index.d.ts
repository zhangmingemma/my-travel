interface IAppOption {
    globalData?: any;
    setupLogger?(): void;
    checkAppUpdate?(): void;
}