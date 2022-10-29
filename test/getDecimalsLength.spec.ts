import getDecimalsLength from '../src/modules/calculate/getDecimalsLength'

describe('测试 getDecimalsLength.ts', () => {
    it('整数', () => {
        expect(getDecimalsLength(100)).toBe(0)
    })

    it('小数', () => {
        expect(getDecimalsLength(100.123)).toBe(3)
    })

    it('100.000', () => {
        expect(getDecimalsLength('100.000')).toBe(3)
    })
})
