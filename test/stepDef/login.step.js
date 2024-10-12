const { loginpage } = require("../pages/login.page.js");
const { page } = require("../pages/page")
const dashboard = require("../pages/dashboard.page");
const { expect, $ } = require('@wdio/globals');
const { Given } = require("@wdio/cucumber-framework");

//  scenario 1
Given(/^I open Kasir aja Website$/, async() =>{
    await loginpage.open()
    await browser.pause(2000);
});

When(/^I Login with valid credentials$/, async() =>{
    await loginpage.login('hidayah33@gmail.com', 'password');
});

Then(/^I should be on the dashboard page$/, async() =>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
});

//Scenario 2

// Given(/^I open Saucedemo Website$/, async() => {
//     await page.open();
// })

// When (/^I login with invalid username$/, async() =>{
//     await LoginPage.login('invalid_user', 'secret_sauce');
// })

// Then (/^I should see an error message$/, async() =>{
//     await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
// })

// //Scenario 3

// Given(/^ I open Saucedemo Website$/, async() => {
//     await page.open();
// })

// When (/^I login with invalid password$/, async() =>{
//     await LoginPage.login('standard_user', 'invalid_password');
// })

// Then (/^I should see an error message$/, async() =>{
//     await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
// })