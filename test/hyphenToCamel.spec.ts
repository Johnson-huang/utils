import hyphenToCamel from '../src/modules/format/hyphenToCamel'

describe('测试 hyphenToCamel.ts', () => {
    it('单个单词', () => {
        expect(hyphenToCamel('hello')).toBe('hello')
    })

    it('两个单词', () => {
        expect(hyphenToCamel('hello-world')).toBe('HelloWorld')
    })

    it('三个单词', () => {
        expect(hyphenToCamel('hello-world-my-friends')).toBe('HelloWorldMyFriends')
    })

    it('首字母小写', () => {
        expect(hyphenToCamel('hello-world', 2)).toBe('helloWorld')
    })

    it('第二个参数为不在逻辑内的值', () => {
        expect(hyphenToCamel('hello-world', 0)).toBe('HelloWorld')
    })
})
