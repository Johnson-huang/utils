import multiply from './multiply'
import divide from './divide'
import { keep_decimals_type } from '../interface'

/**
 * @category 转化
 * @description 保留数字小数位数（截取 or 四舍五入）
 * 原生的四舍五入用的是银行舍入原则
 * 简单来说：五后非零就进一，五后为零看五前奇偶，五前为偶应舍去，五前为奇要进一
 * 即 2.045 -> 2.04；2.035 -> 2.04
 *
 * @param num
 * @param decimals 保留的小数位数
 * @param type 保留方式 toFixed：四舍五入 slice：截取
 * @example keepDecimals(0.12567) => '0.13'
 * @example keepDecimals(0.12345, 3, 'slice') => '0.123'
 * @example keepDecimals(0.12, 3, 'slice') => '0.120'
 */
export default function keepDecimals(num: number, decimals = 2, type = keep_decimals_type.TO_FIXED): string {
    if (num === 0) {
        return `0${decimals ? '.'.padEnd(decimals + 1, '0') : ''}`
    }

    const bigNumStr = multiply(num, Math.pow(10, decimals)) + ''
    const list = bigNumStr.split('.')
    // 截取 或 四舍五入 处理
    let afterDealNum
    if (type === keep_decimals_type.SLICE) {
        // 截取后数字
        afterDealNum = divide(+list[0], Math.pow(10, decimals))
    } else {
        // 按照 decimals 四舍五入后的数字
        if (decimals) {
            if (list[1] && +list[1][0] >= 5) {
                afterDealNum = divide((+list[0] >= 0 ? +list[0] + 1 : +list[0] - 1), Math.pow(10, decimals))
            } else {
                afterDealNum = divide(+list[0], Math.pow(10, decimals))
            }
        } else {
            afterDealNum = divide(+list[0], Math.pow(10, decimals))
        }
    }
    // 补零
    const afterDealNumStr = afterDealNum + ''
    const afterList = afterDealNumStr.split('.')
    let decimalsStr = ''
    if (afterList[1]) {
        if (afterList[1].length >= decimals) {
            decimalsStr = afterList[1].slice(0, decimals + 1)
        } else {
            decimalsStr = afterList[1].padEnd(decimals, '0')
        }
    } else if (decimals) {
        decimalsStr = ''.padEnd(decimals, '0')
    }
    return `${afterList[0]}${decimalsStr ? '.' + decimalsStr : decimalsStr}`
}
