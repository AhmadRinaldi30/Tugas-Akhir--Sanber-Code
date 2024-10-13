const { loginpage } = require("../pages/login.page.js");
const { page } = require("../pages/page")
// const dashboard = require("../pages/dashboard.page");
// const { expect, $ } = require('@wdio/globals');
const { Given, When, Then } = require("@wdio/cucumber-framework");

//  scenario 1
Given(/^I open Kasir aja Website$/, async() =>{
    await page.open('https://kasirdemo.vercel.app/');
    await browser.pause(20000);
});

When(/^I Login with valid credentials$/, async() =>{
    await loginpage.login('hidayah33@gmail.com', 'password');
});

Then(/^I should be on the dashboard page$/, async() =>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
});

//Scenario 2

Given(/^I open Kasir aja Website$/, async() => {
    await page.open('https://kasirdemo.vercel.app/');
    await browser.pause(2000);
})

When (/^I login with invalid username$/, async() =>{
    await loginpage.login('invalid_user', 'password');
})

Then (/^I should see an error message$/, async() =>{
    await loginpage.assertErrorMessage('Kredensial yang Anda berikan salah');
})

//Scenario 3

Given(/^I open Kasir aja Website$/, async() => {
    page.open('https://kasirdemo.vercel.app/');
    await browser.pause(2000);
})

When (/^I login with invalid password$/, async() =>{
    await loginpage.login('hidayah33@gmail.com', 'invalid_password');
})

Then (/^I should see an error message$/, async() =>{
    await loginpage.assertErrorMessage('Kredensial yang Anda berikan salah');
})