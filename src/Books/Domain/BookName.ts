export class BookName {
    private readonly _value: string;

    private constructor(value: string) {
        this._value = value;
    }

    public static fromString(value: string): BookName {
        return new BookName(value);
    }

    get value(): string {
        return this._value;
    }
}