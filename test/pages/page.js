const { browser } = require('@wdio/globals')
module.exports = class Page {
    open (pathhh) {
        return browser.url(pathhh)
    }
}



