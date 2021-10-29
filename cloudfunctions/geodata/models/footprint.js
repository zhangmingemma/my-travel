const { Table } = require('../utils/define.js').Config
const cloud = require('wx-server-sdk')

const getUserFootprints = async({ userInfo:{ openId } = {}} = {}) => {
    if (!openId) {
        return {
            error: '用户信息为空',
            data: []
        }
    } 
    const collection = cloud.database().collection(Table.UserFootprints)
    const {data = []} = await collection.where({
        openid: openId
    }).get()
    let footprints = []
    if (data && data.length) {
        footprints = data[data.length - 1].footprintCity
    }
    console.info('[getUserFootprints] res', data)
    return {
        error: null,
        data: footprints,
    }
}

const addUserFootPrints = async({ userInfo:{ openId } = {}, params: {citys = []}} = {}) => {
    if (!openId) return '用户信息为空'
    if (!citys || !citys.length) return '足迹数据为空'
    if (!checkFootPrintDataFormat(citys)) return '足迹格式不正确'
    
    const collection = cloud.database().collection(Table.UserFootprints)
    const {data} = await collection.where({
        openid: openId
    }).get()
    if (data && data.length) {
        await collection.where({
            openid: openId
        }).update({
            data: {
                footprintCity: citys
            }
        })
    } else {
        await collection.add({
            data: {
                openid: openId,
                footprintCity: citys
            }
        })
    }
    return null
}

const checkFootPrintDataFormat = (list) => {
    const mustKeys = ['adcode', 'name', 'parentAdcode']
    const error = list.find(item => {
        return mustKeys.reduce((acc, cur) => {
            return acc || !item[cur]
        },false)
    })
    return !error
}

exports.Footprint = {
    getUserFootprints,
    addUserFootPrints
}