import { keep_decimals_type } from '../interface';
/**
 * @category 转化
 * @description 保留数字小数位数（截取 or 四舍五入）
 * 原生的四舍五入用的是银行舍入原则
 * 简单来说：五后非零就进一，五后为零看五前奇偶，五前为偶应舍去，五前为奇要进一
 * 即 2.045 -> 2.04；2.035 -> 2.04
 *
 * @param num
 * @param decimals 保留的小数位数
 * @param type 保留方式 toFixed：四舍五入 slice：截取
 * @example keepDecimals(0.12567) => '0.13'
 * @example keepDecimals(0.12345, 3, 'slice') => '0.123'
 * @example keepDecimals(0.12, 3, 'slice') => '0.120'
 */
export default function keepDecimals(num: number, decimals?: number, type?: keep_decimals_type): string;
//# sourceMappingURL=keepDecimals.d.ts.map