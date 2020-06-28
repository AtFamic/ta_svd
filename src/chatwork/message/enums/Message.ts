export class Message {

    /** \n */
    public static CRLF: string = '\n';

    /** (multibyte SPACE) */
    public static SPACE: string = '　';

    /** ツイッター広告のステータス更新を行います。 */
    public static processStartMessage: string = 'ツイッター広告のステータス更新を行います。';

    /** ツイッター広告ステータスを\'配信中\'に変更します。 */
    public static turnStatusOn: string = 'ツイッター広告ステータスを\'配信中\'に変更します。';

    /** ツイッター広告ステータスを\'配信停止\'に変更します。 */
    public static turnStatusOff: string = 'ツイッター広告ステータスを\'配信停止\'に変更します。';

    /** プログラム実行中 */
    public static loadingStatus: string = 'プログラム実行中';

    /** プログラム実行完了 */
    public static endStatus: string = 'プログラム実行完了';

    /** === 実行内容 === */
    public static label: string = '=== 実行内容 ===';

    /** ステータス： */
    public static status: string = 'ステータス：';

    /** 実行待ち */
    public static waitForWorking: string = '実行待ち';

    /** 実行完了 */
    public static sccessWorking: string = '実行完了';

    /** 実行失敗 */
    public static failWorking: string = '実行失敗';

    private numberOfDots: number = 0;

    /** loading... */
    public getLoading(): string {
        this.numberOfDots = isNaN(this.numberOfDots) ? 0 : this.numberOfDots;
        const numberOfDotsForStr: number = 3; // change loading... to load
        const loading: string = 'loading';
        const dot: string = '.';
        let result = '';
        result = loading + dot.repeat(this.numberOfDots % (numberOfDotsForStr + 1));
        this.numberOfDots++;
        return result;
    }

}