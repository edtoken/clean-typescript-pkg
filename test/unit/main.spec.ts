import Methods from "../../src/main";

describe("Methods test", () => {
    it('should return correct value methodA', () => {
        expect(new Methods('id-1').methodA()).toEqual('id-1-methodA-response');
    });
    it('should return correct value methodB with argument', () => {
        expect(new Methods('id-2').methodB('value')).toEqual('id-2-methodB-value-response');
    });
    it('should return correct env value methodC', () => {
        expect(new Methods('id-3').methodC()).toEqual('CUSTOM_ENV_VARIABLE');
    });
});
