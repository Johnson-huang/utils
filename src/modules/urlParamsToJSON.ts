interface Obj {
    [key: string]: string | string[]
}

/**
 * @category 转化
 * @description url 参数字符串转JSON，同名参数，使用列表存储
 * @param url
 * @example
 * ```
 * urlParamsToJSON('text%3D%E4%BD%A0%E5%A5%BD%26num%3D123%26link%3Dhttps%3A%2F%2Fwww.baidu.com%26link%3Dhttps%3A%2F%2Fgoogle.cn')
 * =>
 * {
 *  text: '你好',
 *  num: '123',
 *  link: ['https://www.baidu.com', 'https://google.cn']
 * }
 * ```
 */
export default function urlParamsToJSON(url: string): object {
    let paramStr
    if (url.indexOf('?') !== -1) {
        paramStr = decodeURIComponent(url.substring(url.indexOf('?') + 1))
    } else {
        paramStr = decodeURIComponent(url)
    }
    const paramsList = paramStr.split('&')
    const obj: Obj = {}
    paramsList.forEach(param => {
        const keyValue = param.split('=')
        if (keyValue[0] in obj) {
            (obj[keyValue[0]] as string[]).push(keyValue[1])
        } else {
            obj[keyValue[0]] = [keyValue[1]]
        }
    })

    for (const key in obj) {
        if (obj[key].length === 1) {
            obj[key] = obj[key][0]
        }
    }
    return obj
}
