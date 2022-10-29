import isNumber from './isNumber'

/**
 * @category 校验
 * @description 是否为负浮点数
 */
export default function isNegativeFloat(val: number | string): boolean {
    if (!isNumber(val)) return false
    return +val % 1 !== 0 && val < 0
}
