/**
 * 保留小数位数类型枚举
 */
export const enum keep_decimals_type {
    TO_FIXED = 'toFixed', // 四舍五入
    SLICE = 'slice', // 截取
}

/**
 * HTML input file
 */
export interface File extends Blob {
    name: string
}