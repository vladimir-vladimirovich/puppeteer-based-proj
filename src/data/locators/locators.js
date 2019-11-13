const loginWidgetLoc = require('./loginWidgetLoc');

class Locators {
    constructor() {
        this.loginWidget = loginWidgetLoc;
    }
}

module.exports = new Locators();