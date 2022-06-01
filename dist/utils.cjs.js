"use strict";function e(e){var t=e+"";return-1!==t.indexOf(".")?t.substring(t.indexOf(".")+1).length:0}function t(t,r){var n=Math.max(e(t),e(r)),a=Math.pow(10,n);return(a*t+r*a)/a}function r(t,r){if(0===r)throw new Error("0 不能作为除数");if(0===t)return 0;var n=Math.max(e(t),e(r)),a=Math.pow(10,n);return a*t/(r*a)}function n(t,r){if(0===t||0===r)return 0;var n=Math.max(e(t),e(r)),a=Math.pow(10,n);return a*t*(r*a)/a/a}function a(e,t,a){void 0===t&&(t=2),void 0===a&&(a="toFixed");var o=(n(e,Math.pow(10,t))+"").split("."),i=(("slice"===a?r(+o[0],Math.pow(10,t)):t&&o[1]&&+o[1][0]>=5?r(+o[0]>=0?+o[0]+1:+o[0]-1,Math.pow(10,t)):r(+o[0],Math.pow(10,t)))+"").split("."),s="";return i[1]?s=i[1].length>=t?i[1].slice(0,t+1):i[1].padEnd(t,"0"):t&&(s="".padEnd(t,"0")),"".concat(i[0]).concat(s?"."+s:s)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.add=t,exports.dateFormat=function(e,t){var r;if(void 0===t&&(t="yyyy-MM-dd HH:mm:ss"),"string"==typeof e)r=new Date(Date.parse(e.replace(/-/g,"/")));else r=new Date(e);var n=r.getFullYear(),a=r.getMonth(),o=r.getDate(),i=r.getHours(),s=r.getMinutes(),p=r.getSeconds(),c=r.getMilliseconds(),d=i>12?i-12:i;return t.replace("yyyy",String(n)).replace("MM",String(a+1).padStart(2,"0")).replace("dd",String(o).padStart(2,"0")).replace("HH",String(i).padStart(2,"0")).replace("mm",String(s).padStart(2,"0")).replace("ss",String(p).padStart(2,"0")).replace("hh",String(d).padStart(2,"0")).replace("SSS",String(c).padStart(3,"0"))},exports.decimalsLength=e,exports.divide=r,exports.floatToPercent=function(e,t,r){return void 0===t&&(t=2),void 0===r&&(r="toFixed"),a(n(e,100),t,r)+"%"},exports.hyphenToCamel=function(e,t){void 0===t&&(t=1);var r=e.split("-");if(1===r.length)return e;var n=r.reduce((function(e,t){return e+t[0].toUpperCase()+t.substring(1)}),"");switch(t){case 1:default:return n;case 2:return n[0].toLowerCase()+n.substring(1)}},exports.isExcel=function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1);return-1!==["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].indexOf(e.type)||-1!==["csv","xls","xlsx"].indexOf(t)},exports.isRunInNode=function(){return!globalThis.window},exports.keepDecimals=a,exports.minus=function(e,r){return t(e,-r)},exports.money=function(e,t,r){void 0===t&&(t=2),void 0===r&&(r="toFixed");var n=a(e,t,r).split("."),o=n[0].replace(/\B(?=(?:\d{3})+$)/g,",");return"".concat(o).concat(n[1]?"."+n[1]:"")},exports.multiply=n,exports.percentToFloat=function(e){return+e.replace("%","")/100},exports.urlParamsToJSON=function(e){var t=(-1!==e.indexOf("?")?decodeURIComponent(e.substring(e.indexOf("?")+1)):decodeURIComponent(e)).split("&"),r={};for(var n in t.forEach((function(e){var t=e.split("=");t[0]in r?r[t[0]].push(t[1]):r[t[0]]=[t[1]]})),r)1===r[n].length&&(r[n]=r[n][0]);return r};
