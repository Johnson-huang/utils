import multiply from "./multiply";
import {keep_decimals_type} from "../interface";
import keepDecimals from "./keepDecimals";

/**
 * 小数转百分数
 * @param num
 * @param decimals
 * @param type
 * @return {string}
 * @example floatToPercent(0.1234) => '12.34%'
 */
export default function floatToPercent(num: number, decimals = 2, type = keep_decimals_type.TO_FIXED): string {
    return keepDecimals(multiply(num, 100), decimals, type) + '%'
}