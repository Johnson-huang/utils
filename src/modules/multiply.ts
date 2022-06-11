import decimalsLength from './decimalsLength'

/**
 * @category 计算
 * @description 数字乘法（解决浮点数精度问题）
 * @param a {number}
 * @param b {number}
 * @example multiply(0.2, 0.1) => 0.03
 */
export default function multiply(a: number, b: number): number {
    if (a === 0 || b === 0) {
        return 0
    }
    const maxFloatLength = Math.max(decimalsLength(a), decimalsLength(b))
    const ret = Math.pow(10, maxFloatLength)
    return (ret * a) * (b * ret) / ret / ret
}
