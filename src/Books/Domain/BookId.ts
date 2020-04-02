import {Uuid} from "../../Shared/Domain/ValueObject/Uuid";

export class BookId extends Uuid{
    equals(id: BookId) {
        return this.value === id.value;
    }
}