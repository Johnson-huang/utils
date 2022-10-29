import isNumber from './isNumber'

/**
 * @category 校验
 * @description 是否为正浮点数
 */
export default function isPositiveFloat(val: number | string): boolean {
    if (!isNumber(val)) return false
    return +val % 1 !== 0 && val > 0
}
