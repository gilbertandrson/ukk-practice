const { user } = require('../models')
class UserController {
    static async getUserCucian(request, response){
        const data = await user.findAll({})
        response.status(200).json({
            message: "disckon",
            info : "10%",
            paramete: `paramnya adalah ${request.params.cucian}`,
            data: data
        })
    }
    static async getUserbyId(request, response){
        const data = await user.findAll({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "disckon",
            info : "10%",
            paramete: `paramnya adalah ${request.params.cucian}`,
            data: data
        })
    }
}

module.exports = UserController