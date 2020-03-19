export class BookId {
    private readonly _uuid: string;

    constructor(uuid: string) {
        this._uuid = uuid;
    }

    get uuid(): string {
        return this._uuid
    }
}