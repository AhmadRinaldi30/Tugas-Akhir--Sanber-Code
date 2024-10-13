const { Given, When, Then } = require("@wdio/cucumber-framework");
const { daftarpage } = require("../pages/daftar.page");
const { expect, $ } = require('@wdio/globals')


// scenario 1
Given(/^I open Kasir aja Website daftar page$/, async()=>{
    await daftarpage.open();
    await browser.pause(2000);
})

When(/^I daftar with valid format$/, async()=>{
    await daftarpage.daftar('Nama Toko baru', 'tokobaru@gmail.com', 'tokobaru');
})

Then(/^I should be on the Login page$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
})

//scenario 2
Given(/^I open Kasir aja Website daftar page$/, async()=>{
    await daftarpage.open();
    await browser.pause(2000);
})

When(/^I daftar with empty name$/, async()=>{
    await daftarpage.daftar('', 'tokobaru@gmail.com', 'tokobaru');
})

When(/^I daftar with empty email$/, async()=>{
    await daftarpage.daftar('Nama Toko baru', '', 'tokobaru');
})

When(/^I daftar with empty password$/, async()=>{
    await daftarpage.daftar('Nama Toko baru', 'tokobaru@gmail.com', '');
})

Then(/^I should see an error message$/,async()=>{
    await daftarpage.assertErrorMessage('"name" is not allowed to be empty')
    await daftarpage.assertErrorMessage('"email" is not allowed to be empty')
    await daftarpage.assertErrorMessage('"password" is not allowed to be empty')
})

//scenario 3

Given(/^I open Kasir aja Website daftar page$/, async()=>{
    await daftarpage.open();
    await browser.pause(2000);
})

When(/^I daftar with email invalid format$/, async()=>{
    await daftarpage.daftar('Nama Toko baru 1', 'tokobaru1', 'tokobaru');
})

Then(/^I should see an error message$/,async()=>{
    await daftarpage.assertErrorMessage('"email" must be a valid email')
})