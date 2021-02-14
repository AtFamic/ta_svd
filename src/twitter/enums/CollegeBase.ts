import { Filter } from "./Filter";

type processStatus = 'WAITING' | 'SUCCESS' | 'FAIL';

export class CollegeBase {
    protected name: string;
    protected id: string;
    protected processStatus: processStatus;
    protected needsFilter: boolean;
    protected select_num: number;

    constructor(name: string, id: string, select_num: number, needsFilter: boolean = false) {
        this.name = name;
        this.id = id; // identify by <img title>
        this.processStatus = 'WAITING'; // true when this account is completed
        this.needsFilter = needsFilter;
        this.select_num = select_num;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): string {
        return this.id;
    }

    public success(): void {
        this.processStatus = 'SUCCESS';
    }

    public fail(): void {
        this.processStatus = 'FAIL';
    }

    public getStatus(): processStatus {
        return this.processStatus;
    }

    public getFilter(): boolean {
        return this.needsFilter;
    }

    public getSelectNum(): number {
        return this.select_num;
    }
}