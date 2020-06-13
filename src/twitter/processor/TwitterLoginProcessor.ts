import { PathUtils } from "../../util/PathUtils";
require('dotenv').config();

export class TwitterLoginProcessor{

    public static async login(page: any){
        const screenshot = 'twitter-login.png';
        const url = 'https://twitter.com';
        await (async () => {
            await page.goto('https://twitter.com/login');
            await page.type('input[name="session[username_or_email]"]', process.env.user);
            await page.type('input[name="session[password]"]', process.env.password);
            await page.click('div[data-testid="LoginForm_Login_Button"]');
            await page.waitForNavigation()
            await page.screenshot({ path: PathUtils.getFilePath(screenshot) })
            console.log('See screenshot: ' + screenshot)
        })()

        debugger;

        return page;
    }
}