import {Book} from "./Book";

export class GetBookControllerResponse {
    constructor( public readonly id: string, public readonly name: string, public readonly length: number) {}
}