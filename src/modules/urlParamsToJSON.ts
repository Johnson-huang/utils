/**
 * url 参数字符串转JSON
 * 同名参数，使用列表存储
 * @param url
 */
export default function urlParamsToJSON(url: string): object {
    let paramStr
    if (url.indexOf('?') !== -1) {
        paramStr = decodeURIComponent(url.substring(url.indexOf('?') + 1))
    } else {
        paramStr = decodeURIComponent(url)
    }
    const paramsList = paramStr.split('&')
    const obj: {[key: string]: any} = {}
    paramsList.forEach(param => {
        const keyValue = param.split('=')
        if (keyValue[0] in obj) {
            obj[keyValue[0]].push(keyValue[1])
        } else {
            obj[keyValue[0]] = [keyValue[1]]
        }
    })

    for (let key in obj) {
        if (obj[key].length === 1) {
            obj[key] = obj[key][0]
        }
    }
    return obj
}