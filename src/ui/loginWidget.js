const locators = require('../data/locators/locators');

class LoginWidget {
    constructor(tab) {
        this.tab = tab;
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getLoginWidgetContainer() {
        return this.tab.getInstance(locators.loginWidget.container);
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getUsernameInput() {
        let container = await this.getLoginWidgetContainer();
        return container.findElement(locators.loginWidget.usernameInput);
    }

    /**
     * @param {String} value 
     */
    async setUsername(value) {
        let usernameInput = await this.getUsernameInput();
        await usernameInput.type(value);
    }
}

module.exports = LoginWidget;