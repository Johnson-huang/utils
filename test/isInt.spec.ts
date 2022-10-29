import isInt from '../src/modules/validate/isInt'

describe('测试 isInt.ts', () => {
    it('非数字', () => {
        expect(isInt('abc')).toBe(false)
    })

    it('字符串，大于0整数', () => {
        expect(isInt('1')).toBe(true)
    })

    it('数字，大于0整数', () => {
        expect(isInt(1)).toBe(true)
    })

    it('字符串，大于0浮点数', () => {
        expect(isInt('1.1')).toBe(false)
    })

    it('数字，大于0浮点数', () => {
        expect(isInt(1.1)).toBe(false)
    })

    it('字符串，0', () => {
        expect(isInt('0')).toBe(true)
    })

    it('数字，0', () => {
        expect(isInt(0)).toBe(true)
    })

    it('字符串，小于0整数', () => {
        expect(isInt('-1')).toBe(true)
    })

    it('数字，小于0整数', () => {
        expect(isInt(-1)).toBe(true)
    })

    it('字符串，小于0浮点数', () => {
        expect(isInt('-1.1')).toBe(false)
    })

    it('数字，小于0浮点数', () => {
        expect(isInt(-1.1)).toBe(false)
    })
})
