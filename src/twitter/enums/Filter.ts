export class Filter {
    /** 「＋フィルターを追加」のId */
    public static addFilterId: string = 'button[data-test-id="AddFilterDropdownButton"]';
    /** 「＋フィルターを追加」の「ステータス」のId */
    public static filterStatusId: string = 'div[data-test-id="AddFilterDropdown"] > ul > li:nth-child(2)';
    /** 「ステータス：すべて」のId */
    public static statusAll: string = 'span[data-test-id="Filter"]:nth-child(2)';
    /** 「＋フィルターを追加」の「実行中」のId */
    public static filterWorkingStatusId: string = 'div[data-test-id="FilterOperand"] > ul > li:nth-child(1)';
    /** 「＋フィルターを追加」の「適用する」のId */
    public static applyFilterId: string = 'div[data-test-id="FilterOperand"] > ul > div';
}