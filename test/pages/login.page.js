// import Page from './page';
// const { $ } = require('@wdio/globals')

class loginPage{
  //Disini didefinisikan locator dari element
  get emailInput() {
    return $('#email'); //locator field email
  }

  get passwordInput() {
    return $('#password'); //locator field password
  }

  get loginButton() {
    return $('//button[@type="submit"]'); //locator login button
  }

  get errorMsg() {
    return $('//div[@role="alert"]'); //locator error message
  }

  async alert(){
    await this.errorMsg.toExist()
  }

  //Disini didefinisikan action yang akan dilakukan kepada element
  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async assertErrorMessage(expectedErrorMessage) {
    await expect(this.errorMsg).toHaveText(expectedErrorMessage);
  }

  async getErrorMessage() {
    return this.errorMsg.getText();
  }
}

module.exports = new loginPage();