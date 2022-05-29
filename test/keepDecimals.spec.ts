import keepDecimals from "../src/modules/keepDecimals";
import {keep_decimals_type} from "../src/interface";

describe('测试 keepDecimals.ts', () => {
    it('四舍五入', () => {
        expect(keepDecimals(0.125, 2)).toBe('0.13')
    })

    it('截取', () => {
        expect(keepDecimals(0.12345, 3, keep_decimals_type.SLICE)).toBe('0.123')
    })

    it('补零', () => {
        expect(keepDecimals(0.1, 3)).toBe('0.100')
    })

    it('保留小数位数方式不在枚举内', () => {
        expect(keepDecimals(0.1, 3, 123)).toBe('0.100')
    })
})