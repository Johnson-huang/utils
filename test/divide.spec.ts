import divide from '../src/modules/divide'

describe('测试 divide.ts', () => {
    it('被除数为0', () => {
        expect(divide(0, 2)).toBe(0)
    })

    it('除数为0', () => {
        expect(() => divide(2, 0)).toThrow('0 不能作为除数')
    })

    it('整数相除', () => {
        expect(divide(4, 2)).toBe(2)
    })

    it('整数除小数', () => {
        expect(divide(1, 0.1)).toBe(10)
    })

    it('小数除整数', () => {
        expect(divide(0.1, 10)).toBe(0.01)
    })

    it('小数相除', () => {
        expect(divide(0.2, 0.01)).toBe(20)
    })
})