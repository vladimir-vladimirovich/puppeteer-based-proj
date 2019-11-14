const locators = require('../data/locators/locators')

class Header {
    constructor(tab) {
        this.tab = tab;
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getHeaderContainer() {
        return this.tab.getInstance(locators.header.container);
    }

    /**
     * @returns {Promise<WebElement>}
     */
    async getDesktopLogoutButton() {
        let container = await this.getHeaderContainer();
        return container.findElement(locators.header.logoutButton);
    }

    /**
     * Click
     */
    async clickDesktopLogoutButton() {
        let button = await this.getDesktopLogoutButton();
        await button.click();
    }
}

module.exports = Header;