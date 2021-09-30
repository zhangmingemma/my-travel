const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async ( event) => {
    switch (event.action) {
        case 'get': return getRecord(event)
        case 'getCount': return getRecordCount(event)
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



// 查询记录总数: 城市列表370，省份列表35
// 城市总数369，省份总数27，直辖市4个，特别行政区2，台湾省无城市数据1，空边界1
async function getRecordCount(event) {
    const collection = cloud.database().collection('geomap')
    const countData = await collection.count()
    const total = countData.total

    return {
        event,
        total: total || 370
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
