const cloud = require('wx-server-sdk')
const Outline = require('./models/outline.js').Outline
const Footprint = require('./models/footprint.js').Footprint
cloud.init()

exports.main = async ( event) => {
    switch (event.action) {
        case 'getUserMap': return getUserMap(event)
        case 'getAllCitysProperties': return Outline.getAllCitysProperties(event)
        default: return 
    }
}

const getUserMap = async(event) => {
    const { res: provinces, error } = await Outline.getAllProvince(event)
    const { res: footprints } = await Footprint.getUserFootprints(event)
    return {
        event,
        error,
        outlines: provinces
    }
}