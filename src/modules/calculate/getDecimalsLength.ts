/**
 * @category 计算
 * @description 计算数字小数点后的位数长度
 * @param num {number | string}
 * @example getDecimalsLength(100.123) => 3
 * @example getDecimalsLength('100.000') => 3
 */
export default function getDecimalsLength(num: number | string): number {
    const numStr = num + ''
    return numStr.indexOf('.') !== -1 ? numStr.substring(numStr.indexOf('.') + 1).length : 0
}
