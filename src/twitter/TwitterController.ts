import { TwitterLoginProcessor } from "./processor/TwitterLoginProcessor";

export class TwitterController {

    private browser: any;
    private page: any;

    public async launchBrowser() {
        const puppeteer = require('puppeteer');
        this.browser = await puppeteer.launch({ headless: true, args: ['--lang=ja'] });
        this.page = await this.browser.newPage();
    }

    public async closeBrowser() {
        this.browser.close();
    }

    public async login() {
        this.page = await TwitterLoginProcessor.login(this.page);
    }

}
