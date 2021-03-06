import { File } from '../../interface'

/**
 * @category 校验
 * @description 校验是否是 excel 文件
 * @param file
 */
export default function isExcel(file: File): boolean {
    const excelType = [
        'application/vnd.ms-excel', // xls csv
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // xlsx
    ]
    const excelExtensions = ['csv', 'xls', 'xlsx']
    const fileExtensions = file.name.substring(file.name.lastIndexOf('.') + 1)
    // 先使用 file.type 判断，但是不要完全依赖
    // 再使用 file.name 判断
    if (excelType.indexOf(file.type) !== -1) {
        return true
    } else return excelExtensions.indexOf(fileExtensions) !== -1
}
