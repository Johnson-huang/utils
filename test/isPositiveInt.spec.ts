import isPositiveInt from '../src/modules/validate/isPositiveInt'

describe('测试 isPositiveInt.ts', () => {
    it('非数字', () => {
        expect(isPositiveInt('abc')).toBe(false)
    })

    it('字符串，大于0整数', () => {
        expect(isPositiveInt('1')).toBe(true)
    })

    it('数字，大于0整数', () => {
        expect(isPositiveInt(1)).toBe(true)
    })

    it('字符串，大于0浮点数', () => {
        expect(isPositiveInt('1.1')).toBe(false)
    })

    it('数字，大于0浮点数', () => {
        expect(isPositiveInt(1.1)).toBe(false)
    })

    it('字符串，0', () => {
        expect(isPositiveInt('0')).toBe(false)
    })

    it('数字，0', () => {
        expect(isPositiveInt(0)).toBe(false)
    })

    it('字符串，小于0整数', () => {
        expect(isPositiveInt('-1')).toBe(false)
    })

    it('数字，小于0整数', () => {
        expect(isPositiveInt(-1)).toBe(false)
    })

    it('字符串，小于0浮点数', () => {
        expect(isPositiveInt('-1.1')).toBe(false)
    })

    it('数字，小于0浮点数', () => {
        expect(isPositiveInt(-1.1)).toBe(false)
    })
})
