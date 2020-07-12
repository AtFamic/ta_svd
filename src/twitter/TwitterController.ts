import { TwitterLoginProcessor } from "./processor/TwitterLoginProcessor";
import { TwitterGoToAdPage } from "./processor/TwitterGoToAdPage";
import { TwitterGetAccounts } from "./processor/TwitterGetAccounts";
import { CollegeBase } from "./enums/CollegeBase";
import { TwitterChangeAccounts } from "./processor/TwitterChangeAccounts";
import { TwitterChangeStatus } from "./processor/TwitterChangeStatus";
import { TwitterAdStatus } from "./enums/TwitterAdStatus";
import { TwitterCheckProcesses } from "./processor/TwitterCheckProcesses";

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

    public async goToAdPage() {
        this.page = await TwitterGoToAdPage.goToAdPage(this.page);
    }

    public getAccounts(): CollegeBase[] {
        return TwitterGetAccounts.getAccounts();
    }

    public async changeAccount(account: CollegeBase) {
        this.page = await TwitterChangeAccounts.changeAccount(this.page, account);
    }

    public async changeStatus(account: CollegeBase, status: TwitterAdStatus) {
        this.page = await TwitterChangeStatus.changeStatus(this.page, account, status);
    }

    public async initiateProcess(accounts: CollegeBase[]) {
        await TwitterCheckProcesses.initiate(accounts);
    }

    public async updateProcess(account: CollegeBase) {
        await TwitterCheckProcesses.update(account);
    }

    public checkProcess() {
        return TwitterCheckProcesses.checkProcesses();
    }

    public checkFinished(accounts: CollegeBase[]) {
        TwitterCheckProcesses.checkFinished(accounts);
    }

    public isFinished(): boolean{
        return TwitterCheckProcesses.finished();
    }
}
