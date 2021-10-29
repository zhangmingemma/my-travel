const { Table, Adcode } = require('../utils/define.js').Config
const cloud = require('wx-server-sdk')  

// 获取所有省份的轮廓数据
const getAllProvincesOutlines = async() => {
    const collection = cloud.database().collection(Table.GeoMap)
    const { data = []} = await collection.where({
        ['properties.parentAdcode']: Adcode.CHINA,
        ['properties.level']: 'province'
    }).get()
    console.info('[getAllProvincesOutlines] res', data.map(item => item.properties.name))
    return data
}

// 获取城市总数
const getCityCount = async() => {
    const db = cloud.database()
    const collection = db.collection(Table.GeoMapProperties)
    const _ = db.command
    const { total = 0} = await collection.where(_.or([
        {
            level: 'city'
        },{
            isCity: true,
            level: 'province'
        }
    ])).count()
    return total
}

// 获取指定省份的轮廓数据
const getSingleProvinceOutline = async(adcode) => {
    const collection = cloud.database().collection(Table.GeoMap)
    const { data = []} = await collection.where({
        ['properties.parentAdcode']: adcode,
        ['properties.level']: 'city'
    }).get()
    return data
}

// 获取指定城市的轮廓数据
const getSingleCityOutline = async(adcode) => {
    const collection = cloud.database().collection(Table.GeoMap)
    const { data = []} = await collection.where({
        ['properties.adcode']: adcode,
        ['properties.level']: 'city'
    }).get()
    return data
}

// 获取所有城市的属性，并按照省-市的形式组织
const getAllCitysProperties = async() => {
    const db = cloud.database()
	const collection = db.collection(Table.GeoMapProperties)
	const _ = db.command
    const result = [{
        name: '热门',
        adcode: Adcode.CHINA,
        list: []
    }]
	const {data: province = []} = await collection.where({
		level: 'province',
		name: _.neq('')
	}).get()
	await Promise.all(province.map(async(pro) => {
        if (!pro.isCity) {
            const { data: city } = await collection.where({
                parentAdcode: pro.adcode,
                level: 'city'
            }).get()
            city && city.length && result.push({
                name: pro.alias,
                adcode: pro.adcode,
                list: city.map(x => handlerPropertyObj(x))
            })
        } else {
            result[0].list.push(handlerPropertyObj(pro))
        }
	}))
	return result
}

const handlerPropertyObj = (item) => {
    return {
        name: item.name,
        alias: item.alias,
        isCity: item.isCity || false,
        adcode: item.adcode || 0,
        parentAdcode: item.parentAdcode
    }
}

exports.Outline = {
    getCityCount,
    getAllCitysProperties,
    getAllProvincesOutlines,
    getSingleCityOutline,
    getSingleProvinceOutline
}