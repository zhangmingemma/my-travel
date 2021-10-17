const { Table } = require('../utils/define.js').Config
const { promiseWrap } = require('../utils/utils.js').Utils
const cloud = require('wx-server-sdk')

const getUserFootprints = async({ userInfo } = {}) => {
    const { openId } = userInfo || {}
    const collection = cloud.database().collection(Table.UserFootprints)
    const {res, error} = await promiseWrap(collection.where({
        openid: openId || ''
    }).get())
    console.info('[getUserFootprints] res', res)
    return {
        error,
        res: res && res.data || null,
    }
}

exports.Footprint = {
    getUserFootprints
}