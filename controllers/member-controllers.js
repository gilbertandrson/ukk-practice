const { Member } = require('../models')
class MemberController {
    static async getMember(request, response){
        const data = await Member.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async getMemberbyId(request, response){
        const data = await Member.findOne({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async addMember(request, response){
        const data = await Member.create({
            nama: request.body.nama,
            alamat: request.body.alamat,
            jenis_kelamin: request.body.jenis_kelamin,
            tlp: request.body.tlp
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async editMember(request, response){
        const data = await Member.update({
            nama: request.body.nama,
            alamat: request.body.alamat,
            jenis_kelamin: request.body.jenis_kelamin,
            tlp: request.body.tlp
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async deleteMember(request, response){
        const data = await Member.destroy({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil Dihapus !"
        })
    }
}

module.exports = MemberController