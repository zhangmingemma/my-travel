const { promiseWrap } = require('../utils/utils.js').Utils
const { Table } = require('../utils/define.js').Config
const cloud = require('wx-server-sdk')

const getAllProvince = async() => {
    const collection = cloud.database().collection(Table.GeoMap)
    const {res, error} = await promiseWrap(collection.where({
        ['properties.parent.adcode']: 100000,
        ['properties.level']: 'province'
    }).get())
    console.info('[getAllProvince] res', res.data.map(item => item.properties.name))
    return {
        error,
        res: res && res.data || null
    }
}

const getAllCitysProperties = async() => {
    const collection = cloud.database().collection(Table.GeoMapProperties)
    const { total } = await collection.count()
    const MAX_LIMIT = 40
    const batchTimes = Math.ceil(total / MAX_LIMIT)
    const tasks = []
    for (let i=0; i < batchTimes; i++) {
        const promise = collection.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
        tasks.push(promise)
    }
    return ( await Promise.all(tasks)).reduce((acc,cur) => {
        return {
            data: acc.data.concat(cur.data)
        }
    })
}

exports.Outline = {
    getAllCitysProperties,
    getAllProvince
}