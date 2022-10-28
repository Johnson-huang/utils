/**
 * @category 校验
 * @description 是否为纯数字（整数或浮点数，字符串数字类型都可）
 */
export default function isNumber(val: number | string): boolean {
    return !isNaN(parseFloat(val + '')) && isFinite(+val)
}
