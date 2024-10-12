
class kategori {
    get klikKategori(){ return $('//div[@class="css-tnxwfz"]//a[5]')}
    // add object
    get klikTambah(){ return $('//a[normalize-space()="tambah"]')}
    get inputNama(){ return $('//input[@id="nama"]')}
    get inputDeskripsi(){ return $('//input[@id="deskripsi"]')}
    get klikSimpanAdd(){ return $('//button[normalize-space()="simpan"]')}
    get msgBerhasilTambah(){
        return $('//*/text()[normalize-space(.)="item diubah"]/parent::*')
    }

    // edit object
    get klikAction(){ return $('//button[@id="menu-button-146"]')}
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
    get klikModalDelete(){
        return $('//button[normalize-space()="batal"]')
    }

    get msgBerhasilDelete(){
        return $('//*/text()[normalize-space(.)="item dihapus"]/parent::*')
    }

    get errorMsg() {
        return $('//div[@role="alert"]'); //locator error message
    }


    async tambahCategori(nama, deskripsi) {
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.klikSimpanAdd.click();
        await this.msgBerhasilTambah.getText();
      }

    async ubahCategori(nama, deskripsi){
        await this.ubahNama.setValue(nama);
        await this.ubahDeskripsi.setValue(deskripsi);
        await this.klikSimpanUbah.click();
    }
    
    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }
    
    async getErrorMessage() {
        return this.errorMsg.getText();
    }
}
