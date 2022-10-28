/**
 * @category 校验
 * @description 是否为纯汉字
 */
export default function isChinese(val: string): boolean {
    return !/[^\u4e00-\u9fa5]/.test(val + '')
}
