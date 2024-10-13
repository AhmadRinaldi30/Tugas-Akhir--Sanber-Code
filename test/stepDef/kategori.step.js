const { Given, When, Then } = require("@wdio/cucumber-framework");
const { categoripage } = require("../pages/kategori.page");
const { expect, $ } = require('@wdio/globals')


// scenario 1
Given(/^I open Kasir aja Website categori page$/, async()=>{
    await categoripage.open();
    await browser.pause(2000);
})

When(/^I add categori with valid format$/, async()=>{
    await categoripage.tambahCategori('Categori testing 1', 'makanan berat');
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await categoripage.assertPassedMessageAdd('item ditambahkan')
})



//scenario 2
Given(/^I open Kasir aja Website edit categori page$/, async()=>{
    await categoripage.open();
    await browser.pause(2000);
})

When(/^I edit categori with valid format$/, async()=>{
    await categoripage.ubahCategori('Categori testing ubah', 'makanan ubah');
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await categoripage.assertPassedMessageUbah('item diubah')
})

//scenario 3

Given(/^I open Kasir aja Website hapus categori page$/, async()=>{
    await categoripage.open();
    await browser.pause(2000);
})

When(/^I daftar with email invalid format$/, async()=>{
    await categoripage.deleteCategori();
})

Then(/^I should see an error message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories');
    await categoripage.assertPassedMessageUbah('item dihapus')
})