
class DaftarPage{

    get inputNamaToko(){
        return $('#name'); //locator input Nama Toko
    }

    get inputEmailDaftar(){
        return $('#email'); //locator input email
    }

    get inputPasswordDaftar(){
        return $('#password'); //locator input Password
    }

    get loginButton() {
    return $('//button[@type="submit"]'); //locator login button
    }

    get errorMsg() {
        return $('//div[@role="alert"]'); //locator error message
    }

    async daftar(nama,email,password){
        (await this.inputNamaToko).setValue(nama);
        (await this.inputEmailDaftar).setValue(email);
        (await this.inputPasswordDaftar).setValue(password);
    }


    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
      }
    
    async getErrorMessage() {
        return this.errorMsg.getText();
    }

} 

module.exports = new DaftarPage();