// interface dateValidateReturn {
//     isValidate: boolean,
//     yearValidate?: number,
//     monthValidate?: number,
//     dayValidate?: number,
//     hourValidate?: number,
//     minuteValidate?: number,
//     secondValidate?: number,
// }
//
// /**
//  * @category 校验
//  * @description 校验日期是否合法，返回具体的错误
//  *
//  * ****函数意义****
//  * ```
//  * new Date('2022-12-32') => Invalid Date 没有具体的错误描述
//  * Object.prototype.toString.call(new Date('2022-12-32')) => "[object Date]" 无法判断非法
//  *```
//  *
//  * ****fmt说明****
//  * ```
//  * yyyy：年
//  * MM：月
//  * dd：日
//  * HH：时（24小时制）
//  * hh：时（12小时制）
//  * mm：分
//  * ss：秒
//  * 默认值：yyyy-MM-dd HH:mm:ss
//  *```
//  *
//  * ****返回值说明****：
//  * ```
//  * 【isValidate】传入日期是否合法
//  * 【yearValidate】0:合法，1：不合法
//  * 【monthValidate】0:合法，1：不在1~12范围内
//  * 【dayValidate】0:合法，1：MM月没有dd日，2：yyyy年MM月没有dd日
//  * 【hourValidate】0:合法，1：不在0~11范围内，2：不在0~23范围内
//  * 【minuteValidate】0:合法，1：不在0~59范围内
//  * 【secondValidate】0:合法，1：不在0~59范围内
//  * ```
//  * @param param {number|string}
//  * @param fmt {string} 传入的日期格式，会按照格式解析出年月日时分秒
//  * @returns {string}
//  * @example
//  * ```
//  * dateFormat('2022-12-31 12:34:53')
//  * =>
//  * {
//  *  isValidate: true,
//  *  yearValidate: 0,
//  *  monthValidate: 0,
//  *  dayValidate: 0,
//  *  hourValidate: 0,
//  *  minuteValidate: 0,
//  *  secondValidate: 0,
//  * }
//  * ```
//  */
// export default function dateValidate(param: string, fmt = 'yyyy-MM-dd HH:mm:ss'): dateValidateReturn {
//     // 初始化校验结果变量
//     let yearValidate = 0
//     let monthValidate = 0
//     let dayValidate = 0
//     let hourValidate = 0
//     let minuteValidate = 0
//     let secondValidate = 0
//
//     // 初始化各个时间变量
//     let yearFmt = 'yyyy'
//     let monthFmt = 'MM'
//     let dayFmt = 'dd'
//     let hour24Fmt = 'HH'
//     let hour12Fmt = 'hh'
//     let minuteFmt = 'mm'
//     let secondFmt = 'ss'
//
//     /********************校验 fmt 是否合法***********************/
//     // 是否有非数字和非 - : 的字符
//     const trimParam = param.trim() // 去掉左右空格
//     const reg = /[^0-9]&[^-:]/
//     if (reg.test(trimParam)) {
//         throw new Error('fmt 包含非法字符')
//     }
//
//     // 格式是否正确
//     const fmts: any = {
//         'yyyy': [yearFmt], // 年
//         'yyyy-MM': [yearFmt, monthFmt], // 年月
//         'yyyyMM': [yearFmt, monthFmt], // 年月
//         'yyyy-MM-dd': [yearFmt, monthFmt, dayFmt], // 年月日
//         'yyyyMMdd': [yearFmt, monthFmt, dayFmt], // 年月日
//         'MM-dd': [monthFmt, dayFmt], // 月日
//         'HH:mm': [hour24Fmt, minuteFmt], // 时分（24小时制）
//         'hh:mm': [hour12Fmt, minuteFmt], // 时分（12小时制）
//         'mm:ss': [minuteFmt, secondFmt], // 分秒
//         'HH:mm:ss': [hour24Fmt, minuteFmt, secondFmt], // 时分秒（24小时制）
//         'hh:mm:ss': [hour12Fmt, minuteFmt, secondFmt], // 时分秒（12小时制）
//         'yyyy-MM-dd HH:mm:ss': [yearFmt, monthFmt, dayFmt, hour24Fmt, minuteFmt, secondFmt], // 年月日 时分秒（24小时制）
//         'yyyy-MM-dd hh:mm:ss': [yearFmt, monthFmt, dayFmt, hour12Fmt, minuteFmt, secondFmt], // 年月日 时分秒（12小时制）
//     }
//     if (!fmts[fmt]) {
//         throw new Error('fmt 格式错误')
//     }
//
//     /********************根据 fmt 把 param 中的的数字提取出来***********************/
//     // TODO 这里不太合理，2022-123-12 => 2022 12 12
//     const matchFmts = fmts[fmt]
//     const list = matchFmts.map((itemFmt: string) => {
//         const index = param.indexOf(itemFmt)
//         const length = itemFmt.length
//         const time = param.substring(index, index + length)
//         return {
//             fmt: itemFmt,
//             time
//         }
//     })
//
//     // 每种类型 fmt 的校验规则
//
//     return {
//         isValidate: !!(yearValidate || monthValidate || dayValidate || hourValidate || minuteValidate || secondValidate),
//         yearValidate,
//         monthValidate,
//         dayValidate,
//         hourValidate,
//         minuteValidate,
//         secondValidate,
//     }
// }
