import money from './modules/money'

/**
 * 用于挂载工具库里的函数
 * 注册到第一参数对应数据类型的原型链上，便于链式调用
 * 如果不调用 register 也可以正常导入使用
 * @example 使用 register：10000.money(2).substring(0, 5)
 * @example 不使用 register：money(10000).substring(0, 5)
 */
export default function register() {
    Number.prototype.money = money
}