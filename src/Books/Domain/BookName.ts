import validate from "uuid-validate";
import {InvalidArgumentError} from "../../Shared/Domain/ValueObject/InvalidArgumentException";

export class BookName {
    private readonly _value: string;

    private constructor(value: string) {
        this.ensureIsValidValue(value);
        this._value = value;
    }

    public static fromString(value: string): BookName {
        return new BookName(value);
    }

    private ensureIsValidValue(value: string): void {
        if (typeof value !== 'string') {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
        }
    }

    get value(): string {
        return this._value;
    }
}