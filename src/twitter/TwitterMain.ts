import { TwitterController } from "./twitterController";

export class TwitterMain {

    twitterController = new TwitterController;

    public async process() {
        await this.twitterController.launchBrowser();
        await this.twitterController.login();
        await this.twitterController.closeBrowser();
    }
}