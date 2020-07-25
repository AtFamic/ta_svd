import { TwitterMain } from "./twitter/TwitterMain";
import { TwitterAdAutomation } from "./chatwork/enums/TwitterAdAutomation";
import { Message } from "./chatwork/message/enums/Message";
import { MessageMain } from "./chatwork/message/MessageMain";
import { TwitterAdStatus } from "./twitter/enums/TwitterAdStatus";
import { ChatworkMain } from "./chatwork/ChatworkMain";
import { ChatworkUtils } from "./util/ChatworkUtils";
import { PathUtils } from "./util/PathUtils";

/**
 * main.ts
 * 
 * programing is called following timeschedule
 * 1. change twitter status to 'ON' on 07:00 every day.
 * 2. change twitter status to 'OFF' on 23:00 every day.
 * *please change the code when you want to change the timeschedule.
 */

const cron = require('node-cron');
// 1. change twitter status to 'ON' on 07:00 every day.
cron.schedule('0 0 7 * * *', () => {
    console.log('change twitter status to \'ON\'');
    let twitterMain = new TwitterMain();
    let chatworkMain = new ChatworkMain();
    let twitterAdStatus = new TwitterAdStatus('ON');
    (async () => {
        twitterMain.process(twitterAdStatus);
        chatworkMain.process(twitterAdStatus);
    })();
});
// 2. change twitter status to 'OFF' on 23:00 every day.
cron.schedule('0 0 23 * * *', () => {
    console.log('change twitter status to \'OFF\'');
    let twitterMain = new TwitterMain();
    let chatworkMain = new ChatworkMain();
    let twitterAdStatus = new TwitterAdStatus('OFF');
    (async () => {
        twitterMain.process(twitterAdStatus);
        chatworkMain.process(twitterAdStatus);
    })();
});
