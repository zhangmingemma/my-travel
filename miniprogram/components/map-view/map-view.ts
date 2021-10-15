import { genOption } from './genOption'
import { hideLoading, showLoading } from '../../utils/alert'
import GeoDataMgr from '../../models/GeoDataMgr'
import { MapEnum } from '../../utils/define';
const echarts = require('./ec-canvas/echarts')

Component({
    data: {
        ec: {},
        option: {}, 
        mapData: {},
        geoCityList: [] as (null | IGeoCell[]),
        chartReady: false,
        geoCellCount: 0
    },
    async attached() {
        this.initMapData()
    },
    methods: {
        async initMapData() {
            showLoading()
            this.data.geoCityList = await GeoDataMgr.getGeoCitys()
            if (this.data.geoCityList) {
                this.data.mapData = {
                    type: "FeatureCollection",
                    features: this.data.geoCityList
                }
                this.initChart()
                hideLoading()
            }
        },
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
                const option = genOption([
                  { name: '广州市', value: 1 },
                  { name: '阿拉善盟', value: 1}
                ])
                canvas.setChart(chart)
                echarts.registerMap(MapEnum.MapType.CHINA, this.data.mapData)
                chart.setOption(option)
                return chart
            }
            return init
        }
    },
});
