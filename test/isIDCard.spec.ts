import isIDCard from '../src/modules/validate/isIDCard'

describe('测试 isIDCard.ts', () => {
    it('字符串，纯数字', () => {
        expect(isIDCard('352203200001010012')).toBe(true)
    })

    it('字符串，带大写X', () => {
        expect(isIDCard('35220320000101001X')).toBe(true)
    })

    it('字符串，带小写x', () => {
        expect(isIDCard('35220320000101001x')).toBe(true)
    })
})
