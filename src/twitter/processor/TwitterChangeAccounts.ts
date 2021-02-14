import { PathUtils } from "../../util/PathUtils";
import { CollegeBase } from "../enums/CollegeBase";

export class TwitterChangeAccounts {

    public static async changeAccount(page: any, account: CollegeBase) {
        const name = account.getName();
        const select_num = account.getSelectNum();
        const screenshot = `twitter-changeAccount-${name}.png`;
        await page.waitFor(5000);
        await Promise.all([
            this.selectAccout(page, account),
            page.click(`div[class="PageFooter-endContent"] > button`)
        ]);
        await page.screenshot({ path: PathUtils.getFilePath(screenshot), fullPage: true });
        console.log('See screenshot: ' + screenshot)
        return page;
    }

    private static async selectAccout(page: any, account: CollegeBase) {
        const targets: any = await page.$$('div[class="Tile"]');
        await targets[account.getSelectNum()].click();
    }
}