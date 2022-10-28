import isChinese from '../src/modules/validate/isChinese'

describe('测试 isChinese.ts', () => {
    it('纯汉字', () => {
        expect(isChinese('你好')).toBe(true);
    });

    it('包含字母', () => {
        expect(isChinese('a你好b')).toBe(false);
    });

    it('包含数字', () => {
        expect(isChinese('1你好2')).toBe(false);
    });

    it('空格', () => {
        expect(isChinese(' ')).toBe(false);
    });
})
