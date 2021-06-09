const cloud = require('wx-server-sdk')
const fs = require('fs')
cloud.init()

exports.main = async ( event) => {
    switch (event.action) {
        case 'add': return addRecord(event)
        case 'del': return delRecord(event)
        case 'get': return getRecord(event)
        case 'update': return updateRecord(event)
        case 'getCount': return getRecordCount(event)
        case 'addGeo': return addGeo(event)
        default: return 
    }
}

// 处理查询参数
const getQuery = function(event) {
    let query = {}
    if (event.params) {
        if (event.params.adcode) {
            query['properties.adcode'] = event.params.adcode
        }
        if ( event.params.parentAdcode) {
            query['properties.parent.adcode'] = event.params.parentAdcode
        }
        if ( event.params.level) {
            query['properties.level'] = event.params.level
        }
        if (event.params.name) {
            query['properties.name'] = event.params.name
        }
    }
    return query
}

// 插入记录
async function addRecord(event) {
    const collection = cloud.database().collection('geomap')
    // 读文件夹
    const dirPathArr = await fs.readdirSync('./_data')
    if (!dirPathArr || !dirPathArr.length) return 

    // 读文件
    const dataCollection = dirPathArr.filter(dir => !dir.includes('DS')).map(dir => {
        return fs.readFileSync('./_data/'+dir, 'utf8')
    })
    if (!dataCollection || !dataCollection.length) return 

    // 插入
    let recordCount = 0
    const Res = await Promise.all(dataCollection.map(async (geodata) => {
        const _geodata = JSON.parse(geodata)
        recordCount += _geodata.features.length
        const res = await Promise.all(_geodata.features.map(async feature => {
            const a = await collection.add({
                data: {
                    type: feature.type,
                    properties: feature.properties,
                    geometry: feature.geometry
                }
            })
            return a
        }))
        return res
    }))

    return {
        event,
        res: Res,
        recordCount
    }
}

// 查询记录总数: 城市列表370，省份列表35
// 城市总数369，省份总数27，直辖市4个，特别行政区2，台湾省无城市数据1，空边界1
async function getRecordCount(event) {
    const collection = cloud.database().collection('geomap')
    const countData = await collection.count()
    const total = countData.total

    return {
        event,
        total
    }
}

// 查询记录：支持单条查询与多条查询
async function getRecord(event) {
    let maxLimited = 100
    let extraDetect = 5
    
    const collection = cloud.database().collection('geomap')
    const offset = event.params && event.params.offset || 0
    const count = event.params && event.params.count ? Math.min(event.params.count, maxLimited) : maxLimited
    const res = await collection.skip(offset).limit(count + extraDetect).where(getQuery(event)).get()
    if (res.data && res.data.length) {
        res.data = res.data.slice(0, count)
    }

    return {
        event,
        data: res.data || [],
    }
}

// 删除记录
async function delRecord(event) {
    const query = getQuery(event)
    if (!Object.keys(query).length) {
        return {
            errMsg: 'params error'
        }
    }

    const collection = cloud.database().collection('geomap')
    const res = await collection.where(query).remove()

    return {
        event,
        res
    }
}

// 更新记录
async function updateRecord(event) {
    const query = getQuery(event)
    console.error('updateRecord', query)
    if (!Object.keys(query).length || !event.params.data) {
        return {
            errMsg: 'params error'
        }
    }
    console.info('updateRecord', query)
    const collection = cloud.database().collection('geomap')
    const res = await collection.where(query).update({
        data: {
            ...event.params.data
        }
    })  

    return {
        event,
        res
    }
}

async function addGeo(event) {
    const collection = cloud.database().collection('test')
    const res = await collection.where({
        "properties.adcode": "130000"
    }).get()
    console.error(res)
}