const loginPage = require("../pages/login.page.js");
const Page = require("../pages/page")
// const dashboard = require("../pages/dashboard.page");
const { expect, $ } = require('@wdio/globals');
const { Given, When, Then } = require("@wdio/cucumber-framework");

//Scenario 3

Given(/^I open Kasir aja Website$/, async() => {
    await Page.open('https://kasirdemo.vercel.app/');
    await browser.pause(5000);
})

When (/^I login with invalid password$/, async() =>{
    await loginPage.login('hidayah33@gmail.com', 'invalid_password');
    await browser.pause(5000);
})

Then (/^I should see an error message$/, async() =>{
    // await loginPage.alert();
    // await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    await browser.pause(20000);
})

//Scenario 2

Given(/^I open Kasir aja Website login 2$/, async() => {
    
    await Page.open('https://kasirdemo.vercel.app/');
    await browser.pause(5000);
})

When (/^I login with invalid username$/, async() =>{
    await loginPage.login('invalid_user', 'password');
    await browser.pause(5000);
})

Then (/^I should see an error message$/, async() =>{
    // await loginPage.alert();
    // await loginPage.assertErrorMessage('"email" must be a valid email');
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
    await browser.pause(20000);
})


//  scenario 1
Given(/^I open Kasir aja Website Login 3$/, async() =>{
    await Page.open('https://kasirdemo.vercel.app/');
    await browser.pause(20000);
});

When(/^I Login with valid credentials$/, async() =>{
    await loginPage.login('hidayah33@gmail.com', 'password');
    await browser.pause(20000);
});

Then(/^I should be on the dashboard page$/, async() =>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
    await browser.pause(20000);
});