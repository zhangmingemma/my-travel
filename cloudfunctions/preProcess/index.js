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
      // 添加properties
      case 'addProperties': return addProperties()
      case 'test': return test()
      default: return 
  }
}

// 插入轮廓数据的属性
async function addProperties() {
    const collection = cloud.database().collection('geomap')
    const { total } = await collection.count()
    const MAX_LIMIT = 40
    const batchTimes = Math.ceil(total / MAX_LIMIT)
    const tasks = []
    for (let i=0; i < batchTimes; i++) {
        const promise = collection.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
        tasks.push(promise)
    }
    const { data } = ( await Promise.all(tasks)).reduce((acc,cur) => {
        return {
            data: acc.data.concat(cur.data)
        }
    })
    const res = await Promise.all(data.map(async(item) => {
        const collectPros = cloud.database().collection('geomap_properties')
        const properties = item.properties
        properties.parentAdcode = parseInt(item.properties.parent.adcode)
        properties.adcode = parseInt(item.properties.adcode)
        delete properties.parent
        return await collectPros.add({
            data: properties
        })
    }))

    return {
        res
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

const handleName = (name) => {
    if (!name || typeof name != 'string') return ''
    const  NameStopWord = [
        '省','壮族自治区','维吾尔自治区','回族自治区','自治区','市','特别行政区', 
        '土家族苗族自治州', '林区', '傣族自治州', '傈僳族自治州', '彝族自治州', '藏族自治州', '哈尼族彝族自治州',
        '傣族景颇族自治州', '壮族苗族自治州', '白族自治州', '蒙古自治州', '哈萨克自治州', '回族自治州', '柯尔克孜自治州',
        '地区', '藏族自治州', '蒙古族藏族自治州', '朝鲜族自治州', '黎族自治县', '黎族苗族自治县', '布依族苗族自治州',
        '彝族自治州', '藏族羌族自治州', '苗族侗族自治州', '哈尼族', '蒙古族'
    ]
    NameStopWord.map(item => {
        name = name.replace(item, '')
    })
    return name
}

async function test() {
    const collection = cloud.database().collection('geomap')
    const { total } = await collection.count()
    const MAX_LIMIT = 40
    const batchTimes = Math.ceil(total / MAX_LIMIT)
    const tasks = []
    for (let i=0; i < batchTimes; i++) {
        const promise = collection.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
        tasks.push(promise)
    }
    const { data } = ( await Promise.all(tasks)).reduce((acc,cur) => {
        return {
            data: acc.data.concat(cur.data)
        }
    })
    const res = await Promise.all(data.map(async(item) => {
        console.error(item.properties.name)
        await collection.where({
            'properties.adcode': item.properties.adcode,
            'properties.level': item.properties.level,
            'properties.parentAdcode': item.properties.parentAdcode
        }).update({
            data: {
                ['properties.alias']: handleName(item.properties.name)
            }
        })  
    }))

    return {
        res
    }
}