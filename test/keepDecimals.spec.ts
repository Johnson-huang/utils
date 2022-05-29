import keepDecimals from "../src/modules/keepDecimals";

describe('测试 keepDecimals.ts', () => {
    it('四舍五入', () => {
        expect(keepDecimals(0.125, 2)).toBe(0.13)
    })

    it('截取', () => {
        expect(keepDecimals(0.12345, 3)).toBe(0.123)
    })
})