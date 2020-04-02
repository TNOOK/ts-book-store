import {InvalidArgumentError} from "../../Shared/Domain/ValueObject/InvalidArgumentException";

export class BookLength {
    private readonly _value: number;

    constructor(value: number) {
        this.ensureIsValidValue(value);
        this._value = value;
    }

    private ensureIsValidValue(value: number): void {
        if (typeof value !== 'number') {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
        }
    }
    get value(): number {
        return this._value;
    }
}