import isLeapYear from '../src/modules/validate/isLeapYear'

describe('测试 isLeapYear.ts', () => {
    it('可被400整除', () => {
        expect(isLeapYear(2000)).toBe(true)
    })

    it('可被100整除，但不能被400整除', () => {
        expect(isLeapYear(1900)).toBe(false)
    })

    it('可被4整除，但不能被100整除', () => {
        expect(isLeapYear(2004)).toBe(true)
    })
})
