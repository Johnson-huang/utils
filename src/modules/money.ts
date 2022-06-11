import keepDecimals from './keepDecimals'
import { keep_decimals_type } from '../interface'

/**
 * @category 转化
 * @description 将数字格式化为金额类型
 * @param num 待处理的数字
 * @param decimals 希望保留的小数位数
 * @param type 保留小数位数的方式
 * @example money(100000.2345) => '100,000.23'
 */
export default function money(num: number, decimals = 2, type = keep_decimals_type.TO_FIXED): string {
    const numStr = keepDecimals(num, decimals, type)
    const list = numStr.split('.')
    const intNum = list[0].replace(/\B(?=(?:\d{3})+$)/g, ',')
    return `${intNum}${list[1] ? '.' + list[1] : ''}`
}
