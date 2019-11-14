const WebElement = require('./webElement')

class Tab {
    constructor(page) {
        this.page = page;
    }

    /**
     * Open new tab
     * Crutch due to async functions aren't allowed in constructors 
     * @param {Object} viewport
     * @returns {Promise<Tab>}
     */
    static async open(viewport) {
        if (!viewport) {
            viewport = {
                width: 1280,
                height: 800
            }
        }
        const page = await browser.newPage();
        await page.setViewport(viewport);
        return new Tab(page);
    }

    /**
     * Open url in the same tab 
     * @param {String} url 
     */
    async goto(url) {
        await this.page.goto(url);
    }

    /**
     * Wait for element
     * @param {String} selector 
     * @param {Number} checkInterval - ms
     * @param {Number} waitTime - ms
     * @returns {Promise<WebElement|null>}
     */
    async getInstance(selector, checkInterval, waitTime) {
        return WebElement.getElement(this.page, selector, undefined, checkInterval, waitTime);
    }

    /**
     * Delay
     * @param {Number} time - ms
     */
    async pause(time) {
       return new Promise(resolve => setTimeout(resolve, time)); 
    }
}

module.exports = Tab;