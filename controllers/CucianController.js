const { paket_cucian } = require('../models')
class CucianController {
    static async getAllCucian(request, response){
        const dataCucian = await paket_cucian.findAll({})
        response.status(200).json({
            message: "Halo ini router pertamaku",
            emot : dataCucian,
            params: `paramnya adalah ${request.params.id}`
        })
    }
    static getAllCucianWithParams(request, response){
        response.status(200).json({
            message: "Halo ini router pertamaku",
            emot : "senyum",
            params: `paramnya adalah ${request.params.id}`
        })
    }
}

module.exports = CucianController