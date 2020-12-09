import { TwitterAdStatus } from "./TwitterAdStatus";

export class Filter {
    /** 「＋フィルターを追加」のId */
    private static addFilterId: string = 'button[data-test-id="AddFilterDropdownButton"]';
    /** 「＋フィルターを追加」の「ステータス」のId */
    private static filterStatusId: string = 'div[data-test-id="AddFilterDropdown"] > ul > li:nth-child(2)';
    /** 「ステータス：すべて」のId */
    private static statusAll: string = 'span[data-test-id="Filter"]:nth-child(2)';
    /** 「＋フィルターを追加」の「停止中」のId */
    private static filterStoppingStatusId_ON: string = 'div[data-test-id="FilterOperand"] > ul > li:nth-child(3)';
    /** 「＋フィルターを追加」の「実行中」のId */
    private static filterWorkingStatusId_OFF: string = 'div[data-test-id="FilterOperand"] > ul > li:nth-child(1)';
    /** 「＋フィルターを追加」の「適用する」のId */
    private static applyFilterId: string = 'div[data-test-id="FilterOperand"] > ul > div';

    public static getAddFilterId(): string {
        return Filter.addFilterId;
    }
    public static getFilterStatusId(): string {
        return Filter.filterStatusId;
    }
    public static getStatusAll(): string {
        return Filter.statusAll;
    }
    public static getFilterWorkingStatusId(twitterAdStatus: TwitterAdStatus): string {
        if (twitterAdStatus.getStatus() === 'ON') {
            return Filter.filterStoppingStatusId_ON;
        }
        return Filter.filterWorkingStatusId_OFF;
    }
    public static getApplyFilterId(): string {
        return Filter.applyFilterId;
    }
}