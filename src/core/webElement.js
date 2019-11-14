class WebElement {
    constructor(tab, selector, elementHandle) {
        this.tab = tab;
        this.selector = selector;
        this.elementHandle = elementHandle;
    }

    /**
     * Get element instance 
     * @param {PuppeterPage} tab
     * @param {String} selector
     * @param {ElementHandle} elementHandle - puppeteers ElementHandle
     * @param {Number} checkInterval - ms
     * @param {Number} waitTime - ms
     * @returns {Promise<WebElement|null>}
     */
    static async getElement(tab, selector, elementHandle, checkInterval, waitTime) {
        if (!checkInterval) {
            checkInterval = 1000;
        }
        if (!waitTime) {
            waitTime = 15000;
        }
        return new Promise(function (resolve) {
            let endTime = new Date().getTime() + waitTime;
            let element;
            let interval = setInterval(async () => {
                try {
                    if (!elementHandle) {
                        element = await tab.$(selector);
                    } else {
                        element = await elementHandle.$(selector);
                    }
                } catch (error) {
                    console.log(`Error in getInstance: ${error}`);
                }
                if (element) {
                    clearInterval(interval);
                    resolve(new WebElement(tab, selector, element));
                } else if (new Date().getTime() > endTime) {
                    clearInterval(interval);
                    resolve(null);
                }
            }, checkInterval)
        })
    }

    /**
     * Find element inside container 
     * @param {String} selector 
     * @param {Number} checkInterval 
     * @param {Number} waitTime 
     */
    async findElement(selector, checkInterval, waitTime) {
        return WebElement.getElement(this.tab, selector, this.elementHandle, checkInterval, waitTime);
    }

    /**
     * Type value in element
     * @param {String} value 
     */
    async type(value) {
        await this.elementHandle.type(value);
    }

    /**
     * Click
     */
    async click() {
        // console.log('await this.elementHandle.click()');
        // console.log(this.elementHandle);
        await this.elementHandle.click()
    }
}

module.exports = WebElement;

