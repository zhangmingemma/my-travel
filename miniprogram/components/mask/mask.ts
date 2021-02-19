Component({
    properties: {
        banClickOutside: {
            type: Boolean,
            value: false
        },
        animateType: {
            type: String,
            value: 'trans-from-bottom',
        },
        show: {
            type: Boolean,
            observer: function (val) {
                if (val) {
                    this.postData([{
                        condIf: true
                    }, {
                        condShow: true
                    }], 20)
                } else {
                    this.postData([{
                        condShow: false
                    }, {
                        condIf: false
                    }], 250)
                }
            }
        },
    },

    data: {
        condIf: false,
        condShow: false,
    },

    observers: {
        condShow(val) {
            if (!val) {
                setTimeout(() => {
                    !this.data.condShow && this.triggerEvent('animationfinish');
                }, 350)
            }
        },
    },

    methods: {
        touchMask() {
            !this.data.banClickOutside && this.setData({
                show: false
            })
            this.triggerEvent('hidemask', {})
        },
        preventPageScroll() {
            return false;
        },
        postData: function (datas = [], interval = 0) {
            const run = () => {
                if (datas.length) {
                    this.setData(datas.splice(0, 1)[0]);
                }
                if (datas.length) {
                    setTimeout(run, interval);
                }
            };
            run();
        }
    }
});
