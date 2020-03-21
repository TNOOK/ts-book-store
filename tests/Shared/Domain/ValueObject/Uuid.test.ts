import {Uuid} from "../../../../src/Shared/Domain/ValueObject/Uuid";

describe('BookLength', () => {
    const mockStringId: string = '4f608969-ec4c-4e66-bf70-3a98fe7d7ca4';
    let uuid: Uuid;
    beforeEach(() => {
        uuid = new Uuid(mockStringId);
    });
    it('should create a valid BookLength', () => {
        expect(uuid).not.toBe(null);
    });
    it('should has specific length', () => {
        expect(uuid.toString()).toBe(mockStringId);
    });
});