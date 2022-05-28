/**
 * 日期格式化
 * 传入 new Date() 兼容的入参，兼容 IOS Date - 不识别问题
 * @description
 * yyyy：年
 * MM：月
 * dd：日
 * HH：时（24小时制）
 * hh：时（12小时制）
 * mm：分
 * ss：秒
 * @param param {number|string}
 * @param fmt {string}
 * @returns {string}
 * @example dateFormat(1653763181201) =>
 */
export function dateFormat (param: number|string, fmt = 'yyyy-MM-dd HH:mm:ss'): string {
    let date
    switch (typeof param) {
        case 'string':
            date = new Date(Date.parse(param.replace(/-/g, '/')))
            break
        default:
            date = new Date(param)
            break
    }
    let yyyy = date.getFullYear()
    let MM = date.getMonth()
    let dd = date.getDate()
    let HH = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let SSS = date.getMilliseconds()
    let hh = HH > 12 ? HH - 12 : HH
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