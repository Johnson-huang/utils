import multiply from "./multiply";

/**
 * 小数转百分数
 * @param num
 * @param decimals
 * @return {string}
 * @example floatToPercent(0.1234) => 12.34%
 */
export default function floatToPercent(num: number, decimals = 2): string {
    return multiply(num, 100).toFixed(decimals) + '%'
}