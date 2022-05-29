import floatToPercent from "../src/modules/floatToPercent";
import {keep_decimals_type} from "../src/interface";

describe('测试 floatToPercent.ts', () => {
    it('转化', () => {
        expect(floatToPercent(1.123456)).toBe('112.34%')
    })

    it('小数，四舍五入', () => {
        expect(floatToPercent(1.123456, 3)).toBe('112.345%')
    })

    it('小数，截取', () => {
        expect(floatToPercent(1.123456, 3, keep_decimals_type.SLICE)).toBe('112.345%')
    })
})