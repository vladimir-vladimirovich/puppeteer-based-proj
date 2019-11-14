const loginWidgetLoc = require('./loginWidgetLoc');
const headerLoc = require('./headerLoc');
const logoutPopupLoc = require('./popups/logoutPopupLoc');

class Locators {
    constructor() {
        this.loginWidget = loginWidgetLoc;
        this.header = headerLoc;
        this.logoutPopup = logoutPopupLoc;
    }
}

module.exports = new Locators();