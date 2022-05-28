// 百分数转小数
export default function percentToFloat(percent: string) {
    return +(percent.replace('%', '')) / 100
}