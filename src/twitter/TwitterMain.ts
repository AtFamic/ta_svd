import { TwitterController } from "./TwitterController";
import { CollegeBase } from "./enums/CollegeBase";
import { TwitterAdStatus } from "./enums/TwitterAdStatus";
import { PathUtils } from "../util/PathUtils";
import _ from 'lodash';
import { ChatworkUtils } from "../util/ChatworkUtils";
import { TwitterAdAutomation } from "../chatwork/enums/TwitterAdAutomation";
import { Message } from "../chatwork/message/enums/Message";
import { PDFUtils } from "../util/PDFUtils";

export class TwitterMain {

    twitterController = new TwitterController;

    public async process(twitterStatus: TwitterAdStatus) {
        await this.twitterController.launchBrowser();
        await this.twitterController.login();
        let accounts: CollegeBase[] = this.twitterController.getAccounts();
        await this.twitterController.initiateProcess(accounts);
        for (let i = 0; i < accounts.length; i++) {
            await this.twitterController.goToAdPage();
            await this.twitterController.changeAccount(accounts[i]);
            await this.twitterController.changeStatus(accounts[i], twitterStatus).then(() => {
                accounts[i].success();
            }).catch(() => {
                accounts[i].fail();
            });
            await this.twitterController.updateProcess(accounts[i]);
            await this.twitterController.checkFinished(accounts);
        }
        PDFUtils.pdfMerge(new TwitterAdAutomation);
        ChatworkUtils.sendFile(new TwitterAdAutomation, Message.successToCreatePDF, '実行結果レポート.pdf');
        await this.twitterController.closeBrowser();
    }

}