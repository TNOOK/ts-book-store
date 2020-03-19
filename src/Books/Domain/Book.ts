import {BookId} from "./BookId";
import {BookName} from "./BookName";
import {BookLength} from "./BookLength";

export class Book {
    private readonly _id: BookId;
    private readonly _name: BookName;
    private readonly _length: BookLength;

    constructor(id: BookId, name: BookName, length: BookLength) {
        this._id = id;
        this._name = name;
        this._length = length;
    }

    get id(): BookId {
        return this._id
    }

    get name(): BookName {
        return this._name;
    }

    get length(): BookLength {
        return this._length;
    }

}