import multiply from '../src/modules/multiply'

describe('测试 multiply.ts', () => {
    it('被乘数为0', () => {
        expect(multiply(0, 2)).toBe(0)
    })

    it('乘数为0', () => {
        expect(multiply(2, 0)).toBe(0)
    })

    it('整数相乘', () => {
        expect(multiply(4, 2)).toBe(8)
    })

    it('整数乘小数', () => {
        expect(multiply(2, 0.1)).toBe(0.2)
    })

    it('小数相乘', () => {
        expect(multiply(0.2, 0.4)).toBe(0.08)
    })
})
