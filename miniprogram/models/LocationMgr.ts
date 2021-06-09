import { getAuthorize, doAuthorize } from './OpenDataMgr'

class LocationMgr {
    location = [] as number[]

    async getLocation():Promise<null | number[]> {
        const isAuthorize = await getAuthorize('scope.userLocation')
        if (isAuthorize) {
            const location = await this.doLocation()
            return location
        } else {
            const res = await doAuthorize('scope.userLocation')
            if (res) {
                const location = await this.doLocation()
                return location
            } 
            return null
        }
    }

    async doLocation():Promise<number[]> {
        const location = await wx.getLocation({
            type: 'gcj02'
        })
        console.info('[LocationMgr] doLocation', location)
        return [location.longitude, location.latitude]
    }
}

export default new LocationMgr()