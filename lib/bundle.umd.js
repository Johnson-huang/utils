(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
})(this, (function (exports) { 'use strict';

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
                // String.prototype.substr 不在 ECMA 标准内
                // 不建议使用
                floatNum = list[1].slice(0, decimals);
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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
