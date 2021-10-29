const cloud = require('wx-server-sdk')
const Outline = require('./models/outline.js').Outline
const Footprint = require('./models/footprint.js').Footprint
const { Adcode } = require('./utils/define.js').Config
cloud.init()

exports.main = async ( event) => {
    switch (event.action) {
        case 'getBaseMap': return getBaseMap(event)
        case 'getUserMap': return getUserMap(event)
        case 'getAllCitysProperties': return getAllCitysProperties(event)
        case 'addUserFootPrints': return addUserFootPrints(event)
        default: return 
    }
}

const getBaseMap = async(event) => {
    const getAllProvincesOutlines = Outline.getAllProvincesOutlines()
    const getCityCount = Outline.getCityCount()
    const [outlines, cityCount] = await Promise.all([getAllProvincesOutlines, getCityCount])
    return {
        error: null,
        data: {
            outlines,
            cityCount
        }
    }
}

const getUserMap = async(event) => {
    const { data: footprintCity } = await Footprint.getUserFootprints(event)
    const results = []
    if (footprintCity && footprintCity.length) {
        const adcodes = footprintCity
            .filter(x => x.parentAdcode != Adcode.CHINA)
            .map(x => x.adcode)
        await Promise.all(adcodes.map(async(adcode) => {
            const data = await Outline.getSingleCityOutline(adcode)
            results.push(...data)
        }))
    }
    return {
        error: null,
        data: {
            outlines: results,
            footprints: footprintCity
        }
    }
}

const getAllCitysProperties = async(event) => {
    const provinceMap = await Outline.getAllCitysProperties()
    const { data: footprintCity } = await Footprint.getUserFootprints(event)
    if (footprintCity && footprintCity.length) {
        const parentAdcodeArr = Array.from(new Set(footprintCity.map(x => x.parentAdcode)))
        provinceMap.forEach(pro => {
            if (parentAdcodeArr.indexOf(pro.adcode) >= 0) {
                const chooseCitys = footprintCity.filter(x => x.parentAdcode == pro.adcode)
                pro.chooseCityCount = chooseCitys.length
                chooseCitys.map(x => {
                    const index = pro.list.findIndex(y => y.adcode == x.adcode)
                    if (index >= 0) {
                        pro.list[index].isChoose = true
                    }
                })
            }
        })
    }

    return {
        error: null,
        data: provinceMap
    }
}

const addUserFootPrints = async(event) => {
    const error = await Footprint.addUserFootPrints(event)

    return {
        error: error,
        data: null
    }
}