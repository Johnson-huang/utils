import urlParamsToJSON from '../src/modules/urlParamsToJSON'

describe('测试 urlParamsToJSON.ts', () => {
    it('带?字符串', () => {
        expect(urlParamsToJSON('?text%3D%E4%BD%A0%E5%A5%BD%26num%3D123%26link%3Dhttps%3A%2F%2Fwww.baidu.com')).toEqual({
            text: '你好',
            num: '123',
            link: 'https://www.baidu.com'
        })
    })

    it('不带?字符串', () => {
        expect(urlParamsToJSON('text%3D%E4%BD%A0%E5%A5%BD%26num%3D123%26link%3Dhttps%3A%2F%2Fwww.baidu.com')).toEqual({
            text: '你好',
            num: '123',
            link: 'https://www.baidu.com'
        })
    })

    it('重复参数', () => {
        expect(urlParamsToJSON('text%3D%E4%BD%A0%E5%A5%BD%26num%3D123%26link%3Dhttps%3A%2F%2Fwww.baidu.com%26link%3Dhttps%3A%2F%2Fgoogle.cn')).toEqual({
            text: '你好',
            num: '123',
            link: ['https://www.baidu.com', 'https://google.cn']
        })
    })
})
