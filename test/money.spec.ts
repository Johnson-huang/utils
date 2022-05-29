import money from '../src/modules/money'
import {keep_decimals_type} from "../src/interface";

describe('测试 money.ts', () => {
    describe('整数部分', () => {
        it('4位数', () => {
            expect(money(1000, 0)).toBe('1,000')
        })

        it('小于4位数', () => {
            expect(money(456, 0)).toBe('456')
        })

        it('7位数', () => {
            expect(money(1000000, 0)).toBe('1,000,000')
        })
    })

    describe('小数部分', () => {
        it('无小数，小数位数补零', () => {
            expect(money(10000)).toBe('10,000.00')
        })

        it('无小数，小数位数不补零', () => {
            expect(money(10000, 0)).toBe('10,000')
        })

        it('有小数，小数位数长度截取', () => {
            expect(money(10000.2345)).toBe('10,000.23')
        })

        it('有小数，小数位数补零', () => {
            expect(money(10000.2)).toBe('10,000.20')
        })

        it('有小数，第二个参数为 0', () => {
            expect(money(10000.2345, 0)).toBe('10,000')
        })

        it('有小数，四舍五入', () => {
            expect(money(10000.2356, 2)).toBe('10,000.24')
        })

        it('有小数，截取', () => {
            expect(money(10000.2345, 2, keep_decimals_type.SLICE)).toBe('10,000.23')
        })
    })
})
