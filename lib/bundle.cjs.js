'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 将数字格式化为金额类型
 * @returns {string}
 * @param num {number} 待处理的数字
 * @param decimals {number} 希望保留的小数位数
 * @example money(100000.2345) => '100,000.23'
 */
function money(num, decimals) {
    if (decimals === void 0) { decimals = 2; }
    var numStr = num + '';
    var list = numStr.split('.');
    var intNum = list[0].replace(/\B(?=(?:\d{3})+$)/g, ',');
    var floatNum;
    // 存在小数部分
    if (list[1]) {
        if (list[1].length < decimals) {
            floatNum = list[1].padEnd(decimals, '0');
        }
        else {
            floatNum = list[1].substr(0, decimals);
        }
    }
    else { // 没有小数部分
        if (decimals) {
            floatNum = decimals ? '0'.padEnd(decimals, '0') : '';
        }
        else {
            floatNum = decimals ? '0'.padEnd(decimals, '0') : '';
        }
    }
    return "".concat(intNum).concat(floatNum ? '.' + floatNum : '');
}

exports.money = money;
