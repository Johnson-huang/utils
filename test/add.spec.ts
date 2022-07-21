import add from '../src/modules/calculate/add'

describe('测试 add.ts', () => {
    it('整数相加', () => {
        expect(add(1, 2)).toBe(3)
    })

    it('整数小数相加', () => {
        expect(add(1, 2.1)).toBe(3.1)
    })

    it('同位数小数数相加', () => {
        expect(add(0.1, 0.2)).toBe(0.3)
    })

    it('不同位数小数数相加', () => {
        expect(add(0.1, 0.02)).toBe(0.12)
    })
})
