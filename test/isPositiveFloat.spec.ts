import isPositiveFloat from '../src/modules/validate/isPositiveFloat'

describe('测试 isPositiveFloat.ts', () => {
    it('字符串，大于0整数', () => {
        expect(isPositiveFloat('1')).toBe(false);
    });

    it('数字，大于0整数', () => {
        expect(isPositiveFloat(1)).toBe(false);
    });

    it('字符串，大于0浮点数', () => {
        expect(isPositiveFloat('1.1')).toBe(true);
    });

    it('数字，大于0浮点数', () => {
        expect(isPositiveFloat(1.1)).toBe(true);
    });

    it('字符串，0', () => {
        expect(isPositiveFloat('0')).toBe(false);
    });

    it('数字，0', () => {
        expect(isPositiveFloat(0)).toBe(false);
    });

    it('字符串，小于0整数', () => {
        expect(isPositiveFloat('-1')).toBe(false);
    });

    it('数字，小于0整数', () => {
        expect(isPositiveFloat(-1)).toBe(false);
    });

    it('字符串，小于0浮点数', () => {
        expect(isPositiveFloat('-1.1')).toBe(false);
    });

    it('数字，小于0浮点数', () => {
        expect(isPositiveFloat(-1.1)).toBe(false);
    });
})
