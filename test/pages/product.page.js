// import loginPage from "./login.page"

class productpage{

    get klikProduct(){ return $('//div[@class="css-tnxwfz"]//a[6]')}
    // add object
    get klikTambah(){ return $('//a[normalize-space()="tambah"]')}
    get inputNama(){ return $('//input[@id="nama"]')}
    get inputDeskripsi(){ return $('//input[@id="deskripsi"]')}
    get inputHargaBeli(){ return $('//input[@id="harga beli"]')}
    get inputHargaJual(){ return $('//input[@id="harga jual"]')}
    get inputStok(){ return $('//input[@id="stok"]')}
    get inputCategori(){ return $('//input[@id="kategori"]')} //read only
    get pilihCategori(){ return $('//td[normalize-space()="Umum"]')}
    get klikSimpanAdd(){ return $('//button[normalize-space()="simpan"]')}
    get msgBerhasilTambah(){
        return $('//*/text()[normalize-space(.)="item ditambahkan"]/parent::*')
    }

    // edit object
    get klikAction(){ return $('//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"]')}
    get klikUbah(){ return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/a[1]')}
    get ubahNama(){ return $('//input[@id="nama"]')}
    get ubahDeskripsi(){ return $('//input[@id="deskripsi"]')}
    get ubahHargaBeli(){ return $('//input[@id="harga beli"]')}
    get ubahHargaJual(){ return $('//input[@id="harga jual"]')}
    get ubahStok(){ return $('//input[@id="stok"]')}
    get ubahCategori(){ return $('//input[@id="kategori"]')} //read only
    get pilihUbahCategori(){ return $('//td[normalize-space()="Umum"]')}
    get klikSimpanUbah(){ return $('//button[normalize-space()="simpan"]')}
    get msgBerhasilUbah(){
        return $('//*/text()[normalize-space(.)="item diubah"]/parent::*')
    }

    // hapus object

    get klikHapus(){ 
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/button[1]')
    }
    get klikModalDelete(){
        return $('//button[normalize-space()="Delete"]')
    }
    get klikModalBatal(){
        return $('//button[normalize-space()="batal"]')
    }

    get msgBerhasilDelete(){
        return $('//*/text()[normalize-space(.)="item dihapus"]/parent::*')
    }

    get errorMsg() {
        return $('//div[@role="alert"]'); //locator error message
    }

    async open(){
        await browser.url('hidayah33@gmail.com', 'password')
    }
    
    async tambahProduct(nama, deskripsi, HB, HJ, Stk) {
        await this.klikProduct.click();
        await this.klikAction.click();
        await this.klikTambah.click();
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.inputHargaBeli.setValue(HB);
        await this.inputHargaJual.setValue(HJ);
        await this.inputStok.setValue(Stk);
        await this.inputCategori.click();
        await this.pilihCategori.click();
        await this.klikSimpanAdd.click();
      }

    async ubahProduct(nama, deskripsi, HB, HJ, Stk){
        await this.klikProduct.click();
        await this.klikAction.click();
        await this.klikUbah.click();
        await this.ubahNama.setValue(nama);
        await this.ubahDeskripsi.setValue(deskripsi);
        await this.ubahHargaBeli.setValue(HB);
        await this.ubahHargaJual.setValue(HJ);
        await this.ubahStok.setValue(Stk);
        await this.ubahCategori.click();
        await this.pilihUbahCategori.click();
        await this.klikSimpanUbah.click();
    }
    
    async deleteProduct(){
        await this.klikProduct.click();
        await this.klikAction.click();
        await this.klikHapus.click();
        await this.klikModalDelete.click();
    }

    async assertPassedMessageAdd(expectedPassedMessage){
        await expect(this.msgBerhasilTambah).toHaveTextContaining(expectedPassedMessage)
    }

    async assertPassedMessageUbah(expectedPassedMessage){
        await expect(this.msgBerhasilUbah).toHaveTextContaining(expectedPassedMessage)
    }

    async assertPassedMessageDel(expectedPassedMessage){
        await expect(this.msgBerhasilDelete).toHaveTextContaining(expectedPassedMessage)
    }


    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }
    
    async getErrorMessage() {
        return this.errorMsg.getText();
    }
}


module.exports = new productpage();