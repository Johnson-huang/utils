import decimalsLength from './decimalsLength'

/**
 * @category 计算
 * @description 数字除法（解决浮点数精度问题）
 * @param a {number}
 * @param b {number}
 * @example divide(0.2, 0.1) => 20
 */
export default function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('0 不能作为除数')
    }
    if (a === 0) {
        return 0
    }
    const maxFloatLength = Math.max(decimalsLength(a), decimalsLength(b))
    const ret = Math.pow(10, maxFloatLength)
    return (ret * a) / (b * ret)
}
