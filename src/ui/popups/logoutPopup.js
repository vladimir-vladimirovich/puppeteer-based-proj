const BasePopup = require('./basePopup');
const locators = require('../../data/locators/locators');

class LogoutPopup extends BasePopup {
    constructor(tab) {
        super(tab);
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getPopupContainer() {
        return this.tab.getInstance(locators.logoutPopup.container);
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getLogoutButton() {
        let container = await this.getPopupContainer();
        return container.findElement(locators.logoutPopup.logoutButton);
    }

    /**
     * Click
     */
    async clickLogoutButton() {
        let logoutButton = await this.getLogoutButton();
        await logoutButton.click();
    }
}

module.exports = LogoutPopup;