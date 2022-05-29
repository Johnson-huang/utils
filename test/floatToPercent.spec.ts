import floatToPercent from "../src/modules/floatToPercent";

describe('测试 floatToPercent.ts', () => {
    it('转化', () => {
        expect(floatToPercent(1.123456)).toBe('112.34%')
    })

    it('小数位数', () => {
        expect(floatToPercent(1.123456, 3)).toBe('112.345%')
    })
})