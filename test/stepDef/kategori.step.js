const { Given, When, Then, BeforeStep } = require("@wdio/cucumber-framework");
const  kategori  = require("../pages/kategori.page");
const  Page  = require("../pages/page");
const  loginPage  = require("../pages/login.page");
const { expect, $, browser } = require('@wdio/globals');

// scenario 1
Given(/^I open Kasir aja Website categori page$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/');
    await loginPage.login('hidayah33@gmail.com', 'password')
    await browser.pause(5000);
})

When(/^I add categori with valid format$/, async()=>{
    await kategori.tambahCategori('Categori testing 1', 'makanan berat');
    await browser.pause(5000);
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await kategori.assertPassedMessageAdd('item ditambahkan')
    await browser.pause(10000);
})



//scenario 2
Given(/^I open Kasir aja Website edit categori page$/, async()=>{
    await browser.pause(5000);
})

When(/^I edit categori with valid format$/, async()=>{
    await kategori.ubahCategori('Categori testing ubah', 'makanan ubah');
    await browser.pause(5000);
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await categoripage.assertPassedMessageUbah('item diubah');
    await browser.pause(10000);
})

//scenario 3

Given(/^I open Kasir aja Website hapus categori page$/, async()=>{
    await browser.pause(5000);
})

When(/^I edit categori with valid format$/, async()=>{
    await kategori.deleteCategori();
    await browser.pause(5000);
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await kategori.assertPassedMessageUbah('item dihapus')
    await browser.pause(10000);
})