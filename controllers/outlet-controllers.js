const { Outlet } = require('../models')
class OutletController {
    static async getOutlet(request, response){
        const data = await Outlet.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async getOutletbyId(request, response){
        const data = await Outlet.findOne({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async addOutlet(request, response){
        const data = await Outlet.create({
            nama: request.body.nama,
            alamat: request.body.alamat,
            tlp: request.body.tlp
        },{
            where: {
                id: id.request.params
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async editOutlet(request, response){
        const data = await Outlet.update({
            nama: request.body.nama,
            alamat: request.body.alamat,
            tlp: request.body.tlp
        },{
            where: {
                id: id.request.params
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async deleteOutlet(request, response){
        const data = await Outlet.destroy({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil Dihapus !"
        })
    }
}

module.exports = OutletController