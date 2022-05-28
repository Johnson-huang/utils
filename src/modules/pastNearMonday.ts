// 根据入参获取已过去的最近的周一
export default function pastNearMonday(param) {
    let date = param ? new Date(new Date(param).setHours(0,0,0,0)) : new Date(new Date().setHours(0,0,0,0))
    const getDay = date.getDay() || 7 // 周日 0 -> 7
    return date - (getDay - 1) * oneDayTime
}