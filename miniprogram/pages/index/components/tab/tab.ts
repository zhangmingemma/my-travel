Component({
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer(val) {
                if (val) {
                    this.tryInit();
                    this.tryShow();
                } else if (this.data.bShow) {
                    this.tryHide();
                }
            },
        },
        params: {
            type: Object,
            value: {},
        },
    },
    data: {
        bInit: false,
        bShow: false,
    },
    pageLifetimes: {
        show() {
            this.data.show && this.tryShow();
        },
        hide() {
            this.data.show && this.tryHide();
        },
    },
    detached() {
        this.tryHide();
    },
    methods: {
        tryInit() {
            if (!this.data.bInit) {
                this.setData({
                    bInit: true,
                })
                const comp = this.getComponent();
                comp.onLoad && comp.onLoad(this.data.params || {});
            }
        },
        tryShow() {
            if (!this.data.bShow) {
                const comp = this.getComponent();
                comp.onShow && comp.onShow();
                this.data.bShow = true;
            }
        },
        tryHide() {
            if (this.data.bShow) {
                const comp = this.getComponent();
                comp.onHide && comp.onHide();
                this.data.bShow = false;
            }
        },
        getComponent(): WechatMiniprogram.Component.TrivialInstance {
            return this.selectComponent('#comp');
        },
    },
});
