const { $, expect } = require('@wdio/globals')
// const loginpage = require('./login.page');

class kategori{
    get klikKategori(){ return $('//div[@class="css-tnxwfz"]//a[5]')}
    // add object
    get klikTambah(){ return $('//a[normalize-space()="tambah"]')}
    get inputNama(){ return $('//input[@id="nama"]')}
    get inputDeskripsi(){ return $('//input[@id="deskripsi"]')}
    get klikSimpanAdd(){ return $('//button[normalize-space()="simpan"]')}
    get msgBerhasilTambah(){
        return $('//*/text()[normalize-space(.)="item ditambahkan"]/parent::*')
    }

    // edit object
    get klikAction(){ return $('//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"]')}
    get klikUbah(){ return $('//a[@id="menu-list-146-menuitem-143"]')}
    get ubahNama(){ return $('//input[@id="nama"')}
    get ubahDeskripsi(){ return $('//input[@id="deskripsi"')}
    get klikSimpanUbah(){ return $('//button[normalize-space()="simpan"]')}
    get msgBerhasilUbah(){
        return $('//*/text()[normalize-space(.)="item diubah"]/parent::*')
    }

    // hapus object
    get klikHapus(){ 
        return $('//button[@id="menu-list-219-menuitem-217"]')
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
        await super.login('hidayah33@gmail.com', 'password')
    }

    async tambahCategori(nama, deskripsi) {
        await this.klikKategori.click();
        await this.klikTambah.click();
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.klikSimpanAdd.click();
      }

    async ubahCategori(nama, deskripsi){
        await this.klikKategori.click();
        await this.klikAction.click();
        await this.klikUbah.click();
        await this.ubahNama.setValue(nama);
        await this.ubahDeskripsi.setValue(deskripsi);
        await this.klikSimpanUbah.click();
    }

    async deleteCategori(){
        await this.klikKategori.click();
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

module.exports = new kategori();
