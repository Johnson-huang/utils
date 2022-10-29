/**
 * @category 校验
 * @description 是否为身份证号
 */
export default function isIDCard(val: string): boolean {
    return /^\d{17}[\d|xX)]|\d{15}$/.test(val)
}
