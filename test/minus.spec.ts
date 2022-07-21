import minus from '../src/modules/calculate/minus'

describe('测试 minus.ts', () => {
    it('整数相减', () => {
        expect(minus(3, 1)).toBe(2)
    })

    it('整数小数相减', () => {
        expect(minus(3, 1.2)).toBe(1.8)
    })

    it('同位数小数数相减', () => {
        expect(minus(0.1, 0.2)).toBe(-0.1)
    })

    it('不同位数小数数相减', () => {
        expect(minus(0.1, 0.02)).toBe(0.08)
    })
})
