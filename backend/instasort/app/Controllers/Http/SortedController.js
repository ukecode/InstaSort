'use strict'

const {getFullusernames}  = require('../../../api.js')

class SortedController {
    async index({ request  }){
        const url  = request.only(['url'])
        const res  =  await getFullusernames(url.url).then((e) => e)
        return res

    }
}

module.exports = SortedController
