const { DetailTransaksi } = require('../models')
class DetailTransaksiController {
    static async getDetailTransaksi(request, response){
        const data = await DetailTransaksi.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async getDetailTransaksibyId(request, response){
        const data = await DetailTransaksi.findOne({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async addDetailTransaksi(request, response){
        const data = await DetailTransaksi.create({
            TransaksiId: request.body.TransaksiId,
            PaketId: request.body.PaketId,
            Qty: request.body.Qty,
            keterangan: request.body.keterangan
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async editDetailTransaksi(request, response){
        const data = await DetailTransaksi.update({
            TransaksiId: request.body.TransaksiId,
            PaketId: request.body.PaketId,
            Qty: request.body.Qty,
            keterangan: request.body.keterangan
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async deleteDetailTransaksi(request, response){
        const data = await DetailTransaksi.destroy({
            where:{
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
}

module.exports = DetailTransaksiController