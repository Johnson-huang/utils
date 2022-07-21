/**
 * @category 校验
 * @description 判断是否在 node 环境中
 */
export default function isRunInNode(): boolean {
    return !(globalThis as any).window
}
