import { PathUtils } from "../../util/PathUtils";
import { CollegeBase } from "../enums/CollegeBase";

export class TwitterChangeAccounts {

    public static async changeAccount(page: any, account: CollegeBase) {
        const name = account.getName();
        const id = account.getId();
        const screenshot = `twitter-changeAccount-${name}.png`;
        await Promise.all([
            page.waitForNavigation({ waitUntil: ['load', 'networkidle2'], timeout: 60000 }),
            page.click(`img[title="${id}"]`)
        ]);
        await page.screenshot({ path: PathUtils.getFilePath(screenshot), fullPage: true });
        console.log('See screenshot: ' + screenshot)
        return page;
    }
}