const { Transaksi } = require('../models')
class TransaksiController {
    static async getTransaksi(request, response){
        const data = await Transaksi.findAll({})
        response.status(200).json({
            message: "Data Sukses !",
            data: data
        })
    }
    static async getTransaksibyId(request, response) {
        const data = await Transaksi.findOne({
            where: {
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async addTransaksi(request, response){
        const data = await Transaksi.create({
            OutletId: request.body.OutletId,
            kode_invoice: request.body.kode_invoice,
            MemberId: request.body.MemberId,
            tanggal: request.body.tanggal,
            batas_waktu: request.body.batas_waktu,
            tanggal_bayar: request.body.tanggal_bayar,
            biaya_tambahan: request.body.biaya_tambahan,
            diskon: request.body.diskon,
            pajak: request.body.pajak,
            status: request.body.status,
            dibayar: request.body.dibayar,
            UserId: request.body.UserId
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
    static async deleteTransaksi(request, response) {
        const data = await Transaksi.destroy({
            where: {
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil Dihapus !"
        })
    }
    static async editTransaksi(request,response) {
        const data = await Transaksi.update({
            OutletId: request.body.OutletId,
            kode_invoice: request.body.kode_invoice,
            MemberId: request.body.MemberId,
            tanggal: request.body.tanggal,
            batas_waktu: request.body.batas_waktu,
            tanggal_bayar: request.body.tanggal_bayar,
            biaya_tambahan: request.body.biaya_tambahan,
            diskon: request.body.diskon,
            pajak: request.body.pajak,
            status: request.body.status,
            dibayar: request.body.dibayar,
            UserId: request.body.UserId
        }, {
            where: {
                id: request.params.id
            }
        })
        response.status(200).json({
            message: "Data Berhasil !",
            data: data
        })
    }
}


module.exports = TransaksiController