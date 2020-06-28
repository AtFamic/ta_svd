import { TwitterController } from "./TwitterController";
import { CollegeBase } from "./enums/CollegeBase";
import { TwitterAdStatus } from "./enums/TwitterAdStatus";

export class TwitterMain {

    twitterController = new TwitterController;

    public async process() {
        await this.twitterController.launchBrowser();
        await this.twitterController.login();
        let accounts: CollegeBase[] = this.twitterController.getAccounts();
        await this.twitterController.initiateProcess(accounts);
        for (let i = 0; i < accounts.length; i++) {
            await this.twitterController.goToAdPage();
            await this.twitterController.changeAccount(accounts[i]);
            await this.twitterController.changeStatus(accounts[i], new TwitterAdStatus('ON')).then(() => {
                accounts[i].success();
            }).catch(() => {
                accounts[i].fail();
            });
            await this.twitterController.updateProcess(accounts[i]);
        }
        await this.twitterController.closeBrowser();
    }
}