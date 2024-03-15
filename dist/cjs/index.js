"use strict";var n=require("react/jsx-runtime"),e=require("react"),t=function(){return t=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},t.apply(this,arguments)};function r(n,e,t){if(t||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(":root {\n    --mid-width: 18rem;\n    --shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;\n}\n\n\n.input-div {\n    display: flex;\n    align-items: center;\n    border: 1px solid gray;\n    width: min-content;\n    padding-inline: 0.6rem;\n    border-radius: 5px;\n    justify-content: space-between;\n    gap: 2px;\n    font-family: monospace;\n    cursor: pointer;\n    position: relative;\n    margin-left: 30%;\n    background-color: inherit;\n}\n\n\n.input-div>p {\n    font-weight: 500;\n    white-space: pre;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.input-div>svg {\n    margin-left: 1rem;\n}\n\n.calender-div {\n    color: inherit;\n    position: absolute;\n    background-color: inherit;\n    border-radius: 15px;\n    height: 20rem;\n    padding-bottom: 1rem;\n    width: var(--mid-width);\n    top: 110%;\n    left: 50%;\n    transform: scale(0.7) translateX(-50%);\n    transition: all 0.2s;\n    opacity: 0;\n    box-shadow: var(--shadow);\n    z-index: 10000;\n}\n\n.calender-open {\n    transform: translateX(-50%) scale(1);\n    opacity: 1;\n}\n\n.calender-main {\n    padding-top: 10px;\n    height: 100%;\n    width: 100%;\n    color: inherit;\n    cursor: auto;\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n}\n\n.calender-header {\n    padding-top: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-inline: 15px;\n}\n\n.calender-header>h2 {\n    font-size: 1rem;\n    color: inherit;\n    margin: 0;\n    text-align: start;\n}\n\n.calender-header>span>button {\n    background-color: transparent;\n    padding: 0;\n    border: none;\n    cursor: pointer;\n}\n\n.calender-grid {\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 2rem);\n    grid-template-rows: 2rem;\n    grid-auto-rows: 2rem;\n    column-gap: 8px;\n    row-gap: 10px;\n}\n\n.calender-grid>span {\n    text-align: center;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n\n.calender-grid-header {\n    padding-top: 10px;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(7, 2rem);\n    grid-template-rows: 2rem;\n    column-gap: 8px;\n    row-gap: 10px;\n}\n\n.calender-grid-header>span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.calender-swipe-container {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex;\n    position: relative;\n}\n\n\n.calender-swipe-item {\n    position: absolute;\n    transition: transform 0.3s ease-out;\n    display: grid;\n    place-items: center;\n    width: 100%;\n    min-width: var(--mid-width);\n    top: 0;\n    right: 0;\n    left: 0;\n}\n\n\n.year-button>button {\n    border-radius: 50%;\n    aspect-ratio: 1;\n    cursor: pointer;\n    transition: all 0.3s;\n    background-color: transparent;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.year-selector-list {\n    list-style: none;\n    position: absolute;\n    height: auto;\n    width: 100%;\n    z-index: 5000;\n    top: 120%;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    gap: 10px;\n    max-height: 20rem;\n    overflow-y: scroll;\n    border-radius: 10px;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    transition: transform 0.2s;\n    transform-origin: top center;\n}\n\n.year-selector-list>li {\n    text-align: center;\n    padding-block: 0.3rem;\n}\n\n.year-selector-list>li>button {\n    background-color: transparent;\n    border: none;\n    padding-block: 5px;\n    padding-inline: 10px;\n    border-radius: 5rem;\n    cursor: pointer;\n    font-weight: bolder;\n    font-size: large;\n}\n\n.year-selector-list::-webkit-scrollbar {\n    display: none;\n}\n\n.hour-clock {\n    position: relative;\n    width: 200px;\n    height: 200px;\n    isolation: isolate;\n    cursor: auto;\n    display: grid;\n}\n\n.hour-clock-container {\n    background-color: inherit;\n    height: 280px;\n    width: 250px;\n    border-radius: 0.8rem;\n    box-shadow: var(--shadow);\n    position: absolute;\n    top: 120%;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    user-select: none;\n    padding-top: 15px;\n    cursor: auto;\n    transition: all 0.3s;\n    transform: scale(0.7);\n    opacity: 0;\n}\n\n\n.hour-clock-numbers {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    line-height: 20px;\n    font-size: 14px;\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    cursor: pointer;\n\n}\n\n.clock-pointer {\n    position: absolute;\n    height: 10px;\n    height: 85px;\n    width: 2px;\n    transform-origin: top center;\n    top: 50%;\n    transition: transform 0.3s;\n    transform: rotate(0deg) translate(50%, -100%);\n    justify-self: center;\n}\n\n.clock-pointer>span {\n    position: absolute;\n    height: 30px;\n    aspect-ratio: 1;\n    background-color: inherit;\n    transform: translate(-50%, -100%);\n    opacity: 0.3;\n    border-radius: 50%;\n}\n\n.clock-pointer::before {\n    content: '';\n    position: absolute;\n    inset: 0 -10px;\n}\n\n\n.clock-button-container {\n    display: flex;\n    justify-content: space-between;\n    width: 80%;\n}\n\n.clock-button-container>button {\n    border: none;\n    padding: 0;\n    background-color: transparent;\n    font-weight: bold;\n    aspect-ratio: 1;\n    height: 30px;\n    border-radius: 50%;\n    cursor: pointer;\n    position: relative;\n}\n\n.clock-close {\n    transform: scale(1);\n    opacity: 1;\n}\n\n@media (hover: hover) {\n    .year-button>button:hover {\n        background-color: rgba(128, 128, 128, 0.22)\n    }\n\n    .calender-grid>span:hover {\n        background-color: rgba(128, 128, 128, 0.12);\n    }\n\n    .year-selector-list>li>button:hover {\n        background-color: rgba(128, 128, 128, 0.22);\n    }\n\n    .clock-button-container>button:hover {\n        background-color: rgba(128, 128, 128, 0.22);\n    }\n}");var o=function(e){var t=e.height,r=e.color;return n.jsxs("svg",{height:t,style:{minWidth:"".concat(t,"px")},viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),n.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",n.jsx("path",{d:"M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function a(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var i={exports:{}},s=a(i.exports=function(){var n=1e3,e=6e4,t=36e5,r="millisecond",o="second",a="minute",i="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var e=["th","st","nd","rd"],t=n%100;return"["+n+(e[(t-20)%10]||e[t]||e[0])+"]"}},y=function(n,e,t){var r=String(n);return!r||r.length>=e?n:""+Array(e+1-r.length).join(t)+n},v={s:y,z:function(n){var e=-n.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),o=t%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function n(e,t){if(e.date()<t.date())return-n(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),o=e.clone().add(r,l),a=t-o<0,i=e.clone().add(r+(a?-1:1),l);return+(-(r+(t-o)/(a?o-i:i-o))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:l,y:d,w:c,d:s,D:h,h:i,m:a,s:o,ms:r,Q:u}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},x="en",b={};b[x]=g;var C="$isDayjsObject",k=function(n){return n instanceof Y||!(!n||!n[C])},w=function n(e,t,r){var o;if(!e)return x;if("string"==typeof e){var a=e.toLowerCase();b[a]&&(o=a),t&&(b[a]=t,o=a);var i=e.split("-");if(!o&&i.length>1)return n(i[0])}else{var s=e.name;b[s]=e,o=s}return!r&&o&&(x=o),o||!r&&x},D=function(n,e){if(k(n))return n.clone();var t="object"==typeof e?e:{};return t.date=n,t.args=arguments,new Y(t)},M=v;M.l=w,M.i=k,M.w=function(n,e){return D(n,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function g(n){this.$L=w(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[C]=!0}var y=g.prototype;return y.parse=function(n){this.$d=function(n){var e=n.date,t=n.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var o=r[2]-1||0,a=(r[7]||"0").substring(0,3);return t?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(n),this.init()},y.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},y.$utils=function(){return M},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(n,e){var t=D(n);return this.startOf(e)<=t&&t<=this.endOf(e)},y.isAfter=function(n,e){return D(n)<this.startOf(e)},y.isBefore=function(n,e){return this.endOf(e)<D(n)},y.$g=function(n,e,t){return M.u(n)?this[e]:this.set(t,n)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(n,e){var t=this,r=!!M.u(e)||e,u=M.p(n),f=function(n,e){var o=M.w(t.$u?Date.UTC(t.$y,e,n):new Date(t.$y,e,n),t);return r?o:o.endOf(s)},p=function(n,e){return M.w(t.toDate()[n].apply(t.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),t)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,g):f(0,g+1);case c:var x=this.$locale().weekStart||0,b=(m<x?m+7:m)-x;return f(r?y-b:y+(6-b),g);case s:case h:return p(v+"Hours",0);case i:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(n){return this.startOf(n,!1)},y.$set=function(n,e){var t,c=M.p(n),u="set"+(this.$u?"UTC":""),f=(t={},t[s]=u+"Date",t[h]=u+"Date",t[l]=u+"Month",t[d]=u+"FullYear",t[i]=u+"Hours",t[a]=u+"Minutes",t[o]=u+"Seconds",t[r]=u+"Milliseconds",t)[c],p=c===s?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(n,e){return this.clone().$set(n,e)},y.get=function(n){return this[M.p(n)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=M.p(u),m=function(n){var e=D(f);return M.w(e.date(e.date()+Math.round(n*r)),f)};if(p===l)return this.set(l,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===c)return m(7);var g=(h={},h[a]=e,h[i]=t,h[o]=n,h)[p]||1,y=this.$d.getTime()+r*g;return M.w(y,this)},y.subtract=function(n,e){return this.add(-1*n,e)},y.format=function(n){var e=this,t=this.$locale();if(!this.isValid())return t.invalidDate||f;var r=n||"YYYY-MM-DDTHH:mm:ssZ",o=M.z(this),a=this.$H,i=this.$m,s=this.$M,c=t.weekdays,l=t.months,u=t.meridiem,d=function(n,t,o,a){return n&&(n[t]||n(e,r))||o[t].slice(0,a)},h=function(n){return M.s(a%12||12,n,"0")},p=u||function(n,e,t){var r=n<12?"AM":"PM";return t?r.toLowerCase():r};return r.replace(m,(function(n,r){return r||function(n){switch(n){case"YY":return String(e.$y).slice(-2);case"YYYY":return M.s(e.$y,4,"0");case"M":return s+1;case"MM":return M.s(s+1,2,"0");case"MMM":return d(t.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return e.$D;case"DD":return M.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(t.weekdaysMin,e.$W,c,2);case"ddd":return d(t.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return M.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,i,!0);case"A":return p(a,i,!1);case"m":return String(i);case"mm":return M.s(i,2,"0");case"s":return String(e.$s);case"ss":return M.s(e.$s,2,"0");case"SSS":return M.s(e.$ms,3,"0");case"Z":return o}return null}(n)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=this,g=M.p(h),y=D(r),v=(y.utcOffset()-this.utcOffset())*e,x=this-y,b=function(){return M.m(m,y)};switch(g){case d:p=b()/12;break;case l:p=b();break;case u:p=b()/3;break;case c:p=(x-v)/6048e5;break;case s:p=(x-v)/864e5;break;case i:p=x/t;break;case a:p=x/e;break;case o:p=x/n;break;default:p=x}return f?p:M.a(p)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return b[this.$L]},y.locale=function(n,e){if(!n)return this.$L;var t=this.clone(),r=w(n,e,!0);return r&&(t.$L=r),t},y.clone=function(){return M.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),$=Y.prototype;return D.prototype=$,[["$ms",r],["$s",o],["$m",a],["$H",i],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(n){$[n[1]]=function(e){return this.$g(e,n[0],n[1])}})),D.extend=function(n,e){return n.$i||(n(e,Y,D),n.$i=!0),D},D.locale=w,D.isDayjs=k,D.unix=function(n){return D(1e3*n)},D.en=b[x],D.Ls=b,D.p={},D}()),c=function(e){var t=e.rotate;return n.jsxs("svg",{fill:"gray",height:"20px",viewBox:"0 0 24 24",style:{transform:"".concat(t?"rotate(180deg)":"")},children:[n.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),n.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",n.jsx("path",{d:"M14.657 18.657a1 1 0 0 1-.707-.293l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-.707 1.707z"})," "]})]})},l=function(){return n.jsxs("svg",{fill:"gray",height:"10px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),n.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("g",{id:"SVGRepo_iconCarrier",children:n.jsx("path",{d:"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"})})]})},u=function(n){for(var e=n.month,t=n.year,o=s().year(t).month(e),a=o.startOf("month"),i=o.endOf("month"),c=a,l=[];c.isBefore(i)||c.isSame(i);)l.push(c.format("MM-DD-YYYY")),c=c.add(1,"day");return Array(a.day()).fill(null).forEach((function(){l=r([null],l,!0)})),Array(0===i.day()?0:6-i.day()).fill(null).forEach((function(){return l.push(null)})),l},d=function(t){var o=t.open,a=e.useContext(f),i=a.clockFontColor,s=a.clockPointerColor,c=a.dateStr,l=a.popUpBackgroundColor,u=a.selectedFontColor,d=a.setShowClock,h=a.changeDate,p=a.handleOutClose,m=a.mode,g=a.clos,y=a.setClose,v=e.useRef(null),x=e.useRef(null),b=e.useState(!1),C=b[0],k=b[1],w=e.useState(!0),D=w[0],M=w[1],Y=e.useState(!1),$=Y[0],j=Y[1],S=e.useCallback((function(){for(var e=[],t=C?r([],Array(12),!0).map((function(n,e){return 5*e})):r([],Array(12),!0).map((function(n,e){return e+1})),o=C?4:3,a=1;a<=12;a++){var i=30*(a-o)*Math.PI/180,s=100*Math.cos(i)+100,c=100*Math.sin(i)+100;e.push(n.jsx("div",{className:"hour-clock-numbers",style:{left:"".concat(s,"px"),top:"".concat(c,"px")},children:t[a-1]},a))}return e}),[C]),L=e.useCallback((function(n){var e=v.current;if(e){var t=e.getBoundingClientRect(),r=n.clientX-t.left,o=n.clientY-t.top,a=(Math.floor(180*Math.atan2(o-100,r-100)/Math.PI+90)+360)%360;if(C){var i=Math.ceil(a/6);M(6*i%30==0),x.current.style.transform="rotate(".concat(6*i,"deg) translate(50%, -100%)");var s=i%60==0?"00":"".concat(i);h("minutes",s),p(n)}else{var l=Math.round(a%360/30)%12;x.current.style.transform="rotate(".concat(30*l,"deg) translate(50%, -100%)");var u=0===l?"12":l<10?"0".concat(l):l.toString();if(c.hour===u)return void k(!0);h("hour",u)}}}),[C,c,o]),O=e.useCallback((function(n){if(C&&$){var e=v.current;if(e){var t=e.getBoundingClientRect(),r=n.clientX-t.left,o=n.clientY-t.top,a=(Math.floor(180*Math.atan2(o-100,r-100)/Math.PI+90)+360)%360,i=Math.ceil(a/6);M(6*i%30==0),x.current.style.transform="rotate(".concat(6*i,"deg) translate(50%, -100%)");var s=i%60==0?"00":"".concat(i);h("minutes",s)}}}),[$]),R=e.useCallback((function(n){h("timeRange",n)}),[c]);return e.useEffect((function(){var n;return null===(n=v.current)||void 0===n||n.addEventListener("mousemove",O),function(){var n;return null===(n=v.current)||void 0===n?void 0:n.removeEventListener("mousemove",O)}}),[$]),e.useEffect((function(){if(o){var n="hh"!==(null==c?void 0:c.hour)&&parseInt(c.hour),e="mm"!==(null==c?void 0:c.minutes)&&parseInt(c.minutes);!C&&n?x.current.style.transform="rotate(".concat(n%12*30,"deg) translate(50%, -100%)"):!1!==e&&(M(6*e%30==0),x.current.style.transform="rotate(".concat(6*e,"deg) translate(50%, -100%)"))}}),[C,o]),e.useEffect((function(){o&&y(!0)}),[o]),(g||o)&&n.jsxs("main",{onTransitionEnd:function(n){n.target!==n.currentTarget||o||("time picker"!==m?(y(!1),d(!1)):(y(!1),M(!0),k(!1)))},className:"hour-clock-container ".concat(g&&o&&"clock-close"),style:{color:i,backgroundColor:l},children:[n.jsxs("div",{className:"hour-clock",onClick:L,ref:v,children:[S(),n.jsx("div",{style:{backgroundColor:s},className:"clock-pointer",ref:x,onMouseDown:function(n){!$&&C&&(n.stopPropagation(),j(!0),n.currentTarget.style.cursor="grabbing")},onMouseUp:function(n){$&&C&&(n.stopPropagation(),j(!1),n.currentTarget.style.cursor="auto")},onTransitionEnd:function(){k(!0)},children:n.jsx("span",{style:{display:D?"initial":"none"}})})]}),n.jsxs("section",{className:"clock-button-container",children:[n.jsx("button",{style:{color:"am"===c.timeRange?u:i,backgroundColor:"am"===c.timeRange?s:""},onClick:function(){return R("am")},children:"Am"}),n.jsx("button",{style:{color:"pm"===c.timeRange?u:i,backgroundColor:"pm"===c.timeRange?s:""},onClick:function(){return R("pm")},children:"Pm"})]})]})},h=s(),f=e.createContext({}),p=function(o){var a=o.open,i=o.color,l=o.currentDay,d=e.useContext(f),p=d.yearRange,y=d.popUpBackgroundColor,v=d.dateStr,x=d.changeDate,b=e.useState(!1),C=b[0],k=b[1],w=e.useState((function(){var n=isNaN(parseInt(v.month))?h.month():parseInt(v.month)-1,e=isNaN(parseInt(v.year))?h.year():parseInt(v.year),t=v,r=t.date,o=t.month,a=t.year;return{month:n,year:e,date:s(o+"-"+r+"-"+a).format("MM-DD-YYYY"),dayList:u({month:n,year:e})}})),D=w[0],M=w[1],Y=e.useState([n.jsx(m,{handleDayChange:function(e){M(t(t({},D),{date:e.format("MM-DD-YYYY")})),x("date",e.format("MM-DD-YYYY")),j([n.jsx(m,{handleDayChange:R,selectedDay:e.format("MM-DD-YYYY"),currentDay:l,dayList:D.dayList,setList:j,left:"0%"},e.toString())])},selectedDay:D.date,dayList:D.dayList,currentDay:l},"num-1")]),$=Y[0],j=Y[1],S=e.useState(null),L=S[0],O=S[1],R=function(e){var r=e.format("MM-DD-YYYY");M(t(t({},D),{date:r,dayList:u({month:e.month(),year:e.year()})})),x("date",r),j([n.jsx(m,{handleDayChange:R,selectedDay:r,currentDay:l,dayList:u({month:e.month(),year:e.year()}),setList:j,left:"0%"},e.toString())])};return e.useEffect((function(){a&&k(!0)}),[a]),e.useEffect((function(){if(null!=L){var n=$.map((function(n,t){return e.cloneElement(n,{left:t===$.length-1?"0%":"".concat("next"===L?"-100%":"100%"),list:$})}));j(n),O(null)}}),[$,L]),(C||a)&&n.jsx("div",{className:"calender-div ".concat(C&&a?"calender-open":""),style:{color:i,backgroundColor:y},onTransitionEnd:function(){a||k(!1)},children:n.jsxs("div",{className:"calender-main",children:[n.jsxs("div",{className:"calender-header",children:[n.jsxs("h2",{style:{display:"flex",position:"relative"},children:[h.year(D.year).month(D.month).format("MMMM YYYY"),n.jsx(g,{handleClick:function(e){var r=D.month,o=s(D.date).date();if("YYYY"!==v.year){var a=h.year(e).month(r).date(o),i=u({month:a.month(),year:a.year()});M(t(t({},D),{year:a.year(),dayList:i,date:a.format("MM-DD-YYYY")})),x("date",a.format("MM-DD-YYYY")),j([n.jsx(m,{handleDayChange:R,selectedDay:a.format("MM-DD-YYYY"),currentDay:l,dayList:i,position:"change",setList:j,left:"0%"},a.toString())])}else{a=h.year(e).month(r).date(o),i=u({month:D.month,year:e});M(t(t({},D),{year:e,dayList:i})),j([n.jsx(m,{handleDayChange:R,selectedDay:D.date,currentDay:l,dayList:i,position:"change",setList:j,left:"0%"},a.toString())])}},currentYear:D.year})]}),n.jsxs("span",{style:{display:"flex",gap:15},children:[n.jsx("button",{onClick:function(){if(!($.length>1)){var e=D.date,o=D.month,a=D.year,i=h.year(a).month(o).subtract(1,"month");if(!(i.year()<p.startYear)){var s=u({month:i.month(),year:i.year()});M(t(t({},D),{month:i.month(),year:i.year(),dayList:s}));var c=r(r([],$,!0),[n.jsx(m,{handleDayChange:R,selectedDay:e,currentDay:l,dayList:s,position:"change",setList:j,left:"-100%"},i.toString())],!1);j(c),O("prev")}}},children:n.jsx(c,{})}),n.jsx("button",{onClick:function(){if(!($.length>1)){var e=D.date,o=D.month,a=D.year,i=h.year(a).month(o).add(1,"month");if(!(i.year()>p.endYear)){var s=u({month:i.month(),year:i.year()});M(t(t({},D),{month:i.month(),year:i.year(),dayList:s}));var c=r(r([],$,!0),[n.jsx(m,{handleDayChange:R,selectedDay:e,currentDay:l,dayList:s,position:"change",setList:j,left:"100%"},i.toString())],!1);j(c),O("next")}}},children:n.jsx(c,{rotate:!0})})]})]}),n.jsx("section",{className:"calender-grid-header",children:["S","M","T","W","T","F","S"].map((function(e,t){return n.jsx("span",{style:{color:"gray"},children:e},"weekname-".concat(t))}))}),n.jsx("section",{className:"calender-swipe-container",children:$.map((function(n,e){return n}))})]})})},m=function(t){var r=t.dayList,o=t.currentDay,a=t.left,i=t.list,c=t.position,l=t.setList,u=t.selectedDay,d=t.handleDayChange,p=e.useContext(f),m=p.calenderFontColor,g=p.selectedFontColor,y=p.setShowClock,v=p.mode,x=p.handleOutClose;return n.jsx("div",{className:"calender-swipe-item",style:{transform:"translateX(".concat(null!=a?a:"0%",")")},onTransitionEnd:function(n){if(null!=c&&null!=l&&null!=c){var t=i.slice(1).map((function(n){return e.cloneElement(n,{position:null,left:"0%"})}));l(t)}},children:n.jsx("div",{className:"calender-grid",children:r.map((function(e,t){return n.jsx("span",{style:{border:e===h.format("MM-DD-YYYY")&&u!==e?"1px solid ".concat(o):"",visibility:null==e?"hidden":"initial",backgroundColor:u===e?m:"",color:u===e?g:""},onClick:function(n){n.stopPropagation(),d(s(e)),"date picker"===v?x(n):y(!0)},children:null!=e&&s(e).date()},"date-".concat(t))}))})})},g=function(t){var r=t.currentYear,o=t.handleClick,a=e.useRef(null),i=e.useState(!1),s=i[0],c=i[1],u=e.useContext(f),d=u.yearSelectorBackgroundColor,h=u.calenderFontColor,p=u.yearRange,m=e.useMemo((function(){var n=p,e=n.endYear,t=n.startYear;return Array.from({length:e-t+1}).map((function(n,e){return t+e}))}),[]);return e.useEffect((function(){if(a.current){var n=a.current.querySelector("li:nth-child(".concat(r-p.startYear,")"));if(n){var e=a.current.offsetTop,t=n.offsetTop;a.current.scrollTo({top:t-e,behavior:"smooth"})}}}),[r]),n.jsxs("div",{className:"year-selector-div",children:[n.jsx("div",{className:"year-button",children:n.jsx("button",{onClick:function(n){c(!s)},style:{transform:"rotate(".concat(s?"-180deg":"0deg",")")},children:n.jsx(l,{})})}),n.jsx("ul",{ref:a,className:"year-selector-list",style:{transform:"scale(".concat(s?"100%":"0%",")"),backgroundColor:d},children:m.map((function(e){return n.jsx("li",{children:n.jsx("button",{style:{color:e===r?d:h,backgroundColor:e!==r?"":h},onClick:function(){o(e),c(!1)},children:e})},e)}))})]})};exports.DateTimePicker=function(r){var a=r.FontColor,i=void 0===a?"gray":a,s=r.CalenderLogoColor,c=void 0===s?"gray":s,l=r.borderColor,u=void 0===l?"gray":l,m=r.borderWidth,g=void 0===m?1:m,y=r.width,v=void 0===y?"min-content":y,x=r.calenderSize,b=void 0===x?25:x,C=r.focusBorderColor,k=void 0===C?"dodgerblue":C,w=r.calenderFontColor,D=void 0===w?"dodgerblue":w,M=r.currentDayIndicatorCOlor,Y=void 0===M?"gray":M,$=r.yearSelectorBackgroundColor,j=void 0===$?"white":$,S=r.yearRange,L=void 0===S?{startYear:1950,endYear:2100}:S,O=r.onChange,R=void 0===O?function(){}:O,E=r.clockFontColor,T=void 0===E?"gray":E,_=r.clockPointerColor,I=void 0===_?"dodgerblue":_,N=r.selectedFontColor,B=void 0===N?"white":N,A=r.defaultDate,F=r.mode,W=void 0===F?"date time picker":F,H=e.useRef(null),V=e.useState(!1),P=V[0],z=V[1],G=e.useState(!1),U=G[0],X=G[1],Z=e.useState((function(){if(null==A)return{date:"DD",month:"MM",year:"YYYY",hour:"hh",minutes:"mm",timeRange:"aa"};var n=A.date,e=A.hour,t=A.minutes,r=A.month,o=A.year,a=parseInt(o),i=parseInt(r),s=parseInt(e),c=parseInt(t),l=parseInt(n);if("date picker"===W||"date time picker"===W){if(null==o||a<L.startYear||a>L.endYear)throw Error("Year In defaultDate Must Be Between Year Range. Default Year Range Is 1950 And 2100");if(null==i||i<1||i>12)throw Error("Month In defaultDate Must Be Between 1 And 12.");if(null==l||l<1||l>h.year(a).month(i-1).endOf("month").date())throw Error("Date in defaultDate Is Not Valid.")}if("time picker"===W||"date time picker"===W){if(s<1||s>12)throw Error("Hour In defaultDate Must Be Between 1 And 12.");if(c<1||c>60)throw Error("Minutes In defaultDate Must Be Between 1 And 60.")}return A})),q=Z[0],J=Z[1],Q=e.useState("time picker"===W),K=Q[0],nn=Q[1],en=e.useCallback((function(){z(!0),"date picker"===W&&X(!0)}),[]),tn=e.useCallback((function(n){H.current&&!H.current.contains(n.target)&&(z(!1),R(rn()))}),[]),rn=e.useCallback((function(){return"date picker"===W?"".concat(q.date,"/").concat(q.month,"/").concat(q.year):"time picker"===W?"".concat(q.hour,"/").concat(q.minutes," ").concat(q.timeRange):"".concat(q.date,"/").concat(q.month,"/").concat(q.year," ").concat(q.hour,"/").concat(q.minutes," ").concat(q.timeRange)}),[q]);return e.useEffect((function(){if(L.endYear<L.startYear)throw Error("start year must be smaller than end Year");return document.addEventListener("click",tn),function(){return document.removeEventListener("click",tn)}}),[]),e.useEffect((function(){P||R(rn())}),[P]),n.jsxs("div",{className:"input-div",ref:H,onClick:en,style:{borderColor:P?k:u,borderWidth:g,width:v,color:i},children:[n.jsx("p",{children:rn()}),n.jsx(o,{height:b,color:c}),n.jsx(f.Provider,{value:{FontColor:i,CalenderLogoColor:c,borderColor:u,borderWidth:g,width:v,calenderSize:b,focusBorderColor:k,calenderFontColor:D,currentDayIndicatorCOlor:Y,yearSelectorBackgroundColor:j,setDateStr:J,yearRange:L,setShowClock:nn,clockFontColor:T,clockPointerColor:I,dateStr:q,selectedFontColor:B,changeDate:function(n,e){q.date,q.hour;var r=q.minutes;if(q.month,q.timeRange,q.year,"date"===n){var o=e.split("-");J("mm"===r?{date:o[1],month:o[0],year:o[2],hour:"12",minutes:"00",timeRange:"am"}:t(t({},q),{date:o[1],month:o[0],year:o[2]}))}else"hour"===n?J(t(t({},q),{hour:e})):"minutes"===n?J(t(t({},q),{minutes:1!==e.length?e:"0"+e})):"timeRange"===n&&J(t(t({},q),{timeRange:e}))},handleOutClose:function(n){n.stopPropagation(),z(!1)},mode:W,clos:U,setClose:X},children:K?n.jsx(d,{open:P}):n.jsx(p,{open:P,color:D,currentDay:Y})})]})};
//# sourceMappingURL=index.js.map