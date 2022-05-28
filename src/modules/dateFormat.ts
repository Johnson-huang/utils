export function formatDate (dateTime, fmt = 'yyyy-MM-dd HH:mm:ss') {
    let date = ''
    switch (typeof dateTime) {
        case 'string':
            date = new Date(Date.parse(dateTime.replace(/-/g, '/')))
            break
        default:
            date = new Date(dateTime)
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
    let dateStr = fmt
        .replace('yyyy', String(yyyy))
        .replace('MM', String(MM + 1).padStart(2, '0'))
        .replace('dd', String(dd).padStart(2, '0'))
        .replace('HH', String(HH).padStart(2, '0'))
        .replace('mm', String(mm).padStart(2, '0'))
        .replace('ss', String(ss).padStart(2, '0'))
        .replace('hh', String(hh).padStart(2, '0'))
        .replace('SSS', String(SSS).padStart(3, '0'))
    return dateStr
}