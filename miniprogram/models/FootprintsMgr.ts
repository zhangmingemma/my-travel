import { showModal } from "../utils/alert"
import { cloudRequest } from "../utils/network"

class FootprintsMgr {
    outlineData: IGeoCell[] = []
    
    // 获取用户的地图轮廓
    async getUserMap():Promise<IGeoCell[]> {
        const {error, res} = await cloudRequest<{outlines: null | IGeoCell[]},{}>({
            name: 'geodata',
            data: {
                action: 'getUserMap'
            }
        })
        console.info('[FootprintsMgr] getUserMap', error, res)
        if (error) {
            showModal()
        } else {
            this.outlineData = res && res.outlines || []
        }
        return this.outlineData
    }

    // 获取所有省市列表
    async getAllCitys():Promise<null | IGeoCell['properties']> {
        const {error, res} = await cloudRequest<{data: null | IGeoCell['properties']},{}>({
            name: 'geodata',
            data: {
                action: 'getAllCitysProperties'
            }
        })
        console.info('[FootprintsMgr] getAllCitys', error, res)
        if (error) {
            showModal()
        } else {
            console.error(res, error)
        }
        return res && res.data || null
    }
}

export default new FootprintsMgr()