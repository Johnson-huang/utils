function t(t){var e=t+"";return-1!==e.indexOf(".")?e.substring(e.indexOf(".")+1).length:0}function e(e,n){var r=Math.max(t(e),t(n)),a=Math.pow(10,r);return(a*e+n*a)/a}function n(t,e){var n;if(void 0===e&&(e="yyyy-MM-dd HH:mm:ss"),"string"==typeof t)n=new Date(Date.parse(t.replace(/-/g,"/")));else n=new Date(t);var r=n.getFullYear(),a=n.getMonth(),i=n.getDate(),o=n.getHours(),c=n.getMinutes(),d=n.getSeconds(),p=n.getMilliseconds(),u=o>12?o-12:o;return e.replace("yyyy",String(r)).replace("MM",String(a+1).padStart(2,"0")).replace("dd",String(i).padStart(2,"0")).replace("HH",String(o).padStart(2,"0")).replace("mm",String(c).padStart(2,"0")).replace("ss",String(d).padStart(2,"0")).replace("hh",String(u).padStart(2,"0")).replace("SSS",String(p).padStart(3,"0"))}function r(e,n){if(0===n)throw new Error("0 不能作为除数");if(0===e)return 0;var r=Math.max(t(e),t(n)),a=Math.pow(10,r);return a*e/(n*a)}function a(e,n){if(0===e||0===n)return 0;var r=Math.max(t(e),t(n)),a=Math.pow(10,r);return a*e*(n*a)/a/a}function i(t,e,n){if(void 0===e&&(e=2),void 0===n&&(n="toFixed"),0===t)return"0".concat(e?".".padEnd(e+1,"0"):"");var i=(a(t,Math.pow(10,e))+"").split("."),o=(("slice"===n?r(+i[0],Math.pow(10,e)):e&&i[1]&&+i[1][0]>=5?r(+i[0]>=0?+i[0]+1:+i[0]-1,Math.pow(10,e)):r(+i[0],Math.pow(10,e)))+"").split("."),c="";return o[1]?c=o[1].length>=e?o[1].slice(0,e+1):o[1].padEnd(e,"0"):e&&(c="".padEnd(e,"0")),"".concat(o[0]).concat(c?"."+c:c)}function o(t,e,n){return void 0===e&&(e=2),void 0===n&&(n="toFixed"),i(a(t,100),e,n)+"%"}function c(t,e){void 0===e&&(e=1);var n=t.split("-");if(1===n.length)return t;var r=n.reduce((function(t,e){return t+e[0].toUpperCase()+e.substring(1)}),"");switch(e){case 1:default:return r;case 2:return r[0].toLowerCase()+r.substring(1)}}function d(t){var e=t.name.substring(t.name.lastIndexOf(".")+1);return-1!==["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].indexOf(t.type)||-1!==["csv","xls","xlsx"].indexOf(e)}function p(){return!globalThis.window}function u(t,n){return e(t,-n)}function s(t,e,n){void 0===e&&(e=2),void 0===n&&(n="toFixed");var r=i(t,e,n).split("."),a=r[0].replace(/\B(?=(?:\d{3})+$)/g,",");return"".concat(a).concat(r[1]?"."+r[1]:"")}function l(t){return+t.replace("%","")/100}function f(t){var e=(-1!==t.indexOf("?")?decodeURIComponent(t.substring(t.indexOf("?")+1)):decodeURIComponent(t)).split("&"),n={};for(var r in e.forEach((function(t){var e=t.split("=");e[0]in n?n[e[0]].push(e[1]):n[e[0]]=[e[1]]})),n)1===n[r].length&&(n[r]=n[r][0]);return n}export{e as add,n as dateFormat,t as decimalsLength,r as divide,o as floatToPercent,c as hyphenToCamel,d as isExcel,p as isRunInNode,i as keepDecimals,u as minus,s as money,a as multiply,l as percentToFloat,f as urlParamsToJSON};