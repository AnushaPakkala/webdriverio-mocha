// login.page.js
var Page = require('./../page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    title: { get: function () { return browser.element('//*[@id="post-2"]/header/h1'); } },
    demo: { get: function () { return browser.element('//nav[@id="topbar-navigation"]//a[@href="https://demo.storelocatorplus.com/"]'); } },
    demotext: { get: function () { return browser.element('//h1[text()="Try The Demo"]'); } },
    flash:    { get: function () { return browser.element('#flash'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = HomePage;