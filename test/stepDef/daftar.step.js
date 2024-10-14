const { Given, When, Then } = require("@wdio/cucumber-framework");
const { DaftarPage } = require("../pages/daftar.page.js");
const { expect, $, browser } = require('@wdio/globals')
const Page = require("../pages/page")


//scenario 3

Given(/^I open Kasir aja Website daftar page$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await browser.pause(5000);
})

When(/^I daftar with email invalid format$/, async()=>{
    await DaftarPage.daftar('Nama Toko baru 1', 'tokobaru1', 'tokobaru');
    await browser.pause(5000);
})

Then(/^I should see an error message$/,async()=>{
    await DaftarPage.assertErrorMessage('"email" must be a valid email')
    await browser.pause(5000);
})


// //scenario 2
// Given(/^I open Kasir aja Website daftar page$/, async()=>{
//     await browser.pause(5000);
// })

// When(/^I daftar with empty name$/, async()=>{
//     await DaftarPage.daftar('', 'tokobaru@gmail.com', 'tokobaru');
//     await browser.pause(5000);
// })

// When(/^I daftar with empty email$/, async()=>{
//     await DaftarPage.daftar('Nama Toko baru', '', 'tokobaru');
//     await browser.pause(5000);
// })

// When(/^I daftar with empty password$/, async()=>{
//     await DaftarPage.daftar('Nama Toko baru', 'tokobaru@gmail.com', '');
//     await browser.pause(5000);
// })

// Then(/^I should see an error message$/,async()=>{
//     await DaftarPage.assertErrorMessage('"name" is not allowed to be empty')
//     await DaftarPage.assertErrorMessage('"email" is not allowed to be empty')
//     await DaftarPage.assertErrorMessage('"password" is not allowed to be empty')
//     await browser.pause(10000);
// })




// // scenario 1
// Given(/^I open Kasir aja Website daftar page$/, async()=>{
//     await browser.pause(2000);
// })

// When(/^I daftar with valid format$/, async()=>{
//     await DaftarPage.daftar('Nama Toko baru', 'tokobaru@gmail.com', 'tokobaru');
// })

// Then(/^I should be on the Login page$/,async()=>{
//     await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
// })