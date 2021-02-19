import { genOption } from './genOption'
import { china } from './china'
const echarts = require('./ec-canvas/echarts')

Component({
    properties: {
        
    },
    data: {
        ec: {},
        option: {}, 
    },
    attached() {
        this.setData({
            ec: {
                onInit: this.initChart()
            }
        })
    },
    detached() {
    },
    methods: {
        initChart() {
            const init = (canvas:any, width:number, height:number, dpr:number) => {
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr,
                    renderer: 'canvas'
                });
                this.data.option = genOption()
                canvas.setChart(chart)
                echarts.registerMap('china', china)
                chart.setOption(this.data.option)
                return chart
            }
            return init
        },
    },
});
