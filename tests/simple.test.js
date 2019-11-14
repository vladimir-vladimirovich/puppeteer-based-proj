const pageLinks = require('../src/data/pageLinks');
const Tab = require('../src/core/tab');
const LoginWidget = require('../src/ui/loginWidget');
const Header = require('../src/ui/header');
const LogoutPopup = require('../src/ui/popups/logoutPopup');

let mainTab;

describe('Make spins history', () => {
    test('Log in', async () => {
        mainTab = await Tab.open();
        await mainTab.goto(pageLinks.STG.home);

        const loginWidget = new LoginWidget(mainTab);
        await loginWidget.setUsername('test.idv1@playtech.com');
        await loginWidget.setPassword('Q1w2e3r4');
        await loginWidget.clickSubmitButton();

        const header = new Header(mainTab);
        await header.clickDesktopLogoutButton();

        const logoutPopup = new LogoutPopup(mainTab);
        await logoutPopup.clickLogoutButton();

        await mainTab.pause(10000);
    }, 300000);

});