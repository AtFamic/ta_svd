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
        const pdf_name = `twitter-changeStatus-${college.getName()}.pdf`
        let counter: number = 0; // number of clicks
        let loop: number = 0 // number of loops
        // loop until when no more handles are found
        while (true) {
            loop++;
            await page.waitFor(30000);
            const handles = await page.$$(`${targetTag}`);
            console.log(`targetTag is ${targetTag} and handles are ${handles}, and # of loops is ${loop}`);
            for (const handle of handles) {
                await handle.click();
                console.log('this is a click of #' + ++counter);
            }
            if (await page.$(`${targetTag}`).catch(console.log) == null) {
                console.log('there is no handles found');
                break;
            }
        }
        await page.screenshot({ path: PathUtils.getFilePath(screenshot), fullPage: true });
        await page.pdf({ path: PathUtils.getPDFFilePath(pdf_name) })
        console.log('See screenshot: ' + screenshot);
        return page;
    }
}