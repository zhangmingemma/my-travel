const { screenHeight, statusBarHeight } = wx.getSystemInfoSync()

Page({
    data: {
        screenHeight,
        statusBarHeight,
        selected: 0,
        tabs: [
            {
                pagePath: "/pages/footprints/footprints",
                iconPath: "/assets/footprints.png",
                selectedIconPath: "/assets/footprints_active.png",
                text: "足迹",
                component: "footprints"
            },
            {
                pagePath: "/pages/routes/routes",
                iconPath: "/assets/routes.png",
                selectedIconPath: "/assets/routes_active.png",
                text: "路线",
                component: "routes"
            },
            {
                pagePath: "/pages/my/my",
                iconPath: "/assets/my.png",
                selectedIconPath: "/assets/my_active.png",
                text: "我的",
                component: "my"
            }
        ]
    },
    async onLoad() {  
        this.setTitle(0)
    },
    switchTab({ currentTarget: { dataset: { index } } }: { currentTarget: { dataset: { index: number } } }) {
        if (this.data.selected !== index) {
            this.setData({
                selected: index,
            })
            this.setTitle(index)
        }
    },
    setTitle(index:number) {
        wx.setNavigationBarTitle({
            title: this.data.tabs[index].text
        })
    },
});
