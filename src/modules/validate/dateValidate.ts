interface dateValidateReturn {
    isValidate: boolean,
    yearValidate?: number,
    monthValidate?: number,
    dayValidate?: number,
    hourValidate?: number,
    minuteValidate?: number,
    secondValidate?: number,
}

/**
 * @category 校验
 * @description 校验日期是否合法
 *
 * ****fmt说明****
 * yyyy：年
 * MM：月
 * dd：日
 * HH：时（24小时制）
 * hh：时（12小时制）
 * mm：分
 * ss：秒
 * 默认值：yyyy-MM-dd HH:mm:ss
 *
 * ****返回值说明****：
 * 【isValidate】传入日期是否合法
 * 【yearValidate】0:合法，1：不合法
 * 【monthValidate】0:合法，1：不在1~12范围内
 * 【dayValidate】0:合法，1：MM月没有dd日，2：yyyy年MM月没有dd日
 * 【hourValidate】0:合法，1：不在0~11范围内，2：不在0~23范围内
 * 【minuteValidate】0:合法，1：不在0~59范围内
 * 【secondValidate】0:合法，1：不在0~59范围内
 * ```
 * @param param {number|string}
 * @param fmt {string} 传入的日期格式，会按照格式解析出年月日时分秒
 * @returns {string}
 * @example
 * ```
 * dateFormat('2022-12-31 12:34:53')
 * =>
 * {
 *  isValidate: true,
 *  yearValidate: 0,
 *  monthValidate: 0,
 *  dayValidate: 0,
 *  hourValidate: 0,
 *  minuteValidate: 0,
 *  secondValidate: 0,
 * }
 * ```
 */
export default function dateValidate(param: string, fmt = 'yyyy-MM-dd HH:mm:ss'): dateValidateReturn {
    // 校验 fmt 是否合法
    const fmts: any = {
        'yyyy': true, // 年
        'yyyy-MM': true, // 年月
        'yyyy-MM-dd': true, // 年月日
        'MM-dd': true, // 月日
        'HH:mm': true, // 时分（24小时制）
        'hh:mm': true, // 时分（12小时制）
        'mm:ss': true, // 分秒
        'HH:mm:ss': true, // 时分秒（24小时制）
        'hh:mm:ss': true, // 时分秒（12小时制）
        'yyyy-MM-dd HH:mm:ss': true, // 年月日 时分秒（24小时制）
        'yyyy-MM-dd hh:mm:ss': true, // 年月日 时分秒（12小时制）
    }
    if (!fmts[fmt]) {
        throw new Error('fmt 格式错误')
    }

    // 把 fmt 中的 yyyy HH dd 等替换为 param 中对应的数字
    let yearValidate = 0
    let monthValidate = 0
    let dayValidate = 0
    let hourValidate = 0
    let minuteValidate = 0
    let secondValidate = 0

    // const params = param.split(' ')
    // const params2 = params[0].split('-')
    // const year = params2[]

    return {
        isValidate: !!(yearValidate || monthValidate || dayValidate || hourValidate || minuteValidate || secondValidate),
        yearValidate,
        monthValidate,
        dayValidate,
        hourValidate,
        minuteValidate,
        secondValidate,
    }
}
