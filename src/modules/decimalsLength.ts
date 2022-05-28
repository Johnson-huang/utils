/**
 * 计算数字小数点后的位数长度
 * @param num {number}
 * @returns {number}
 * @example decimalsLength(100.123) => 3
 */
export default function decimalsLength(num: number): number {
    const numStr = num + ''
    return numStr.indexOf('.') !== - 1 ? numStr.substring(numStr.indexOf('.') + 1).length : 0
}