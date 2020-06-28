import { TwitterMain } from "./twitter/TwitterMain";
import { TwitterAdAutomation } from "./chatwork/enums/TwitterAdAutomation";
import { Message } from "./chatwork/message/enums/Message";
import { MessageMain } from "./chatwork/message/MessageMain";
import { TwitterAdStatus } from "./twitter/enums/TwitterAdStatus";
import { ChatworkMain } from "./chatwork/ChatworkMain";

// let message = 'test message before updated';
// let response;
// (async () =>{
//     response = await ChatworkUtils.sendMesages(new TwitterAdAutomation, message);
//     console.log(response);
//     message = 'updated message';
//     response = await ChatworkUtils.updateMessages(new TwitterAdAutomation, message, response);
// })();
console.log('before interval');

let twitterMain: TwitterMain = new TwitterMain();
twitterMain.process();
let chatworkmain = new ChatworkMain();
chatworkmain.process(new TwitterAdStatus('ON'));

console.log('after interval');


// (async () => {
//     await twitterMain.process();
// })();
