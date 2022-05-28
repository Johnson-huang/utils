// 小数转百分数
export default function floatToPercent(num: number, decimals = 2) {
    return (num * 100).toFixed(decimals) + '%'
}