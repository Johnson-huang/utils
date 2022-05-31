/**
 * url 参数字符串转JSON
 * 同名参数，使用列表存储
 * @param url
 * @example
 * urlParamsToJSON('text%3D%E4%BD%A0%E5%A5%BD%26num%3D123%26link%3Dhttps%3A%2F%2Fwww.baidu.com%26link%3Dhttps%3A%2F%2Fgoogle.cn')
 * =>
 * {
 *  text: '你好',
 *  num: '123',
 *  link: ['https://www.baidu.com', 'https://google.cn']
 * }
 */
export default function urlParamsToJSON(url: string): object;
//# sourceMappingURL=urlParamsToJSON.d.ts.map