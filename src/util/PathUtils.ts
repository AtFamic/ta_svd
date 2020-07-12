export class PathUtils {
    static filePath: string = './resource/';

    static pdf_filePath: string = './resource/pdf/';

    static report_filePath: string = './resource/pdf/report/'

    public static getFilePath(fileName: string): string {
        return this.filePath + fileName;
    }

    public static getPDFFilePath(fileName: string): string {
        return this.pdf_filePath + fileName;
    }

    public static getReportFilePath(fileName: string): string {
        return this.report_filePath + fileName;
    }
}
