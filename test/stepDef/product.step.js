const { Given, When, Then } = require("@wdio/cucumber-framework");
const  productpage = require("../pages/product.page");
const { expect, $ } = require('@wdio/globals');
const  loginpage = require('../pages/login.page');
const { Page } = require("../pages/page");


// scenario 1
Given(/^I open Kasir aja Website product page$/, async()=>{
    await browser.url('https://kasirdemo.vercel.app/');
    await loginpage.login('hidayah33@gmail.com', 'password')
    await browser.pause(2000);
})

When(/^I add product with valid format$/, async()=>{
    await productpage.tambahProduct('Categori testing 1', 'makanan berat');
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products');
    await productpage.assertPassedMessageAdd('item ditambahkan')
})



//scenario 2
Given(/^I open Kasir aja Website edit product page$/, async()=>{
    await browser.url('https://kasirdemo.vercel.app/');
    await loginpage.login('hidayah33@gmail.com', 'password')
    await browser.pause(2000);
})

When(/^I edit product with valid format$/, async()=>{
    await productpage.ubahProduct('Categori testing ubah', 'makanan ubah');
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products');
    await productpage.assertPassedMessageUbah('item diubah')
})


//scenario 3

Given(/^I open Kasir aja Website hapus product page$/, async()=>{
    await browser.url('https://kasirdemo.vercel.app/');
    await loginpage.login('hidayah33@gmail.com', 'password')
    await browser.pause(2000);
})

When(/^I hapus product with valid format$/, async()=>{
    await productpage.deleteProduct();
})

Then(/^I should see an passed message$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products');
    await productpage.assertPassedMessageDel('item dihapus')
})