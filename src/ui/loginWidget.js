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
     * @returns {Promise<WebElement>}
     */
    async getSubmitButton() {
        let container = await this.getLoginWidgetContainer();
        return container.findElement(locators.loginWidget.submitButton);
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getPasswordInput() {
        let container = await this.getLoginWidgetContainer();
        return container.findElement(locators.loginWidget.passwordInput);
    }

    /**
     * @param {String} value 
     */
    async setUsername(value) {
        let usernameInput = await this.getUsernameInput();
        await usernameInput.type(value);
    }

    /**
     * @param {String} value 
     */
    async setPassword(value) {
        let passwordInput = await this.getPasswordInput();
        await passwordInput.type(value);
    }

    /**
     * Click
     */
    async clickSubmitButton(value) {
        let submitButton = await this.getSubmitButton();
        await submitButton.click();
    }
}

module.exports = LoginWidget;