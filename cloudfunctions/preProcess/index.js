const cloud = require('wx-server-sdk')
const fs = require('fs')
cloud.init()

exports.main = async ( event) => {
  switch (event.action) {
      // 读取json，录入轮廓数据  
      case 'addRecord': return addRecord(event)
      // 删除轮廓数据
      case 'delRecord': return delRecord(event)
      // 更新轮廓数据
      case 'updateRecord': return updateRecord(event)
      default: return 
  }
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
        const res = await Promise.all(_geodata.features
          .filter(
            feature => 
              ['110000', '120000', '310000', '500000', '710000', '810000', '820000', '100000']
              .indexOf(feature.properties.adcode) < 0
          )
          .map(async feature => {
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