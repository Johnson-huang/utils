import floatToPercent from '../src/modules/floatToPercent'
import { keep_decimals_type } from '../src/interface'

describe('测试 floatToPercent.ts', () => {
    it('不传默认参数', () => {
        expect(floatToPercent(1.123456)).toBe('112.35%')
    })

    it('不保留小数', () => {
        expect(floatToPercent(1.123456, 0)).toBe('112%')
    })

    it('保留小数，四舍五入', () => {
        expect(floatToPercent(1.123456, 3)).toBe('112.346%')
    })

    it('保留小数，截取', () => {
        expect(floatToPercent(1.123456, 3, keep_decimals_type.SLICE)).toBe('112.345%')
    })
})
