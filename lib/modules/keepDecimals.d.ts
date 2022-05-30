import { keep_decimals_type } from "../interface";
/**
 * 保留数字小数位数
 * @param num
 * @param decimals 保留的小数位数
 * @param type 保留方式 toFixed：四舍五入 slice：截取
 * @example
 * keepDecimals(0.12567) => '0.13'
 * keepDecimals(0.12345, 3, 'slice') => '0.123'
 * keepDecimals(0.12, 3, 'slice') => '0.120'
 */
export default function keepDecimals(num: number, decimals?: number, type?: keep_decimals_type): string;
//# sourceMappingURL=keepDecimals.d.ts.map