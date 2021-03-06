import add from './add'

/**
 * @category 计算
 * @description 数字减法（解决浮点数精度问题）
 * @param a {number}
 * @param b {number}
 * @example minus(0.2, 0.1) => 0.1
 */
export default function minus(a: number, b: number): number {
    return add(a, -b)
}
