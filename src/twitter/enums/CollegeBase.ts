export class CollegeBase {
    protected name: string;
    protected id: string;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id; // identify by <img title>
    }

    public getName(): string {
        return this.name;
    }

    public getId(): string {
        return this.id;
    }
}