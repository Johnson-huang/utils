import multiply from "./multiply";
import divide from "./divide";

enum keepType {
    TO_FIXED = 'toFixed',
    SLICE = 'slice',
}

/**
 * 保留数字小数位数
 * @param num
 * @param decimals 保留的小数位数
 * @param type 保留方式 toFixed：四舍五入 slice：截取
 * @example
 * keepDecimals(0.12567) => 0.13
 * keepDecimals(0.12345, 3, 'slice') => 0.123
 */
export default function keepDecimals(num: number, decimals = 2, type = keepType.TO_FIXED): number {switch (type) {
        case keepType.TO_FIXED:
            return +num.toFixed(decimals)
        case keepType.SLICE:
            return divide(Math.floor(multiply(num, Math.pow(10, decimals))), Math.pow(10, decimals))
        default:
            return +num.toFixed(decimals)
    }
}