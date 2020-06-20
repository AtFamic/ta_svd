import { PathUtils } from "../../util/PathUtils";
import { CollegeBase } from "../enums/CollegeBase";
import { TwitterAdStatus } from "../enums/TwitterAdStatus";

export class TwitterChangeStatus {

    public static async changeStatus(page: any, college: CollegeBase, status: TwitterAdStatus) {
        let targetTag: string = '';
        if (status.getStatus() === 'ON') {
            targetTag = 'div[aria-checked="false"]';
        } else if (status.getStatus() === 'OFF') {
            targetTag = 'div.is-checked';
        }
        const screenshot = `twitter-changeStatus-${college.getName()}.png`;
        const handles = await page.$$(`${targetTag}`);
        console.log(`targetTag is ${targetTag} and handles are ${handles}`);
        let counter: number = 0;
        for (const handle of handles) {
            await handle.click();
            console.log('this is a click of #' + ++counter);
        }
        // get handles again because '進学・キャリア情報' has so many accounts
        if (college.getName() === '進学・キャリア情報') {
            let loop: number = 0
            while (true) {
                loop++;
                console.log('進学・キャリア loop is :' + loop);
                await page.waitFor(15000);
                const handles = await page.$$(`${targetTag}`);
                for (const handle of handles) {
                    await handle.click();
                    console.log('this is a click of #' + ++counter);
                }
                if (await page.$(`${targetTag}`) == null) {
                    console.log('there is no handles found');
                    break;
                }
            }
        }
        await page.screenshot({ path: PathUtils.getFilePath(screenshot), fullPage: true });
        console.log('See screenshot: ' + screenshot);
        return page;
    }
}