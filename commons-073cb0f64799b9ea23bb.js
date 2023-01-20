/*! For license information please see commons-073cb0f64799b9ea23bb.js.LICENSE.txt */
(self.webpackChunkminh_thanh_portfolio=self.webpackChunkminh_thanh_portfolio||[]).push([[351],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var M=typeof n;if("string"===M||"number"===M)t.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&t.push(o)}}else if("object"===M)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&t.push(u);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function M(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var u,a,c,s;if(Array.isArray(t)){if((u=t.length)!=o.length)return!1;for(a=u;0!=a--;)if(!M(t[a],o[a]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(s=t.entries();!(a=s.next()).done;)if(!o.has(a.value[0]))return!1;for(s=t.entries();!(a=s.next()).done;)if(!M(a.value[1],o.get(a.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(s=t.entries();!(a=s.next()).done;)if(!o.has(a.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((u=t.length)!=o.length)return!1;for(a=u;0!=a--;)if(t[a]!==o[a])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((u=(c=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(a=u;0!=a--;)if(!Object.prototype.hasOwnProperty.call(o,c[a]))return!1;if(e&&t instanceof Element)return!1;for(a=u;0!=a--;)if(("_owner"!==c[a]&&"__v"!==c[a]&&"__o"!==c[a]||!t.$$typeof)&&!M(t[c[a]],o[c[a]]))return!1;return!0}return t!=t&&o!=o}t.exports=function(t,e){try{return M(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),M=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,c=[];function s(){a=t(c.map((function(t){return t.props}))),w.canUseDOM?e(a):n&&(a=n(a))}var w=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return a},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=a;return a=void 0,c=[],t};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),s()},o.render=function(){return M.createElement(r,this.props)},i}(i.PureComponent);return o(w,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),o(w,"canUseDOM",u),w}}},7505:function(t,e,n){"use strict";n.d(e,{JO:function(){return a},Ar:function(){return i.A},pQ:function(){return r.Z}});var r=n(3751),i=(n(565),n(4845)),M=n(7294),o=n(5900),u=n.n(o),a=function(t){var e,n=t.name,r=t.className,i=void 0===r?"":r,o=t.size,a=o?{width:o,height:o}:{},s=u()(((e={"layout-icon-wrapper":!0})[i]=i,e));return M.createElement("img",{src:c[n],style:a,className:s})},c={mail:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTQgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTQgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTkzLjA5LDc2LjIyNGMwLjA0Ny0wLjE0NSwwLjA3OS0wLjI5OCwwLjA3OS0wLjQ1OVYyMi42MzhjMC0wLjE2Mi0wLjAzMi0wLjMxNi0wLjA4LTAuNDYyICBjLTAuMDA3LTAuMDItMC4wMTEtMC4wNC0wLjAxOS0wLjA2Yy0wLjA2NC0wLjE3MS0wLjE1OC0wLjMyNS0wLjI3Ni0wLjQ2Yy0wLjAwOC0wLjAwOS0wLjAwOS0wLjAyLTAuMDE3LTAuMDI5ICBjLTAuMDA1LTAuMDA1LTAuMDExLTAuMDA3LTAuMDE2LTAuMDEyYy0wLjEyNi0wLjEzNC0wLjI3NS0wLjI0Mi0wLjQ0Mi0wLjMyM2MtMC4wMTMtMC4wMDYtMC4wMjMtMC4wMTQtMC4wMzYtMC4wMiAgYy0wLjE1OC0wLjA3MS0wLjMzLTAuMTExLTAuNTExLTAuMTIzYy0wLjAxOC0wLjAwMS0wLjAzNS0wLjAwNS0wLjA1My0wLjAwNWMtMC4wMTctMC4wMDEtMC4wMzItMC4wMDUtMC4wNDktMC4wMDVIOC40NjUgIGMtMC4wMTcsMC0wLjAzMywwLjAwNC0wLjA1LDAuMDA1Yy0wLjAxNiwwLjAwMS0wLjAzMiwwLjAwNC0wLjA0OCwwLjAwNWMtMC4xODMsMC4wMTItMC4zNTgsMC4wNTMtMC41MTgsMC4xMjUgIGMtMC4wMSwwLjAwNC0wLjAxOCwwLjAxMS0wLjAyOCwwLjAxNWMtMC4xNywwLjA4MS0wLjMyMSwwLjE5MS0wLjQ0OCwwLjMyN2MtMC4wMDUsMC4wMDUtMC4wMTEsMC4wMDYtMC4wMTYsMC4wMTEgIGMtMC4wMDgsMC4wMDgtMC4wMDksMC4wMTktMC4wMTcsMC4wMjhjLTAuMTE4LDAuMTM1LTAuMjEzLDAuMjktMC4yNzcsMC40NjFjLTAuMDA4LDAuMDItMC4wMTIsMC4wNC0wLjAxOSwwLjA2MSAgYy0wLjA0OCwwLjE0Ni0wLjA4LDAuMy0wLjA4LDAuNDYydjUzLjEyOGMwLDAuMTY0LDAuMDMzLDAuMzIsMC4wODIsMC40NjhjMC4wMDcsMC4wMiwwLjAxMSwwLjAzOSwwLjAxOCwwLjA1OSAgYzAuMDY1LDAuMTcyLDAuMTYxLDAuMzI3LDAuMjgsMC40NjJjMC4wMDcsMC4wMDgsMC4wMDksMC4wMTgsMC4wMTYsMC4wMjZjMC4wMDYsMC4wMDcsMC4wMTQsMC4wMTEsMC4wMjEsMC4wMTggIGMwLjA0OSwwLjA1MSwwLjEwMywwLjA5NiwwLjE1OSwwLjE0YzAuMDI1LDAuMDE5LDAuMDQ3LDAuMDQyLDAuMDczLDAuMDZjMC4wNjYsMC4wNDYsMC4xMzcsMC4wODMsMC4yMSwwLjExNyAgYzAuMDE4LDAuMDA4LDAuMDM0LDAuMDIxLDAuMDUyLDAuMDI4YzAuMTgxLDAuMDc3LDAuMzgsMC4xMjEsMC41ODksMC4xMjFoODMuMjA0YzAuMjA5LDAsMC40MDgtMC4wNDMsMC41ODktMC4xMjEgIGMwLjAyOC0wLjAxMiwwLjA1NC0wLjAzLDAuMDgxLTAuMDQ0YzAuMDYyLTAuMDMxLDAuMTI0LTAuMDYzLDAuMTgxLTAuMTAyYzAuMDMtMC4wMjEsMC4wNTctMC4wNDgsMC4wODYtMC4wNzEgIGMwLjA1MS0wLjA0MSwwLjEwMS0wLjA4MiwwLjE0NS0wLjEyOWMwLjAwOC0wLjAwOCwwLjAxNy0wLjAxNCwwLjAyNS0wLjAyMmMwLjAwOC0wLjAwOSwwLjAxLTAuMDIxLDAuMDE4LTAuMDMgIGMwLjExNy0wLjEzNCwwLjIxMS0wLjI4OCwwLjI3NS0wLjQ1OEM5My4wNzgsNzYuMjY3LDkzLjA4Myw3Ni4yNDYsOTMuMDksNzYuMjI0eiBNOS45NjUsMjYuMDRsMjUuMjQ3LDIzLjA2MUw5Ljk2NSw3Mi4zNDZWMjYuMDR6ICAgTTYxLjcxMSw0Ny45NzFjLTAuMTA0LDAuMDY4LTAuMjE0LDAuMTI1LTAuMzAxLDAuMjIxYy0wLjAzMywwLjAzNi0wLjA0NCwwLjA4My0wLjA3MywwLjEyMWwtMTEuMjcsMTAuMjk0TDEyLjMzMSwyNC4xMzhoNzUuNDcyICBMNjEuNzExLDQ3Ljk3MXogTTM3LjQzNiw1MS4xMzJsMTEuNjE5LDEwLjYxM2MwLjI4NywwLjI2MiwwLjY0OSwwLjM5MywxLjAxMiwwLjM5M3MwLjcyNS0wLjEzMSwxLjAxMS0wLjM5M2wxMS40NzUtMTAuNDgxICBsMjUuMjQzLDIzLjAwMkgxMi4zMDlMMzcuNDM2LDUxLjEzMnogTTY0Ljc3OCw0OS4yMzJMOTAuMTY5LDI2LjA0djQ2LjMzTDY0Ljc3OCw0OS4yMzJ6Ii8+PC9zdmc+",linkedin:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgNiIgaWQ9IkxheWVyXzYiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwLjQzLDE3LjMxVjQ2LjM5QTQuNjQsNC42NCwwLDAsMSw0NS44MSw1MUgxNy4yMmE0LjY0LDQuNjQsMCwwLDEtNC42Mi00LjYyVjE3LjMxYTQuNjQsNC42NCwwLDAsMSw0LjYzLTQuNjNINDUuODEiLz48Y2lyY2xlIGN4PSI1MC40OCIgY3k9IjEzLjk4IiByPSIxIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjguOTIsMjguMDhoNXYxLjY0aC4xYy42NC0xLDEuNy0yLDQuMzEtMiwzLjIzLDAsNS42NCwyLjEzLDUuNjQsNi43N3Y5LjM1aC00LjlWMzUuMTFjMC0yLS43MS0zLjQyLTIuNDgtMy40MmEyLjYyLDIuNjIsMCwwLDAtMi40OCwxLjg0QTMuNSwzLjUsMCwwLDAsMzQsMzQuNzV2OS4xaC00LjlWMzIiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjI1LjIgMzIuMDggMjUuMiA0My45OCAyMC4zMSA0My45OCAyMC4zMSAyOC4wOCAyNS4yIDI4LjA4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUuNTIsMjIuNzVBMi43NywyLjc3LDAsMSwxLDIyLjc1LDIwIi8+PC9nPjwvc3ZnPg==",fb:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgNiIgaWQ9IkxheWVyXzYiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwLjU0LDUxSDE3LjIyYTQuNjQsNC42NCwwLDAsMS00LjYzLTQuNjJWMTcuMjhhNC42NCw0LjY0LDAsMCwxLDQuNjMtNC42M0g0NS44Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuNDMsMTcuMjhWNDYuMzZBNC42NCw0LjY0LDAsMCwxLDQ1LjgsNTFoLTkiLz48Y2lyY2xlIGN4PSI1MC40OCIgY3k9IjEzLjk1IiByPSIxIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAuNTQsNTFWMzguNTFoLTQuNFYzMi41N2g0LjRWMjYuODRhNiw2LDAsMCwxLDYtNmg2LjIzdjUuNjVIMzguMjFBMS40NywxLjQ3LDAsMCwwLDM2Ljc0LDI4djQuNTRoNnY2aC02VjUxIi8+PC9nPjwvc3ZnPg==",git:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJnaXRodWIiPjxwYXRoIGQ9Ik0yNTQuNSwxNi41Yy0xMzEuOTk2LDAtMjM5LDEwNy4wMDQtMjM5LDIzOXMxMDcuMDA0LDIzOSwyMzksMjM5czIzOS0xMDcuMDA0LDIzOS0yMzlTMzg2LjQ5NiwxNi41LDI1NC41LDE2LjV6ICAgIE00MTIuODkyLDQxMy44OTJDMzcwLjU4NCw0NTYuMiwzMTQuMzMzLDQ3OS41LDI1NC41LDQ3OS41Yy01OS44MzMsMC0xMTYuMDg0LTIzLjMtMTU4LjM5Mi02NS42MDggICBDNTMuOCwzNzEuNTg0LDMwLjUsMzE1LjMzMywzMC41LDI1NS41YzAtNTkuODMzLDIzLjMtMTE2LjA4NCw2NS42MDgtMTU4LjM5MkMxMzguNDE2LDU0LjgsMTk0LjY2NywzMS41LDI1NC41LDMxLjUgICBjNTkuODMzLDAsMTE2LjA4NCwyMy4zLDE1OC4zOTIsNjUuNjA4QzQ1NS4yLDEzOS40MTYsNDc4LjUsMTk1LjY2Nyw0NzguNSwyNTUuNUM0NzguNSwzMTUuMzMzLDQ1NS4yLDM3MS41ODQsNDEyLjg5Miw0MTMuODkyeiIvPjxwYXRoIGQ9Ik0yNTQsMTE4LjIwNWMtNzUuOTY5LDAtMTM3LjU2Myw2MS41OTQtMTM3LjU2MywxMzcuNTYzYzAsNjAuNzg4LDM5LjQxMiwxMTIuMzQxLDk0LjA3OSwxMzAuNTI3ICAgYzYuODc3LDEuMjYsOS4zODctMi45ODksOS4zODctNi42MTZjMC0zLjI3NS0wLjEyNi0xNC4xMjItMC4xOTMtMjUuNjA4Yy0zOC4yNTMsOC4zMTItNDYuMzM5LTE2LjIyMS00Ni4zMzktMTYuMjIxICAgYy02LjI2My0xNS44ODYtMTUuMjczLTIwLjExNy0xNS4yNzMtMjAuMTE3Yy0xMi41MDItOC41MywwLjk0OC04LjM2MywwLjk0OC04LjM2M2MxMy44MTIsMC45NTcsMjEuMDgzLDE0LjE3MywyMS4wODMsMTQuMTczICAgYzEyLjI3NSwyMS4wMjQsMzIuMjA4LDE0Ljk0NSw0MC4wMzMsMTEuNDE5YzEuMjUtOC44NjYsNC44MS0xNC45NDUsOC43MzItMTguMzcxYy0zMC41MzctMy40NzYtNjIuNjYtMTUuMjgxLTYyLjY2LTY3Ljk5MiAgIGMwLTE1LjAyOSw1LjM2NS0yNy4yODcsMTQuMTQ3LTM2LjkxOGMtMS40MDItMy40OTMtNi4xMzgtMTcuNDg5LDEuMzYtMzYuNDIyYzAsMCwxMS41MzYtMy42OTQsMzcuODMzLDE0LjEwNiAgIGMxMC45NjUtMy4wNjUsMjIuNzI4LTQuNTc2LDM0LjQyNC00LjYyNmMxMS42ODcsMC4wNTEsMjMuNDU5LDEuNTc4LDM0LjQ0MSw0LjY0M2MyNi4yNDctMTcuODE3LDM3LjgtMTQuMTA2LDM3LjgtMTQuMTA2ICAgYzcuNTIzLDE4Ljk1LDIuNzg4LDMyLjkzLDEuMzc3LDM2LjQwNmM4LjgxNiw5LjYzLDE0LjEzOSwyMS44ODksMTQuMTM5LDM2LjkxOGMwLDUyLjg0Ni0zMi4xNzQsNjQuNDgzLTYyLjgyLDY3Ljg5MiAgIGM0Ljk1NCw0LjI2NSw5LjMzNywxMi42MjgsOS4zMzcsMjUuNDU3YzAsMTguMzg4LTAuMTg1LDMzLjIxNS0wLjE4NSwzNy43NDljMCwzLjY2MSwyLjUwMiw3Ljk0Myw5LjQ3MSw2LjU5OSAgIGM1NC42MjYtMTguMjIsOTQuMDA0LTY5Ljc3Miw5NC4wMDQtMTMwLjUyN0MzOTEuNTYzLDE3OS43OTksMzI5Ljk2OSwxMTguMjA1LDI1NCwxMTguMjA1eiIvPjwvZz48L3N2Zz4="}},4845:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});var r=n(7294),i=n(3751),M=n(565),o=function(t){var e=t.children;return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Minh Thanh"}),r.createElement("div",{className:"layout-container bg-cover"},r.createElement(M.v,null),r.createElement("div",{className:"layout-content"},e)))}},565:function(t,e,n){"use strict";n.d(e,{v:function(){return a}});var r=n(7294),i=n(5444),M=n(7505),o=[{name:"PORTFOLIO",link:"/portfolio"},{name:"CONTACT ME",link:"/contact"},{name:"MY CV",link:"https://drive.google.com/file/d/1EfHUhBAr06WHcOocttreh44R6XRdjT9x/view?usp=sharing",isOuterLink:!0}],u=[{iconKey:"mail",link:"mailto:minhthanh3497@gmail.com"},{iconKey:"linkedin",link:"https://www.linkedin.com/in/pnminhthanh/"},{iconKey:"fb",link:"https://www.facebook.com/mthanh97/"},{iconKey:"git",link:"https://github.com/pnminhthanh/",size:30}],a=function(){return r.createElement("div",{className:"layout-menu-container"},r.createElement("div",{className:"layout-menu--information"},r.createElement(i.Link,{to:"/"},r.createElement("div",{className:"layout-menu---information-avatar image-avatar"})),r.createElement("div",{className:"name"},"Phạm Ngọc Minh Thanh"),r.createElement("div",{className:"title"},"Front-end Software Engineer")),r.createElement("div",{className:"layout-menu--navigation-wrapper"},o.map((function(t){return r.createElement(i.Link,{key:"layout-menu--navigation-item-"+t.name,to:t.link,className:"layout-menu--navigation-item",activeClassName:"active"},t.name)}))),r.createElement("div",{className:"layout-menu--keep-in-touch-wrapper"},r.createElement("div",{className:"title"},"Get in touch"),r.createElement("div",{className:"social-buttons"},u.map((function(t){var e="layout-menu--social-item-"+t.iconKey;return r.createElement("a",{key:e,href:t.link,target:"_blank",type:"button"},r.createElement("div",{className:"layout-menu--social-item"},r.createElement(M.JO,{name:t.iconKey,size:t.size})))})))))}},3751:function(t,e,n){"use strict";n.d(e,{Z:function(){return At}});var r,i,M,o,u=n(7294),a=n(5697),c=n.n(a),s=n(4839),w=n.n(s),L=n(2993),l=n.n(L),j=n(6494),y=n.n(j),f="bodyAttributes",T="htmlAttributes",A="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},d=(Object.keys(N).map((function(t){return N[t]})),"charset"),p="cssText",D="href",m="http-equiv",C="innerHTML",g="itemprop",I="name",h="property",z="rel",S="src",O="target",E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",b="defer",x="encodeSpecialCharacters",Y="onChangeClientState",k="titleTemplate",P=Object.keys(E).reduce((function(t,e){return t[E[e]]=e,t}),{}),Q=[N.NOSCRIPT,N.SCRIPT,N.STYLE],U="data-react-helmet",G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},W=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},H=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},J=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(t){var e=K(t,N.TITLE),n=K(t,k);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=K(t,v);return e||r||void 0},V=function(t){return K(t,Y)||function(){}},X=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return R({},t,e)}),{})},_=function(t,e){return e.filter((function(t){return void 0!==t[N.BASE]})).map((function(t){return t[N.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var M=r[i].toLowerCase();if(-1!==t.indexOf(M)&&n[M])return e.concat(n)}return e}),[])},q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+G(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,M=Object.keys(t),o=0;o<M.length;o++){var u=M[o],a=u.toLowerCase();-1===e.indexOf(a)||n===z&&"canonical"===t[n].toLowerCase()||a===z&&"stylesheet"===t[a].toLowerCase()||(n=a),-1===e.indexOf(u)||u!==C&&u!==p&&u!==g||(n=u)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var M=Object.keys(i),o=0;o<M.length;o++){var u=M[o],a=y()({},r[u],i[u]);r[u]=a}return t}),[]).reverse()},K=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,Mt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,M=t.linkTags,o=t.metaTags,u=t.noscriptTags,a=t.onChangeClientState,c=t.scriptTags,s=t.styleTags,w=t.title,L=t.titleAttributes;at(N.BODY,r),at(N.HTML,i),ut(w,L);var l={baseTag:ct(N.BASE,n),linkTags:ct(N.LINK,M),metaTags:ct(N.META,o),noscriptTags:ct(N.NOSCRIPT,u),scriptTags:ct(N.SCRIPT,c),styleTags:ct(N.STYLE,s)},j={},y={};Object.keys(l).forEach((function(t){var e=l[t],n=e.newTags,r=e.oldTags;n.length&&(j[t]=n),r.length&&(y[t]=l[t].oldTags)})),e&&e(),a(t,j,y)},ot=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),at(N.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(U),i=r?r.split(","):[],M=[].concat(i),o=Object.keys(e),u=0;u<o.length;u++){var a=o[u],c=e[a]||"";n.getAttribute(a)!==c&&n.setAttribute(a,c),-1===i.indexOf(a)&&i.push(a);var s=M.indexOf(a);-1!==s&&M.splice(s,1)}for(var w=M.length-1;w>=0;w--)n.removeAttribute(M[w]);i.length===M.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},ct=function(t,e){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),M=[],o=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===p)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(U,"true"),i.some((function(t,e){return o=e,n.isEqualNode(t)}))?i.splice(o,1):M.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),M.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:M}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[E[n]||n]=t[n],e}),e)},Lt=function(t,e,n){switch(t){case N.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[U]=!0,i=wt(n,r),[u.createElement(N.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=st(n),M=ot(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+J(M,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+J(M,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case f:case T:return{toComponent:function(){return wt(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[U]=!0,r);return Object.keys(e).forEach((function(t){var n=E[t]||t;if(n===C||n===p){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),u.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===C||t===p)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+J(r[e],n)+'"';return t?t+" "+i:i}),""),M=r.innerHTML||r.cssText||"",o=-1===Q.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(o?"/>":">"+M+"</"+t+">")}),"")}(t,e,n)}}}},lt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,M=t.linkTags,o=t.metaTags,u=t.noscriptTags,a=t.scriptTags,c=t.styleTags,s=t.title,w=void 0===s?"":s,L=t.titleAttributes;return{base:Lt(N.BASE,e,r),bodyAttributes:Lt(f,n,r),htmlAttributes:Lt(T,i,r),link:Lt(N.LINK,M,r),meta:Lt(N.META,o,r),noscript:Lt(N.NOSCRIPT,u,r),script:Lt(N.SCRIPT,a,r),style:Lt(N.STYLE,c,r),title:Lt(N.TITLE,{title:w,titleAttributes:L},r)}},jt=w()((function(t){return{baseTag:_([D,O],t),bodyAttributes:X(f,t),defer:K(t,b),encode:K(t,x),htmlAttributes:X(T,t),linkTags:q(N.LINK,[z,D],t),metaTags:q(N.META,[I,d,m,h,g],t),noscriptTags:q(N.NOSCRIPT,[C],t),onChangeClientState:V(t),scriptTags:q(N.SCRIPT,[S,C],t),styleTags:q(N.STYLE,[p],t),title:F(t),titleAttributes:X(A,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){Mt(t,(function(){it=null}))})):(Mt(t),it=null)}),lt)((function(){return null})),yt=(i=jt,o=M=function(t){function e(){return Z(this,e),H(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!l()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:e};case N.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,M=t.nestedChildren;return R({},r,((e={})[n.type]=[].concat(r[n.type]||[],[R({},i,this.mapNestedChildrenToProps(n,M))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,M=t.newChildProps,o=t.nestedChildren;switch(r.type){case N.TITLE:return R({},i,((e={})[r.type]=o,e.titleAttributes=R({},M),e));case N.BODY:return R({},i,{bodyAttributes:R({},M)});case N.HTML:return R({},i,{htmlAttributes:R({},M)})}return R({},i,((n={})[r.type]=R({},M),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=R({},e);return Object.keys(t).forEach((function(e){var r;n=R({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return u.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,M=i.children,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[P[n]||n]=t[n],e}),e)}(B(i,["children"]));switch(n.warnOnInvalidChildren(t,M),t.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:o,nestedChildren:M});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:M})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=B(t,["children"]),r=R({},n);return e&&(r=this.mapChildrenToProps(e,r)),u.createElement(i,r)},W(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(u.Component),M.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},M.defaultProps={defer:!0,encodeSpecialCharacters:!0},M.peek=i.peek,M.rewind=function(){var t=i.rewind();return t||(t=lt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},o);yt.renderStatic=yt.rewind;var ft=n(5444);function Tt(t){var e,n,r=t.description,i=t.lang,M=t.meta,o=t.title,a=(0,ft.useStaticQuery)("63159454").site,c=r||a.siteMetadata.description,s=null===(e=a.siteMetadata)||void 0===e?void 0:e.title;return u.createElement(yt,{htmlAttributes:{lang:i},title:o,titleTemplate:s?s+" | Portfolio ":null,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=a.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(M)})}Tt.defaultProps={lang:"en",meta:[],description:""};var At=Tt}}]);
//# sourceMappingURL=commons-073cb0f64799b9ea23bb.js.map