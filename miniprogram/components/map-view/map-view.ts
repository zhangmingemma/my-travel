const echarts = require('./ec-canvas/echarts')

Component({
    properties: {
        mapType: {
            type: String,
            default: ''
        }, 
        mapOption: {
            type: Object,
            default: {}
        },
        mapData: {
            type: Object,
            default: null,
            observer() {
                if (this.data.mapData && this.data.mapData.features) {
                    this.initChart()
                }
            }
        }
    },
    data: {
        ec: {},
        chartReady: false
    },
    methods: {
        // 初始化地图
        initChart() {
            this.setData({
                chartReady: true,
                ec: {
                    onInit: this.setChart()
                }
            })
        },
        // 设置注册地图
        setChart() {
            const init = (canvas:any, width:number, height:number, dpr:number) => {
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr,
                    renderer: 'canvas'
                });
                canvas.setChart(chart)
                echarts.registerMap(this.data.mapType, this.data.mapData)
                chart.setOption(this.data.mapOption)
                return chart
            }
            return init
        }
    },
});
