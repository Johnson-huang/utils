import multiply from '@/modules/calculate/multiply'
import { keep_decimals_type } from '@/interface'
import keepDecimals from './keepDecimals'

/**
 * @category 转化
 * @description 小数转百分数
 * @param num
 * @param decimals
 * @param type
 * @example floatToPercent(0.1234) => '12.34%'
 */
export default function floatToPercent(num: number, decimals = 2, type = keep_decimals_type.TO_FIXED): string {
    return keepDecimals(multiply(num, 100), decimals, type) + '%'
}
