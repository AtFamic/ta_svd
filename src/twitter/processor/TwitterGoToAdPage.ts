import { PathUtils } from "../../util/PathUtils";

export class TwitterGoToAdPage {

    public static async goToAdPage(page: any) {
        const screenshot = 'twitter-goToAdPage.png';
        const url = "https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb";
        await (async () => {
            await page.goto('https://ads.twitter.com/account_select');
            await page.screenshot({ path: PathUtils.getFilePath(screenshot) })
            console.log('See screenshot: ' + screenshot)
        })()
        return page;
    }
}