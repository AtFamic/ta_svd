import { PathUtils } from "./PathUtils";
import { ChatworkUtils } from "./ChatworkUtils";
import { TwitterAdAutomation } from "../chatwork/enums/TwitterAdAutomation";
import { Message } from "../chatwork/message/enums/Message";
import { ChatworkRoomBase } from "../chatwork/enums/ChatworkRoomBase";
import _ from 'lodash';

export class PDFUtils {
    
    /**
     * merge to create pdf by pdf produced during working 
     * @param room room to notify fail to create PDF
     */
    public static pdfMerge(room: ChatworkRoomBase) {
        const merge = require('easy-pdf-merge');
        const fs = require('fs');
        let source_files: string[] = fs.readdirSync(PathUtils.getPDFFilePath(''));
        source_files = _.filter(source_files, function (string) { // remove 'report'(folder including target pdf)
            return string !== 'report';
        });
        for (let i = 0; i < source_files.length; i++) {
            source_files[i] = PathUtils.getPDFFilePath(source_files[i]);
        }
        merge(source_files, PathUtils.getReportFilePath('実行結果レポート.pdf'), function (err: any) {
            if (err) {
                ChatworkUtils.sendMesages(room, Message.failToCreatePDF);
                return console.log(err)
            }
            console.log('実行結果レポートの出力に成功しました。')
        });

    }
}
