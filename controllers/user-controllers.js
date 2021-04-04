const { User } = require('../models')
const bcrypt = require('bcryptjs')
class UserController {
    static async getUser(request, response){
        const data = await User.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async registerUser(request, response) {
        const data = await User.create({
            nama: request.body.name,
            username: request.body.username,
            password: request.body.password,
            OutletId: request.body.OutletId,
            role: request.body.role
        })
        response.status(201).json({
            message: "register success",
            data
        })
    }
    static async loginUser(request, response) {
        try {
            const user = await User.findOne({
                where : {
                    username: request.body.username
                }
            })
            if(!user) {
                return response.status(401).json({
                    message: "Login Failed"
                })
            } else {
                if(bcrypt.compareSync(request.body.password, user.password)) {
                    return response.status(200).json({
                        message: "login success"
                    })
                } else {
                    return response.status(401).json({
                        message: "login failed"
                    })
                }
            }
        } catch(err) {
            return response.status(500).json({
                message: err
            })
        }
    }
    static async getUserbyId(request, response){
        const data = await User.findOne({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async editUser(request, response) {
        const data = await User.update({
            nama: request.body.name,
            username: request.body.username,
            password: request.body.password,
            OutletId: request.body.OutletId,
            role: request.body.role 
        },{
            where: {
                id: id.request.params
            }
        })
    }
    static async deleteUser(request, response){
        const data = await User.destroy({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil Dihapus !"
        })
    }
}

module.exports = UserController