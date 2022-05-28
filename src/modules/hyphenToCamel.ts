/**
 * 连字符转驼峰
 * @param str {string} 需要转换的字符串
 * @param type {number} 转换类型 1：驼峰首字母大写 2：驼峰首字母小写
 * @returns {string}
 * @example hyphenToCamel('hello-world') => HelloWorld
 * @example hyphenToCamel('hello-world', 2) => helloWorld
 */
export default function hyphenToCamel(str: string, type = 1): string {
    const list = str.split('-')
    if (list.length === 1) {
        return str
    }
    const AllFirstUpperCaseStr = list.reduce((pre: string, next: string) => {
        return pre + next[0].toUpperCase() + next.substring(1)
    }, '')

    switch (type) {
        case 1:
            return AllFirstUpperCaseStr
        case 2:
            return AllFirstUpperCaseStr[0].toLowerCase() + AllFirstUpperCaseStr.substring(1)
        default:
            return AllFirstUpperCaseStr
    }
}