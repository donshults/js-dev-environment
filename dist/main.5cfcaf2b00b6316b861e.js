webpackJsonp([0],[function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}n(1);var r=n(3),o=t(r),i=n(13);(0,i.getUsers)().then(function(t){var n="";t.forEach(function(e){n+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),e.document.getElementById("users").innerHTML=n;var r=e.document.getElementsByClassName("deleteUser");Array.from(r,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),(0,i.deleteUser)(t.attributes["data-id"].value);var n=t.parentNode.parentNode;n.parentNode.removeChild(n)}})});var u=function(){console.log("Go for it")};(0,o["default"])(),u()}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),u=function(){console.log(i["default"].green("Running from Common Module"))};t["default"]=u},function(e,t,n){(function(t){"use strict";function r(e){this.enabled=e&&void 0!==e.enabled?e.enabled:f}function o(e){var t=function(){return i.apply(t,arguments)};return t._styles=e,t.enabled=this.enabled,t.__proto__=g,t}function i(){var e=arguments,t=e.length,n=0!==t&&String(arguments[0]);if(t>1)for(var r=1;r<t;r++)n+=" "+e[r];if(!this.enabled||!n)return n;var o=this._styles,i=o.length,u=s.dim.open;for(!p||o.indexOf("gray")===-1&&o.indexOf("grey")===-1||(s.dim.open="");i--;){var c=s[o[i]];n=c.open+n.replace(c.closeRe,c.open)+c.close}return s.dim.open=u,n}function u(){var e={};return Object.keys(h).forEach(function(t){e[t]={get:function(){return o.call(this,[t])}}}),e}var c=n(6),s=n(7),l=n(9),a=n(11),f=n(12),d=Object.defineProperties,p="win32"===t.platform&&!/^xterm/i.test(t.env.TERM);p&&(s.blue.open="[94m");var h=function(){var e={};return Object.keys(s).forEach(function(t){s[t].closeRe=new RegExp(c(s[t].close),"g"),e[t]={get:function(){return o.call(this,this._styles.concat(t))}}}),e}(),g=d(function(){},h);d(r.prototype,u()),e.exports=new r,e.exports.styles=s,e.exports.hasColor=a,e.exports.stripColor=l,e.exports.supportsColor=f}).call(t,n(5))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&p&&(g=!1,p.length?h=p.concat(h):v=-1,h.length&&c())}function c(){if(!g){var e=o(u);g=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,g=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var a,f,d=e.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],g=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||g||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";var n=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(n,"\\$&")}},function(e,t,n){(function(e){"use strict";function t(){var e={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};return e.colors.grey=e.colors.gray,Object.keys(e).forEach(function(t){var n=e[t];Object.keys(n).forEach(function(t){var r=n[t];e[t]=n[t]={open:"["+r[0]+"m",close:"["+r[1]+"m"}}),Object.defineProperty(e,t,{value:n,enumerable:!1})}),e}Object.defineProperty(e,"exports",{enumerable:!0,get:t})}).call(t,n(8)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=n(10)();e.exports=function(e){return"string"==typeof e?e.replace(r,""):e}},function(e,t){"use strict";e.exports=function(){return/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g}},function(e,t,n){"use strict";var r=n(10),o=new RegExp(r().source);e.exports=o.test.bind(o)},function(e,t,n){(function(t){"use strict";var n=t.argv,r=n.indexOf("--"),o=function(e){e="--"+e;var t=n.indexOf(e);return t!==-1&&(r===-1||t<r)};e.exports=function(){return"FORCE_COLOR"in t.env||!(o("no-color")||o("no-colors")||o("color=false"))&&(!!(o("color")||o("colors")||o("color=true")||o("color=always"))||!(t.stdout&&!t.stdout.isTTY)&&("win32"===t.platform||("COLORTERM"in t.env||"dumb"!==t.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(t.env.TERM))))}()}).call(t,n(5))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return u("users")}function i(e){return c("users/"+e)}function u(e){return fetch(d+e).then(s,l)}function c(e){var t=new Request(d+e,{method:"DELETE"});return fetch(t).then(s,l)}function s(e){return e.json()}function l(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.deleteUser=i,n(14);var a=n(15),f=r(a),d=(0,f["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3001/":"/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.5cfcaf2b00b6316b861e.js.map