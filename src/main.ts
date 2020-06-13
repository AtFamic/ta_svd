import { ChatworkUtils } from "./util/chatworkUtils"
import { TwitterAdAutomation } from "./chatwork/enums/TwitterAdAutomation";
require('dotenv').config();

/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')

let msg = 'this is a test message from main.ts';

ChatworkUtils.sendMesages(new TwitterAdAutomation(), msg);
