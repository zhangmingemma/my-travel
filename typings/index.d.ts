/// <reference path="./types/index.d.ts" />

interface IAppOption {
    globalData?: any;
    setupLogger?(): void;
    checkAppUpdate?(): void;
}