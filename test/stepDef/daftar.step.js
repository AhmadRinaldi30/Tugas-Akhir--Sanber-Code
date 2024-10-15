const { Given, When, Then } = require("@wdio/cucumber-framework");
const daftarPage  = require("../pages/daftar.page.js");
const { expect, $, browser } = require('@wdio/globals')
const Page = require("../pages/page");



//scenario 3

Given(/^I open Kasir aja Website daftar page$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await browser.pause(5000);
})

When(/^I daftar with email invalid format$/, async()=>{
    await daftarPage.daftar('Nama Toko baru 1', 'tokobaru1', 'tokobaru');
    await browser.pause(5000);
})

Then(/^I should see an error message$/,async()=>{
    await daftarPage.assertErrorMessage('"email" must be a valid email')
    await browser.pause(10000);
})


//scenario 2
Given(/^I open Kasir aja Website daftar page 2$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await browser.pause(10000);
})

When(/^I daftar with empty name$/, async()=>{
    await daftarPage.daftar('', 'tokobaru@gmail.com', 'tokobaru');
    await browser.pause(10000);
})

When(/^I daftar with empty email$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await daftarPage.daftar('Nama Toko baru', '', 'tokobaru');
    await browser.pause(10000);
})

When(/^I daftar with empty password$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await daftarPage.daftar('Nama Toko baru', 'tokobaru@gmail.com', '');
    await browser.pause(10000);
})

Then(/^I should see an error message$/,async()=>{
    await daftarPage.assertErrorMessage('"name" is not allowed to be empty')
    await daftarPage.assertErrorMessage('"email" is not allowed to be empty')
    await daftarPage.assertErrorMessage('"password" is not allowed to be empty')
    await browser.pause(20000);
})

// scenario 1
Given(/^I open Kasir aja Website daftar page 3$/, async()=>{
    await Page.open('https://kasirdemo.vercel.app/register');
    await browser.pause(5000);
})

When(/^I daftar with valid format$/, async()=>{
    await daftarPage.daftar('Nama Toko baru 1', 'tokobaru1@gmail.com', 'tokobaru');
    await browser.pause(5000);
})

Then(/^I should be on the Login page$/,async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
    await browser.pause(10000);
})