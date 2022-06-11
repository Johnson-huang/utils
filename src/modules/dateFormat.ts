/**
 * @category 转化
 * @description 日期格式化，传入 new Date() 兼容的入参，兼容 IOS Date - 不识别问题
 * ```
 * yyyy：年
 * MM：月
 * dd：日
 * HH：时（24小时制）
 * hh：时（12小时制）
 * mm：分
 * ss：秒
 * ```
 * @param param {number|string}
 * @param fmt {string}
 * @returns {string}
 * @example dateFormat(1653794777031) => '2022-05-29 11:26:17'
 */
export default function dateFormat(param: number|string, fmt = 'yyyy-MM-dd HH:mm:ss'): string {
    let date
    switch (typeof param) {
        case 'string':
            date = new Date(Date.parse(param.replace(/-/g, '/')))
            break
        default:
            date = new Date(param)
            break
    }
    const yyyy = date.getFullYear()
    const MM = date.getMonth()
    const dd = date.getDate()
    const HH = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()
    const SSS = date.getMilliseconds()
    const hh = HH > 12 ? HH - 12 : HH
    return fmt
        .replace('yyyy', String(yyyy))
        .replace('MM', String(MM + 1).padStart(2, '0'))
        .replace('dd', String(dd).padStart(2, '0'))
        .replace('HH', String(HH).padStart(2, '0'))
        .replace('mm', String(mm).padStart(2, '0'))
        .replace('ss', String(ss).padStart(2, '0'))
        .replace('hh', String(hh).padStart(2, '0'))
        .replace('SSS', String(SSS).padStart(3, '0'))
}
