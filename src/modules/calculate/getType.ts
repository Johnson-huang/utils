/**
 * @category 计算
 * @description 获取变量的JS类型（全小写）
 * @param param {any}
 * @example
 * ```
 * getType(100) => 'number'
 * getType({}) => 'object'
 * ```
 */
export default function getType(param: any): string {
    const originType = Object.prototype.toString.call(param)
    const index = originType.indexOf(' ')
    const type = originType.slice(index + 1, -1)
    return type.toLowerCase()
}
