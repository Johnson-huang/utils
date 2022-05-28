/**
 * blob 转 base64
 * @param blob
 * @param callback
 */
export default function blobToDataURL(blob, callback) {
    const fileReader = new FileReader()
    fileReader.onload = function(e) { callback(e.target.result) }
    fileReader.readAsDataURL(blob)
}