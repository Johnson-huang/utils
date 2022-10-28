import isFloat from '../src/modules/validate/isFloat'

describe('测试 isFloat.ts', () => {
    it('字符串，大于0整数', () => {
        expect(isFloat('1')).toBe(false);
    });

    it('数字，大于0整数', () => {
        expect(isFloat(1)).toBe(false);
    });

    it('字符串，大于0浮点数', () => {
        expect(isFloat('1.1')).toBe(true);
    });

    it('数字，大于0浮点数', () => {
        expect(isFloat(1.1)).toBe(true);
    });

    it('字符串，0', () => {
        expect(isFloat('0')).toBe(false);
    });

    it('数字，0', () => {
        expect(isFloat(0)).toBe(false);
    });

    it('字符串，0.00', () => {
        expect(isFloat('0.00')).toBe(true);
    });

    it('字符串，小于0整数', () => {
        expect(isFloat('-1')).toBe(false);
    });

    it('数字，小于0整数', () => {
        expect(isFloat(-1)).toBe(false);
    });

    it('字符串，小于0浮点数', () => {
        expect(isFloat('-1.1')).toBe(true);
    });

    it('数字，小于0浮点数', () => {
        expect(isFloat(-1.1)).toBe(true);
    });
})
