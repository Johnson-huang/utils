/**
 * @category 校验
 * @description 是否闰年
 */
export default function isLeapYear(year: number): boolean {
    if (year % 100 === 0) {
        return year % 400 === 0
    } else {
        return year % 4 === 0
    }
}
