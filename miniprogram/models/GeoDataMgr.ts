import { showModal } from "../utils/alert"
import { StorageKey } from "../utils/define"
import { cloudRequest } from "../utils/network"
const PAGESIZE = 50

class GeoDataMgr {
    geoCityCount = 0
    geoCityList = [] as IGeoCell[]
    
    // 获取地图城市总数
    async getGeoCityCount():Promise<number> {
        const {error, res} = await cloudRequest<{total: number},{}>({
            name: 'geodata',
            data: {
                action: 'getCount'
            }
        })
        console.info('[GeoDataMgr] getCityCount', error, res)
        if (!error) {
            this.geoCityCount = res?.total || 0
        } else {
            showModal()
        }
        return this.geoCityCount
    }

    // 获取地图全部城市
    async getGeoCitys():Promise<null | IGeoCell[]> {
        // 取缓存
        const storageData = wx.getStorageSync(StorageKey.GeoCitysStorage)
        console.info('[GeoDataMgr] getStorageSync', StorageKey.GeoCitysStorage, storageData)
        if (storageData) {
            this.geoCityList = storageData
            return this.geoCityList
        }

        // 取总数后，分片并发获取全部地图数据
        if (!this.geoCityCount) {
            await this.getGeoCityCount()
        }
        let taskCount = Math.ceil(this.geoCityCount/PAGESIZE)
        let promises = []
        for(let i=0; i<taskCount; i++) {
            promises.push(cloudRequest<{data: IGeoCell[]}, IGetGeoDataReq>({
                name: 'geodata',
                data: {
                    action: 'get',
                    params: {
                        count: PAGESIZE,
                        offset: i*PAGESIZE
                    }
                }
            }))
        }
        const res = await Promise.all(promises)
        console.info('[GeoDataMgr] getGeoCitys', res)

        // 处理地图数据，计入缓存
        if ( res && res.length && !res.find(item => item.error)) {
            res.map((item:any) => {
                const data = item.res?.data || []
                if (data && data.length) {
                    const oldIds = this.geoCityList.map((item:IGeoCell) => item._id)
                    const newList = data.filter((item:IGeoCell) => oldIds.indexOf(item._id) < 0)
                    this.geoCityList = this.geoCityList.concat(newList)
                    wx.setStorage({
                        key: StorageKey.GeoCitysStorage,
                        data: this.geoCityList
                    })
                    console.info('[GeoDataMgr] getGeoCitys CitysCount', this.geoCityList.length)
                }
            })
            return this.geoCityList
        } else {
            showModal()
            return null
        }
    }

    // 获取地图全部省份
    async getGeoProvinces() {

    }

    // 经纬度查询城市
    async getGeoCityByLocation() {

    }

    // 经纬度查询省份
    async getGeoProvinceByLocation() {

    }

    // 获取去过城市
    async getCitys() {

    }

    // 获取去过省份
    async getProvinces() {

    }

    // 设置去过城市
    async setCitys() {

    }

    // 设置去过省份
    async setProvince() {

    }
}

export default new GeoDataMgr()