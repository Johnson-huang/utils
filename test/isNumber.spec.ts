import isNumber from '../src/modules/validate/isNumber'

describe('测试 isNumber.ts', () => {
    it('字符串，整数', () => {
        expect(isNumber('1')).toBe(true);
    });

    it('数字，整数', () => {
        expect(isNumber(1)).toBe(true);
    });

    it('字符串，数字+字母', () => {
        expect(isNumber('123abc')).toBe(false);
    });

    it('NaN', () => {
        expect(isNumber(NaN)).toBe(false);
    });

    it('Finite', () => {
        expect(isNumber(Infinity)).toBe(false);
    });

    it('字符串，浮点数', () => {
        expect(isNumber('1.23')).toBe(true);
    });

    it('数字，浮点数', () => {
        expect(isNumber(1.23)).toBe(true);
    });
})
