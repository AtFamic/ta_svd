export class PathUtils{
    static filePath: string = './resource/';

    public static getFilePath(fileName: string): string{
        return this.filePath + fileName;
    }
}
