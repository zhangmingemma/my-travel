const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event) => {
    switch (event.action) {
        case 'getOpenData': {
            return getOpenData(event)
        }
        default: {
            return
        }
    }
}

async function getOpenData(event) {
    const { params: { list = [] } = {} } = event

    return cloud.getOpenData({
        list: list
    })
}
