import isNumber from "./isNumber";
import isPositiveFloat from "./isPositiveFloat";
import isNegativeFloat from "./isNegativeFloat";

/**
 * @category 校验
 * @description 是否为浮点数
 */
export default function isInt(val: number | string): boolean {
    if (!isNumber(val)) return false;
    return /0.+0/.test(val + '') || isPositiveFloat(val) || isNegativeFloat(val);
}
