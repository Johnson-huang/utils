import blobToDataURL from "./blobToDataURL";

export function downloadImage(blob, name) {
    blobToDataURL(blob, (imgBase64) => {
        let a = document.createElement('a') // 生成一个a元素
        const event = new MouseEvent('click') // 创建一个单击事件
        a.download = name || '图片' // 设置图片名称
        a.href = imgBase64 // 将生成的URL设置为a.href属性
        a.dispatchEvent(event) // 触发a的单击事件
        a = null
    })
}