import { PathUtils } from "../../util/PathUtils";
import { CollegeBase } from "../enums/CollegeBase";
import { TwitterAdStatus } from "../enums/TwitterAdStatus";
import { Filter } from "../enums/Filter";
require('dotenv').config();

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
        // アカウントにFilterが設定されている場合、フィルタを実施
        await this.filterAccounts(page, college, status);
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

    /**
         * 前提：
         * 初期画面表示で以下2つのフィルタが以下の順番で適用されている
         * 1. 目的
         * 2. ステータス
         * 
         * 広告マネージャーにて、以下処理を実施
         * 1. 「＋フィルターを追加」ボタンを押下
         * 2. 「ステータス」を押下(ステータスのキャンセル)
         * 3. 「ステータス」を再度押下
         * 4. 「ステータス：すべて」を押下
         * 5. 「停止中」(ONの場合) or 「実行中」(OFFの場合)を押下
         * 6. 「適用する」を押下
     */
    public static async filterAccounts(page: any, college: CollegeBase, status: TwitterAdStatus) {
        console.log('filter begins');
        if (college.getFilter()) {
            let waitingTime: number = 500;
            await page.waitFor(waitingTime);
            // 1. 「＋フィルターを追加」ボタンを押下
            console.log('1. 「＋フィルターを追加」ボタンを押下');
            await page.click(Filter.getAddFilterId());
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("1.「＋フィルターを追加」ボタンを押下.png"), fullPage: true });
            // 2. 「ステータス」を押下(ステータスのキャンセル)
            console.log('2. 「ステータス」を押下(ステータスのキャンセル');
            await page.click(Filter.getFilterStatusId());
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("2.「ステータス」を押下(ステータスのキャンセル).png"), fullPage: true });
            // 3. 「ステータス」を再度押下
            console.log('3. 「ステータス」を再度押下');
            await page.click(Filter.getFilterStatusId());
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("3.「ステータス」を再度押下.png"), fullPage: true });
            // 4. 「ステータス：すべて」を押下
            console.log('4. 「ステータス：すべて」を押下');
            await page.click(Filter.getStatusAll());
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("4.「ステータス：すべて」を押下.png"), fullPage: true });
            // 5. 「停止中」(ONの場合) or 「実行中」(OFFの場合)を押下
            console.log('5. 「停止中」(ONの場合) or 「実行中」(OFFの場合)を押下');
            await page.click(Filter.getFilterWorkingStatusId(status));
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("5.「実行中」を押下.png"), fullPage: true });
            // 6. 「適用する」を押下
            console.log('6. 「適用する」を押下');
            await page.click(Filter.getApplyFilterId());
            await page.waitFor(waitingTime);
            await page.screenshot({ path: PathUtils.getFilePath("6.「適用する」を押下.png"), fullPage: true });
        }
    }
}