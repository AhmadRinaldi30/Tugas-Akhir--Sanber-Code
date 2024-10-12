
class dashboard {
    get namaToko(){ return $('//dt[normalize-space()="Toko hidayah"]')}
    get penjualan(){ return $('//dt[normalize-space()="penjualan"]')}
    get pembelian(){ return $('//dt[normalize-space()="pembelian"]')}
    get labaKotor(){ return $('//dt[normalize-space()="laba kotor"]')}
    get totalPenjualan(){ return $('//dt[normalize-space()="total penjualan"]')}
    get totalPembelian(){ return $('//dt[normalize-space()="total pembelian"]')}

    async getDasboard (){
        (await this.namaToko).isDisplayed();
        (await this.penjualan).isDisplayed();
        (await this.pembelian).isDisplayed();
        (await this.labaKotor).isDisplayed();
        (await this.totalPenjualan).isDisplayed();
        (await this.totalPembelian).isDisplayed();
    }
}
module.exports = new dashboard();