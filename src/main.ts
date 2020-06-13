import { TwitterMain } from "./twitter/TwitterMain";

let twitterMain = new TwitterMain();

(async () => {
    await twitterMain.process();
})();
