import percentToFloat from '../src/modules/percentToFloat'

describe('测试 percentToFloat.ts', () => {
    it('有小数', () => {
        expect(percentToFloat('110.25%')).toBe(1.1025)
    })

    it('无小数', () => {
        expect(percentToFloat('110%')).toBe(1.1)
    })
})