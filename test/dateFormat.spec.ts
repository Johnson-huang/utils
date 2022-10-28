// import dateFormat from '../src/modules/format/dateFormat'
//
// describe('测试 dateFormat.ts', () => {
//     it('参数为字符串', () => {
//         expect(dateFormat('2022/05/29 11:26:17')).toBe('2022-05-29 11:26:17')
//     })
//
//     it('年', () => {
//         expect(dateFormat(1653794777031, 'yyyy')).toBe('2022')
//     })
//
//     it('年月', () => {
//         expect(dateFormat(1653794777031, 'yyyy-MM')).toBe('2022-05')
//     })
//
//     it('年月日', () => {
//         expect(dateFormat(1653794777031, 'yyyy-MM-dd')).toBe('2022-05-29')
//     })
//
//     it('年月日时（24小时制）', () => {
//         expect(dateFormat(1653801977031, 'yyyy-MM-dd HH')).toBe('2022-05-29 13')
//     })
//
//     it('年月日时（12小时制）', () => {
//         expect(dateFormat(1653801977031, 'yyyy-MM-dd hh')).toBe('2022-05-29 01')
//     })
//
//     it('年月日时分', () => {
//         expect(dateFormat(1653794777031, 'yyyy-MM-dd HH:mm')).toBe('2022-05-29 11:26')
//     })
//
//     it('年月日时分秒', () => {
//         expect(dateFormat(1653794777031)).toBe('2022-05-29 11:26:17')
//     })
//
//     it('换连字符', () => {
//         expect(dateFormat(1653794777031, 'yyyy/MM/dd HH/mm/ss')).toBe('2022/05/29 11/26/17')
//     })
// })
