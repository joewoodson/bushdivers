(self.webpackChunk=self.webpackChunk||[]).push([[521],{1490:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f,W:()=>d});var n=r(7484),i=r.n(n),s=r(4110),a=r.n(s),o=r(178),c=r.n(o),l=r(9387),u=r.n(l);i().extend(a()),i().extend(c()),i().extend(u());const f=i();var d=function(t){var e=Math.floor(t/60),r=t%60;return"".concat(e,":").concat(r)}},6521:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>x});var n=r(7294),i=r(6584),s=r(1636),a=r(9680),o=r(7698),c=r(5893);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,s=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m=function(t){var e=t.fleet,r=t.hubs;console.log(e);var o=(0,s.qt)().props.errors,l=d((0,n.useState)({fleet:1,registration:"",hub:"AYMR"}),2),h=l[0],m=l[1];function x(t){var e=t.target.id,r="checkbox"===t.target.type?t.target.checked:t.target.value;m((function(t){return u(u({},t),{},f({},e,r))}))}return(0,c.jsxs)("div",{className:"p-4",children:[(0,c.jsx)(i.Z,{title:"Create Aircraft"}),(0,c.jsx)("div",{className:"lg:w-1/2 bg-white mt-2 p-4 rounded shadow",children:(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.Inertia.post("/admin/aircraft/create",h)},children:[(0,c.jsxs)("div",{className:"my-2",children:[(0,c.jsx)("label",{htmlFor:"fleet",className:"block",children:(0,c.jsx)("span",{className:"text-gray-700",children:"Fleet type"})}),(0,c.jsx)("select",{id:"fleet",value:h.fleet,onChange:x,className:"form-select form",children:e.map((function(t){return(0,c.jsx)("option",{value:t.id,children:t.type},t.id)}))}),o.fleet&&(0,c.jsx)("div",{className:"text-sm text-red-500",children:o.fleet})]}),(0,c.jsxs)("div",{className:"my-2",children:[(0,c.jsx)("label",{htmlFor:"registration",className:"block",children:(0,c.jsx)("span",{className:"text-gray-700",children:"Registration"})}),(0,c.jsx)("input",{id:"registration",value:h.registration,onChange:x,type:"text",className:"form-input form"}),o.registration&&(0,c.jsx)("div",{className:"text-sm text-red-500",children:o.registration})]}),(0,c.jsxs)("div",{className:"my-2",children:[(0,c.jsx)("label",{htmlFor:"hub",className:"block",children:(0,c.jsx)("span",{className:"text-gray-700",children:"Start location"})}),(0,c.jsx)("select",{id:"hub",value:h.hub,onChange:x,className:"form-select form",children:r.map((function(t){return(0,c.jsx)("option",{value:t.identifier,children:t.identifier},t.identifier)}))}),o.hub&&(0,c.jsx)("div",{className:"text-sm text-red-500",children:o.hub})]}),(0,c.jsx)("button",{className:"btn btn-primary",children:"Create Aircraft"})]})})]})};m.layout=function(t){return(0,c.jsx)(o.Z,{children:t,title:"Admin - Create Aircraft",heading:"Creat New Aircraft"})};const x=m},7698:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(7294),i=r(1636),s=(r(2669),r(2629)),a=r(5893);var o=r(1490),c=r(5222);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,s=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const f=function(t){var e=t.heading,r=t.setNavState,s=(0,i.qt)().props.auth,u=l((0,n.useState)((0,o.Z)().utc().format("HH:mm")),2),f=u[0],d=u[1],h=l((0,n.useState)("UTC"),2),m=h[0],x=h[1];return(0,a.jsxs)("header",{className:"flex flex-row justify-between items-center header fixed bg-white shadow left-0 lg:left-64 right-0 py-4 px-4 z-20",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"lg:hidden mr-3 cursor-pointer",onClick:r,children:(0,a.jsx)("i",{className:"material-icons",children:"menu"})}),(0,a.jsx)("h1",{children:e})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-1 md:mr-4",children:(0,a.jsxs)("span",{className:"nav-link cursor-pointer",onMouseOver:function(){d((0,o.Z)().format("HH:mm")),x("local")},onMouseLeave:function(){d((0,o.Z)().utc().format("HH:mm")),x("UTC")},children:[f," ",m]})}),(0,a.jsx)("div",{className:"hidden md:inline-block mr-4",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mx-1",children:(0,a.jsx)(c.Z,{content:"My Finances",direction:"bottom",children:(0,a.jsxs)(i.rU,{href:"/my-finances",children:["$",s.user.balance.toLocaleString(navigator.language)]})})}),(0,a.jsx)("div",{className:"mx-1",children:(0,a.jsx)(c.Z,{content:"My Logbook",direction:"bottom",children:(0,a.jsxs)(i.rU,{href:"/logbook",children:[s.user.points.toLocaleString(navigator.language)," XP"]})})}),(0,a.jsx)("div",{className:"mx-1",children:(0,a.jsx)(c.Z,{content:"Current Airport",direction:"bottom",children:(0,a.jsx)(i.rU,{href:"/airports/".concat(s.user.current_airport_id),className:"ml-2 btn cursor-pointer",children:s.user.current_airport_id})})})]})}),(0,a.jsxs)("div",{className:"flex items-center mx-2",children:[(0,a.jsx)("img",{width:"60",className:"mr-3",src:s.user.rank.image}),(0,a.jsx)(c.Z,{content:"Profile",direction:"bottom",children:(0,a.jsx)(i.rU,{href:"/profile",children:(0,a.jsxs)("span",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"font-semibold text-orange-500 tracking-wide leading-none",children:s.user.name}),(0,a.jsxs)("span",{className:"text-gray-500 text-xs leading-none mt-1",children:[s.user.pilot_id," ",s.user.rank.name]})]})})})]})]})]})};const d=function(t){var e=t.text,r=t.link,n=t.icon,s=t.numeric;return(0,a.jsx)("li",{className:"my-px",children:(0,a.jsxs)(i.rU,{href:r,className:"flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100",children:[(0,a.jsx)("span",{className:"flex items-center justify-center text-lg text-gray-400",children:(0,a.jsx)("i",{className:"material-icons",children:n})}),(0,a.jsx)("span",{className:"ml-3",children:e}),s>=0&&(0,a.jsx)("span",{className:"flex items-center justify-center text-xs text-orange-500 font-semibold bg-orange-100 h-6 px-2 rounded-full ml-auto",children:s})]})})};const h=function(t){var e=t.name;return(0,a.jsx)("li",{className:"my-px",children:(0,a.jsx)("span",{className:"flex font-medium text-sm text-gray-300 px-4 my-2 uppercase",children:e})})};const m=function(t){var e=t.isNavVisible,r=t.setNavState,n=(0,i.qt)().props.auth;return(0,a.jsxs)("aside",{className:"".concat(e?"block":"hidden"," lg:block overflow-auto sidebar fixed top-0 bottom-0 min-h-screen w-64 lg:shadow transform md:translate-x-0 transition-transform duration-150 ease-in bg-white border-r-2 border-orange-500 z-20"),children:[(0,a.jsx)("div",{className:"sidebar-header flex items-center justify-center py-4",children:(0,a.jsxs)("div",{className:"inline-flex items-center",children:[(0,a.jsxs)(i.rU,{href:"/",className:"inline-flex flex-row items-center",children:[(0,a.jsx)("img",{className:"h-9 w-auto",src:"https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png",alt:"logo"}),(0,a.jsx)("span",{className:"leading-10 text-gray-900 text-xl ml-2",children:"Bush Divers"})]}),(0,a.jsx)("i",{onClick:r,className:"lg:hidden cursor-pointer ml-2 material-icons",children:"menu_open"})]})}),(0,a.jsx)("div",{className:"sidebar-content px-4 py-2",children:(0,a.jsxs)("ul",{className:"flex flex-col w-full",children:[(0,a.jsx)(d,{link:"/dashboard",icon:"home",text:"My Crew Page"}),(0,a.jsx)(d,{link:"/live-flights",icon:"near_me",text:"Live Flights"}),(0,a.jsx)(d,{link:"/airports",icon:"business",text:"Airports"}),(0,a.jsx)(h,{name:"HQ"}),(0,a.jsx)(d,{link:"/roster",icon:"people",text:"Roster"}),(0,a.jsx)(d,{link:"/fleet-aircraft",icon:"flight",text:"Fleet"}),(0,a.jsx)(d,{link:"/finances",icon:"account_balance_wallet",text:"Company Finances"}),(0,a.jsx)(d,{link:"/resources",icon:"download",text:"Resources"}),(0,a.jsx)(h,{name:"Contracts"}),(0,a.jsx)(d,{link:"/available-contracts",icon:"assignment_ind",text:"Available Contracts",numeric:n.user.current_bids}),(0,a.jsx)(d,{link:"/contracts",icon:"assignment",text:"Find a Contract"}),(0,a.jsx)(d,{link:"/completed-contracts",icon:"assignment_turned_in",text:"Completed Contracts"}),(0,a.jsx)(d,{link:"/dispatch",icon:"assignment_returned",text:"Flight Dispatch"}),(0,a.jsx)(h,{name:"Pilot Area"}),(0,a.jsx)(d,{link:"/logbook",icon:"text_snippet",text:"Logbook"}),(0,a.jsx)(d,{link:"/my-finances",icon:"account_balance",text:"My Finances"}),(0,a.jsx)(d,{link:"/jumpseat",icon:"airplane_ticket",text:"Jumpseat"}),(0,a.jsx)(d,{link:"/rentals",icon:"flight_takeoff",text:"Aircraft Rentals"}),(0,a.jsx)(d,{link:"/logout",icon:"lock",text:"Sign Out"}),n.user.is_admin?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{name:"Admin"}),(0,a.jsx)(d,{link:"/admin/pireps",icon:"text_snippet",text:"Pireps"}),(0,a.jsx)(d,{link:"/admin/fleet",icon:"flight",text:"Fleet"}),(0,a.jsx)(d,{link:"/admin/users",icon:"people",text:"Users"}),(0,a.jsx)(d,{link:"/admin/resources",icon:"download",text:"Resources"})]}):(0,a.jsx)(a.Fragment,{})]})})]})};function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,s=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t){var e=t.children,r=t.title,o=t.heading,c=(0,i.qt)().props.flash,l=x((0,n.useState)(!1),2),u=l[0],d=l[1],h=function(){d(!u)};return(0,a.jsxs)("div",{className:"flex flex-row min-h-screen bg-gray-100 text-gray-800",children:[(0,a.jsx)(i.Fb,{title:r}),(0,a.jsx)(m,{isNavVisible:u,setNavState:h}),(0,a.jsxs)("main",{className:"main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in z-10",children:[(0,a.jsx)(f,{heading:o,setNavState:h}),(0,a.jsxs)("div",{className:"main-content flex flex-col flex-grow relative ml-64 mt-16",children:[c.error&&(0,a.jsx)(s.Z,{type:"error",message:c.error}),c.success&&(0,a.jsx)(s.Z,{type:"success",message:c.success}),e]})]}),(0,a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.patreon.com/bushdivers?fan_landing=true",children:(0,a.jsx)("div",{className:"ribbon ribbon-bottom ribbon-right ribbon-sticky",children:(0,a.jsx)("div",{className:"text-xs",children:"Donate"})})})]})}},2629:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});r(7294);var n=r(5893);const i=function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"bg-opacity-40 p-2 mx-12 my-2 rounded shadow-lg ".concat("success"===t.type?"bg-green-100":"bg-red-100"),children:[(0,n.jsx)("span",{className:"success"===t.type?"text-green-900":"text-red-900",children:"success"===t.type?(0,n.jsx)("span",{className:"text-green-900 text-lg font-bold",children:"Success"}):(0,n.jsx)("span",{className:"text-red-900 text-lg font-bold",children:"Error"})}),(0,n.jsx)("span",{className:"ml-2",children:t.message})]})})}},5222:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(7294),i=r(5893);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,s=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){var e,r=s((0,n.useState)(!1),2),a=r[0],o=r[1];return(0,i.jsxs)("div",{className:"inline-block relative",onMouseEnter:function(){e=setTimeout((function(){o(!0)}),400)},onMouseLeave:function(){clearInterval(e),o(!1)},children:[t.children,a&&(0,i.jsx)("div",{className:"tooltip ".concat(t.direction||"top"),children:t.content})]})}},2669:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});r(7294);var n=r(1636),i=r(5893);const s=function(){var t=(new Date).getFullYear();return(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{className:"bg-gray-100 flex justify-between p-4",children:[(0,i.jsxs)("div",{children:["© Bush Divers ",t]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.rU,{className:"mr-4",href:"/privacy",children:"Privacy Policy"}),(0,i.jsx)(n.rU,{href:"/supporters",children:"Supporters"})]})]})})}},6584:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});r(7294);var n=r(5893);function i(t){var e=t.title;return(0,n.jsx)("div",{className:"text-gray-700 text-4xl mb-4",children:e})}},7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",c="week",l="month",u="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:p,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,l),s=r-i<0,a=e.clone().add(n+(s?-1:1),l);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:f,w:c,d:o,D:d,h:a,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",j={};j[y]=v;var b=function(t){return t instanceof N},$=function(t,e,r){var n;if(!t)return y;if("string"==typeof t)j[t]&&(n=t),e&&(j[t]=e,n=t);else{var i=t.name;j[i]=t,n=i}return!r&&n&&(y=n),n||!r&&y},w=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new N(r)},S=g;S.l=$,S.i=b,S.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var N=function(){function v(t){this.$L=$(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var r=this,n=!!S.u(e)||e,u=S.p(t),h=function(t,e){var i=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},m=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},x=this.$W,v=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case f:return n?h(1,0):h(31,11);case l:return n?h(1,v):h(0,v+1);case c:var y=this.$locale().weekStart||0,j=(x<y?x+7:x)-y;return h(n?p-j:p+(6-j),v);case o:case d:return m(g+"Hours",0);case a:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var r,c=S.p(t),u="set"+(this.$u?"UTC":""),h=(r={},r[o]=u+"Date",r[d]=u+"Date",r[l]=u+"Month",r[f]=u+"FullYear",r[a]=u+"Hours",r[s]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[c],m=c===o?this.$D+(e-this.$W):e;if(c===l||c===f){var x=this.clone().set(d,1);x.$d[h](m),x.init(),this.$d=x.set(d,Math.min(this.$D,x.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[S.p(t)]()},p.add=function(n,u){var d,h=this;n=Number(n);var m=S.p(u),x=function(t){var e=w(h);return S.w(e.date(e.date()+Math.round(t*n)),h)};if(m===l)return this.set(l,this.$M+n);if(m===f)return this.set(f,this.$y+n);if(m===o)return x(1);if(m===c)return x(7);var v=(d={},d[s]=e,d[a]=r,d[i]=t,d)[m]||1,p=this.$d.getTime()+n*v;return S.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,l=r.months,u=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return S.s(s%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:u(r.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,c,2),ddd:u(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:S.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return n.replace(x,(function(t,e){return e||m[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,d,h){var m,x=S.p(d),v=w(n),p=(v.utcOffset()-this.utcOffset())*e,g=this-v,y=S.m(this,v);return y=(m={},m[f]=y/12,m[l]=y,m[u]=y/3,m[c]=(g-p)/6048e5,m[o]=(g-p)/864e5,m[a]=g/r,m[s]=g/e,m[i]=g/t,m)[x]||g,h?y:S.a(y)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return j[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=$(t,e,!0);return n&&(r.$L=n),r},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),M=N.prototype;return w.prototype=M,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",l],["$y",f],["$D",d]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,N,w),t.$i=!0),w},w.locale=$,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=j[y],w.Ls=j,w.p={},w}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,r){t=t||{};var n=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,r,i){return n.fromToBase(t,e,r,i)}r.en.relativeTime=i,n.fromToBase=function(e,n,s,a,o){for(var c,l,u,f=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,m=0;m<h;m+=1){var x=d[m];x.d&&(c=a?r(e).diff(s,x.d,!0):s.diff(e,x.d,!0));var v=(t.rounding||Math.round)(Math.abs(c));if(u=c>0,v<=x.r||!x.r){v<=1&&m>0&&(x=d[m-1]);var p=f[x.l];o&&(v=o(""+v)),l="string"==typeof p?p.replace("%d",v):p(v,n,x.l,u);break}}if(n)return l;var g=u?f.future:f.past;return"function"==typeof g?g(l):g.replace("%s",l)},n.to=function(t,e){return s(t,e,this,!0)},n.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(a(this),t)},n.fromNow=function(t){return this.from(a(this),t)}}}()},9387:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(r,n,i){var s,a=function(t,r,n){void 0===n&&(n={});var i=new Date(t);return function(t,r){void 0===r&&(r={});var n=r.timeZoneName||"short",i=t+"|"+n,s=e[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),e[i]=s),s}(r,n).formatToParts(i)},o=function(e,r){for(var n=a(e,r),s=[],o=0;o<n.length;o+=1){var c=n[o],l=c.type,u=c.value,f=t[l];f>=0&&(s[f]=parseInt(u,10))}var d=s[3],h=24===d?0:d,m=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",x=+e;return(i.utc(m).valueOf()-(x-=x%1e3))/6e4},c=n.prototype;c.tz=function(t,e){void 0===t&&(t=s);var r=this.utcOffset(),n=this.toDate(),a=n.toLocaleString("en-US",{timeZone:t}),o=Math.round((n-new Date(a))/1e3/60),c=i(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-o,!0);if(e){var l=c.utcOffset();c=c.add(r-l,"minute")}return c.$x.$timezone=t,c},c.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),r=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var l=c.startOf;c.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,r){var n=r&&e,a=r||e||s,c=o(+i(),a);if("string"!=typeof t)return i(t).tz(a);var l=function(t,e,r){var n=t-60*e*1e3,i=o(n,r);if(e===i)return[n,e];var s=o(n-=60*(i-e)*1e3,r);return i===s?[n,i]:[t-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(t,n).valueOf(),c,a),u=l[0],f=l[1],d=i(u).utcOffset(f);return d.$x.$timezone=a,d},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){s=t}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(n,i,s){var a=i.prototype;s.utc=function(t){return new i({date:t,utc:!0,args:arguments})},a.utc=function(e){var r=s(this.toDate(),{locale:this.$L,utc:!0});return e?r.add(this.utcOffset(),t):r},a.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var c=a.init;a.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var l=a.utcOffset;a.utcOffset=function(n,i){var s=this.$utils().u;if(s(n))return this.$u?0:s(this.$offset)?l.call(this):this.$offset;if("string"==typeof n&&null===(n=function(t){void 0===t&&(t="");var n=t.match(e);if(!n)return null;var i=(""+n[0]).match(r)||["-",0,0],s=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===s?a:-a}(n)))return this;var a=Math.abs(n)<=16?60*n:n,o=this;if(i)return o.$offset=a,o.$u=0===n,o;if(0!==n){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+c,t)).$offset=a,o.$x.$localOffset=c}else o=this.utc();return o};var u=a.format;a.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},a.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var f=a.toDate;a.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var d=a.diff;a.diff=function(t,e,r){if(t&&this.$u===t.$u)return d.call(this,t,e,r);var n=this.local(),i=s(t).local();return d.call(n,i,e,r)}}}()}}]);