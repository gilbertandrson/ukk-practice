const { Paket } = require('../models')
class PaketController {
    static async getPaket(request, response){
        const data = await Paket.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async  addPaket(request, response){
        const data = await Paket.create({
            OutletId: request.body.OutletId,
            jenis: request.body.jenis,
            nama_paket: request.body.nama_paket,
            harga: request.body.harga
        })
        response.status(201).json({
            message: "data successfully created",
            data
        })
    }
    static async getPaketbyId(request, response){
        const data = await Paket.findOne({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async editPaket(request, response){
        const data = await Paket.update({
            OutletId: request.body.OutletId,
            jenis: request.body.jenis,
            nama_paket: request.body.nama_paket,
            harga: request.body.harga
        },{
            where: {
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "data successfully updated",
            data: data
        })

    }
    static async deletePaket(request, response){
        const data = await Paket.destroy({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil Dihapus!"
        })
    }
}

module.exports = PaketController