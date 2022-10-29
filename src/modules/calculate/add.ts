import getDecimalsLength from './getDecimalsLength'

/**
 * @category 计算
 * @description 数字加法（解决浮点数精度问题）
 * @param a {number}
 * @param b {number}
 * @example add(0.1, 0.2) => 0.3
 */
export default function add(a: number, b: number): number {
    const maxFloatLength = Math.max(getDecimalsLength(a), getDecimalsLength(b))
    const ret = Math.pow(10, maxFloatLength)
    return (ret * a + b * ret) / ret
}
