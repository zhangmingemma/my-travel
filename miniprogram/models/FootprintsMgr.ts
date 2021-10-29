import { showModal } from "../utils/alert"
import { cloudRequest } from "../utils/network"

class FootprintsMgr {
    outlineData: IGeoCell[] = []
    cityCount: number = 0
    
    // 获取基础地图轮廓
    async getBaseMap():Promise<IGeoCell[]> {
        const {error, res:{ outlines=[], cityCount=370 }={}} = await cloudRequest<{
            outlines: IGeoCell[],
            cityCount: number
        },{}>({
            name: 'geodata',
            action: 'getBaseMap'
        })
        if (error) {
            showModal()
        } else {
            this.outlineData = outlines
            this.cityCount = cityCount
        }
        console.info('[FootprintsMgr] getBaseMap', this.outlineData)
        return this.outlineData
    }

    // 获取用户足迹地图轮廓
    async getUserMap():Promise<{outlines: IGeoCell[], footprints:{name:string, value:number}[]}>{
        const {res: {outlines=[], footprints=[]}={}} = await cloudRequest<{
            outlines: IGeoCell[],
            footprints: IFootPrintCell[]
        },{}>({
            name: 'geodata',
            action: 'getUserMap'
        })
        console.info('[FootprintsMgr] getUserMap', outlines.map(x=>x.properties.name), footprints.map(x=>x.name))
        return {
            outlines: this.outlineData.concat(outlines),
            footprints: footprints.map(x => ({
                name: x.name,
                value: Math.floor(Math.random()*10)
            }))
        }
    }

    // 获取所有省市列表
    async getAllCitys():Promise<IProvinceCell[]> {
        const {error, res: data = []} = await cloudRequest<IProvinceCell[],{}>({
            name: 'geodata',
            action: 'getAllCitysProperties'
        })
        console.info('[FootprintsMgr] getAllCitys', error, data)
        if (error) {
            showModal()
        } else {
            return data
        }
        return []
    }

    // 设置用户足迹
    async addFootPrints(list: IProvinceCell[]) {
        const citys = list
            .filter(item => (item.chooseCityCount || 0) > 0)
            ?.reduce((acc, cur) => {
                const x = cur.list
                    .filter(city => city.isChoose)
                    .map(city => ({
                        name: city.name,
                        adcode: city.adcode,
                        parentAdcode: city.parentAdcode,
                        isCity: city.isCity
                    }))
                return acc.concat(x)
            },[])
        if (!citys || !citys.length) return '至少添加一个足迹，再提交噻~'
        const { error } = await cloudRequest<{},{citys: IFootPrintCell[]}>({
            name: 'geodata',
            action: 'addUserFootPrints',
            params: {
                citys: citys
            }
        })
        return error
    }
}

export default new FootprintsMgr()