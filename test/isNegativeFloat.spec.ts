import isNegativeFloat from '../src/modules/validate/isNegativeFloat'

describe('测试 isNegativeFloat.ts', () => {
    it('非数字', () => {
        expect(isNegativeFloat('abc')).toBe(false)
    })

    it('字符串，大于0整数', () => {
        expect(isNegativeFloat('1')).toBe(false)
    })

    it('数字，大于0整数', () => {
        expect(isNegativeFloat(1)).toBe(false)
    })

    it('字符串，大于0浮点数', () => {
        expect(isNegativeFloat('1.1')).toBe(false)
    })

    it('数字，大于0浮点数', () => {
        expect(isNegativeFloat(1.1)).toBe(false)
    })

    it('字符串，0', () => {
        expect(isNegativeFloat('0')).toBe(false)
    })

    it('数字，0', () => {
        expect(isNegativeFloat(0)).toBe(false)
    })

    it('字符串，小于0整数', () => {
        expect(isNegativeFloat('-1')).toBe(false)
    })

    it('数字，小于0整数', () => {
        expect(isNegativeFloat(-1)).toBe(false)
    })

    it('字符串，小于0浮点数', () => {
        expect(isNegativeFloat('-1.1')).toBe(true)
    })

    it('数字，小于0浮点数', () => {
        expect(isNegativeFloat(-1.1)).toBe(true)
    })
})
