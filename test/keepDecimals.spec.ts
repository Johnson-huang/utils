import keepDecimals from '../src/modules/format/keepDecimals'
import { keep_decimals_type } from '../src/interface'

describe('测试 keepDecimals.ts', () => {
    it('处理数字0', () => {
        expect(keepDecimals(0)).toBe('0.00')
    })

    it('处理数字0，不保留小数位数', () => {
        expect(keepDecimals(0, 0)).toBe('0')
    })

    it('不传默认参数', () => {
        expect(keepDecimals(0.125)).toBe('0.13')
    })

    it('四舍五入', () => {
        expect(keepDecimals(0.125, 2)).toBe('0.13')
    })

    it('负数四舍五入', () => {
        expect(keepDecimals(-0.125, 2)).toBe('-0.13')
    })

    it('截取', () => {
        expect(keepDecimals(0.12345, 3, keep_decimals_type.SLICE)).toBe('0.123')
    })

    it('原数小数位数小，四舍五入补零', () => {
        expect(keepDecimals(0.1, 3)).toBe('0.100')
    })

    it('原数小数位数小，截取补零', () => {
        expect(keepDecimals(0.1, 3, keep_decimals_type.SLICE)).toBe('0.100')
    })
})
