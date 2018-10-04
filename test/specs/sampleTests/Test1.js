var should = require('chai').should();
var HomePage = require('./../common/elements/commonelements');
var maxWaitForMS = 50000;

describe('login form', function () {
    it('should deny access with wrong creds', function () {
        browser.url('/');
        var title = browser.getText(HomePage.title.selector);
        console.log("Title: "+title);
        title.should.be.equal("World Class Directory and Map Builder");
        browser.click(HomePage.demo.selector);
        browser.waitForVisible(HomePage.demotext.selector,maxWaitForMS);
    });
});