const pageLinks = require('../src/data/pageLinks');
const Tab = require('../src/core/tab');
const LoginWidget = require('../src/ui/loginWidget');

describe('Make spins history', () => {
    // const tab;

    // beforeAll(async () => {
    // await Browser.navigate(pageLinks.STG.home);
    // const page = await browser.newPage();
    // await page.goto(pageLinks.STG.home);
    // });

    test('Log in', async () => {
        function delay(time) {
            return new Promise(function (resolve) {
                setTimeout(resolve, time)
            });
        }
        const tab = await Tab.open();
        await tab.goto(pageLinks.STG.home);

        const loginWidget = new LoginWidget(tab);
        await loginWidget.setUsername('test.idv1@playtech.com');

        await delay(10000);
    }, 60000);
});