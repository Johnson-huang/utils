import decimalsLength from '../src/modules/calculate/decimalsLength'

describe('测试 decimalsLength.ts', () => {
    it('整数', () => {
        expect(decimalsLength(100)).toBe(0)
    })

    it('小数', () => {
        expect(decimalsLength(100.123)).toBe(3)
    })
})
