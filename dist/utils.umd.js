!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).utils={})}(this,(function(e){"use strict";function t(e){var t=e+"";return-1!==t.indexOf(".")?t.substring(t.indexOf(".")+1).length:0}function n(e,n){var r=Math.max(t(e),t(n)),i=Math.pow(10,r);return(i*e+n*i)/i}function r(e,n){if(0===n)throw new Error("0 不能作为除数");if(0===e)return 0;var r=Math.max(t(e),t(n)),i=Math.pow(10,r);return i*e/(n*i)}function i(e,n){if(0===e||0===n)return 0;var r=Math.max(t(e),t(n)),i=Math.pow(10,r);return i*e*(n*i)/i/i}function a(e,t,n){void 0===t&&(t=2),void 0===n&&(n="toFixed");var a=(i(e,Math.pow(10,t))+"").split("."),o=(("slice"===n?r(+a[0],Math.pow(10,t)):t&&a[1]&&+a[1][0]>=5?r(+a[0]>=0?+a[0]+1:+a[0]-1,Math.pow(10,t)):r(+a[0],Math.pow(10,t)))+"").split("."),d="";return o[1]?d=o[1].length>=t?o[1].slice(0,t+1):o[1].padEnd(t,"0"):t&&(d="".padEnd(t,"0")),"".concat(o[0]).concat(d?"."+d:d)}e.add=n,e.dateFormat=function(e,t){var n;if(void 0===t&&(t="yyyy-MM-dd HH:mm:ss"),"string"==typeof e)n=new Date(Date.parse(e.replace(/-/g,"/")));else n=new Date(e);var r=n.getFullYear(),i=n.getMonth(),a=n.getDate(),o=n.getHours(),d=n.getMinutes(),c=n.getSeconds(),s=n.getMilliseconds(),u=o>12?o-12:o;return t.replace("yyyy",String(r)).replace("MM",String(i+1).padStart(2,"0")).replace("dd",String(a).padStart(2,"0")).replace("HH",String(o).padStart(2,"0")).replace("mm",String(d).padStart(2,"0")).replace("ss",String(c).padStart(2,"0")).replace("hh",String(u).padStart(2,"0")).replace("SSS",String(s).padStart(3,"0"))},e.decimalsLength=t,e.divide=r,e.floatToPercent=function(e,t,n){return void 0===t&&(t=2),void 0===n&&(n="toFixed"),a(i(e,100),t,n)+"%"},e.hyphenToCamel=function(e,t){void 0===t&&(t=1);var n=e.split("-");if(1===n.length)return e;var r=n.reduce((function(e,t){return e+t[0].toUpperCase()+t.substring(1)}),"");switch(t){case 1:default:return r;case 2:return r[0].toLowerCase()+r.substring(1)}},e.isExcel=function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1);return-1!==["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].indexOf(e.type)||-1!==["csv","xls","xlsx"].indexOf(t)},e.isRunInNode=function(){return!globalThis.window},e.keepDecimals=a,e.minus=function(e,t){return n(e,-t)},e.money=function(e,t,n){void 0===t&&(t=2),void 0===n&&(n="toFixed");var r=a(e,t,n).split("."),i=r[0].replace(/\B(?=(?:\d{3})+$)/g,",");return"".concat(i).concat(r[1]?"."+r[1]:"")},e.multiply=i,e.percentToFloat=function(e){return+e.replace("%","")/100},e.urlParamsToJSON=function(e){var t=(-1!==e.indexOf("?")?decodeURIComponent(e.substring(e.indexOf("?")+1)):decodeURIComponent(e)).split("&"),n={};for(var r in t.forEach((function(e){var t=e.split("=");t[0]in n?n[t[0]].push(t[1]):n[t[0]]=[t[1]]})),n)1===n[r].length&&(n[r]=n[r][0]);return n},Object.defineProperty(e,"__esModule",{value:!0})}));
