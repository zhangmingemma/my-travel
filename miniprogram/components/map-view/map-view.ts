import { genOption } from './genOption'
import { hideLoading, showLoading } from '../../utils/alert'
import GeoDataMgr from '../../models/GeoDataMgr'
import LocationMgr from '../../models/LocationMgr'
import { cloudRequest } from '../../utils/network'
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
        // const res = await cloudRequest<{data: IGeoCell[]}, IGetGeoDataReq|any>({
        //     name: 'geodata',
        //     data: {
        //         action: 'update',
        //         params: {
        //             adcode: "710000",
        //             data: {
        //                 "properties.parent": {
        //                     "adcode": 100000
        //                 },
        //                 "properties.center": [121.509062,25.044332]
        //             }
        //         }
        //     }
        // })
        const res:any = await cloudRequest<{data: IGeoCell[]}, IGetGeoDataReq|any>({
            name: 'geodata',
            data: {
                action: 'get',
                params: {
                    adcode: 510100
                }
            }
        })
        this.data.mapData = JSON.stringify({
            type: "FeatureCollection",
            name: "100000_full",
            features: res.res.data
        })
        console.error(res)
        this.initChart()
        // this.initMapData()
        // this.getLocation()
    },
    methods: {
        async initMapData() {
            showLoading()
            this.data.geoCityList = await GeoDataMgr.getGeoCitys()
            if (this.data.geoCityList) {
                this.data.mapData = JSON.stringify({
                    type: "FeatureCollection",
                    name: "100000_full",
                    features: this.data.geoCityList
                })
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
                const option = genOption()
                canvas.setChart(chart)
                echarts.registerMap('china', this.data.mapData)
                chart.setOption(option)
                return chart
            }
            return init
        },
        // 获取用户地理位置
        getLocation() {
            LocationMgr.getLocation()
        }
    },
});
