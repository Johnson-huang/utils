import isNumber from './isNumber'
import isPositiveInt from './isPositiveInt'
import isNegativeInt from './isNegativeInt'

/**
 * @category 校验
 * @description 是否为整数
 */
export default function isInt(val: number | string): boolean {
    if (!isNumber(val)) return false
    return val === 0 || val === '0' || isPositiveInt(val) || isNegativeInt(val)
}
