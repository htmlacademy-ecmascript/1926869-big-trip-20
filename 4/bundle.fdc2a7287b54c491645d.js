(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=p;var g=function(t){return t instanceof D},b=function t(e,n,i){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;y[a]=e,s=a}return!i&&s&&($=s),s||!i&&$},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=_;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!w.u(e)||e,h=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case l:return u?f(1,v):f(0,v+1);case a:var y=this.$locale().weekStart||0,g=(p<y?p+7:p)-y;return f(u?_-g:_+(6-g),v);case o:case d:return m($+"Hours",0);case r:return m($+"Minutes",1);case s:return m($+"Seconds",2);case i:return m($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,u=w.p(t),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[d]=h+"Date",a[l]=h+"Month",a[c]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[u],m=u===o?this.$D+(e-this.$W):e;if(u===l||u===c){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,u){var d,h=this;n=Number(n);var f=w.p(u),m=function(t){var e=M(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===o)return m(1);if(f===a)return m(7);var p=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*p;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(t,e){return e||p[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,m=w.p(d),p=M(n),v=(p.utcOffset()-this.utcOffset())*t,_=this-p,$=w.m(this,p);return $=(f={},f[c]=$/12,f[l]=$,f[u]=$/3,f[a]=(_-v)/6048e5,f[o]=(_-v)/864e5,f[r]=_/e,f[s]=_/t,f[i]=_/1e3,f)[m]||_,h?$:w.a($)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),T=D.prototype;return M.prototype=T,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=y[$],M.Ls=y,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof $},h=function(t,e,n){return new $(t,n,e.$l)},f=function(t){return e.p(t)+"s"},m=function(t){return t<0},p=function(t){return m(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?m(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function m(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*c[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=m.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=p(t/a),t%=a,this.$d.months=p(t/l),t%=l,this.$d.days=p(t/r),t%=r,this.$d.hours=p(t/s),t%=s,this.$d.minutes=p(t/i),t%=i,this.$d.seconds=p(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,u=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?p(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*c[f(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},m}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;n.insertAdjacentElement(i,e.getElement())}class s{getTemplate(){return'<div class="trip-main">\n  <section class="trip-main__trip-info  trip-info">\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return'<div class="trip-info__main">\n  <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n</div>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return'<p class="trip-info__cost">\n  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{getTemplate(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class u{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'<<ul class="trip-events__list">\n  </ul>>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{getTemplate(){return'<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n\n</form>\n</li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const h=["taxi","flight","drive","check-in","sightseeing"],f=["Amsterdam","Chamonix","Geneva","Rome","New York"],m=["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Aliquam erat volutpat","Nunc fermentum tortor ac porta dapibus","In rutrum ac purus sit amet tempus.","Cras aliquet varius magna, non porta ligula feugiat eget."],p=["Order Uber","Add luggage","Switch to comfort","Rent a car","Add breakfast","Book tickets","Lunch in city"],v={id:"",basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:!1,offers:[],type:"taxi"};var _=n(484),$=n.n(_),y=n(646),g=n.n(y);$().extend(g());const b=36e5;function M(t,e){return t?$()(t).format(e):""}function w(t){return t[Math.floor(Math.random()*t.length)]}function D(t){return`${t.slice(0,1).toUpperCase()}${t.slice(1)}`}const T="DD/MM/YY HH:mm";class S{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;this.routePoint=t}getTemplate(){return function(t){const{dateFrom:e,dateTo:n,type:i,basePrice:s}=t,r=M(e,T),o=M(n,T);return`<header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${l=h,l.map((t=>`<div class="event__type-item">\n       <input id="event-type-${t.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.toLowerCase()}">\n       <label class="event__type-label  event__type-label--${t.toLowerCase()}" for="event-type-${t.toLowerCase()}-1">${D(t)}</label>\n      </div>`)).join("")}\n      </fieldset>\n    </div>\n  </div>\n  <div class="event__field-group  event__field-group--destination">\n    <label class="event__label event__type-output" for="event-destination-1">\n      ${D(i)}\n    </label>\n    <input class="event__input event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva НУЖНО СДЕЛАТЬ" list="destination-list-1">\n    <datalist id="destination-list-1">\n      ${a=f,a.map((t=>`<option value=${t}></option>`)).join("")}\n    </datalist>\n  </div>\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${r}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-1">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o}">\n  </div>\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;${s}\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n  </div>\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Cancel</button>\n</header>`;var a,l}(this.routePoint)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class E{constructor(t,e){this.routePointsModel=t,this.offerModel=e}getTemplate(){return function(t,e){const{type:n,id:i,offers:s}=t;return`<section class="event__details">\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${r=e,r.map((t=>`<div class="event__offer-selector">\n         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}-${t.id}" type="checkbox" name="event-offer-${n}" ${s.includes(t.id)?"checked":""}>\n         <label class="event__offer-label" for="event-offer-${n}-${i}">\n           <span class="event__offer-title">${t.title}</span>\n           &plus;&euro;&nbsp;\n           <span class="event__offer-price">${t.price}</span>\n         </label>\n       </div>`)).join("")}\n\n    </div>\n  </section>\n\n</section>`;var r}(this.routePointsModel,this.offerModel)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class O{constructor(t){this.destination=t}getTemplate(){return`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${(t=this.destination).description}</p>\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n    ${e=t.pictures,e.map((t=>`<img class="event__photo" src="${t.src}" alt="Event photo">`)).join("")}\n    </div>\n  </div>\n</section>`;var t,e}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class k{getElement(t,e,n){const s=document.querySelector(".trip-events__list");i(new d,s);const r=s.querySelector(".event--edit");i(new S(t),r),i(new E(t,e),r);const o=s.querySelector(".event__details");i(new O(n),o)}removeElement(){this.element=null}}const Y="HH:mm";class C{constructor(t,e){this.tripRoute=t,this.destination=e}getTemplate(){return function(t,e){const{basePrice:n,dateFrom:i,dateTo:s,type:r}=t,o=M(i,"YYYY-MM-DD"),a=M(i,"MMM DD"),l=M(i,Y),u=M(s,Y),c=function(t,e){const n=$()(e).diff(t);let i=0;switch(!0){case n>=864e5:i=$().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=b:i=$().duration(n).format("HH[H] mm[M]");break;case n<b:i=$().duration(n).format("mm[M]")}return i}(i,s);return console.log(n),`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${o}">${a}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${r}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${r} ${e.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${o}T${l}">${l}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${o}T${u}">${u}</time>\n      </p>\n      <p class="event__duration">${c}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${n}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      <li class="event__offer">\n        <span class="event__offer-title">Order Uber</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">20</span>\n      </li>\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`}(this.tripRoute,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const H=[{id:"1",description:w(m),name:w(f),pictures:[{src:"https://loremflickr.com/248/152?random=35",description:w(m)},{src:"https://loremflickr.com/248/152?random=45",description:w(m)},{src:"https://loremflickr.com/248/152?random=33",description:w(m)}]},{id:"2",description:w(m),name:w(f),pictures:[{src:"https://loremflickr.com/248/152?random=45",description:w(m)},{src:"https://loremflickr.com/248/152?random=12",description:w(m)}]},{id:"3",description:w(m),name:w(f),pictures:[{src:"https://loremflickr.com/248/152?random=11",description:w(m)},{src:"https://loremflickr.com/248/152?random=1",description:w(m)}]}],P=[{id:"1",basePrice:1100,dateFrom:new Date("2019-07-10T22:55:56.845Z"),dateTo:new Date("2019-07-11T11:22:13.375Z"),destination:H[0].id,isFavorite:!1,offers:["1"],type:"taxi"},{id:"2",basePrice:1200,dateFrom:new Date("2019-03-10T22:55:56.845Z"),dateTo:new Date("2019-04-11T11:22:13.375Z"),destination:H[1].id,isFavorite:!0,offers:["1","2"],type:"flight"},{id:"3",basePrice:500,dateFrom:new Date("2019-05-11T22:55:56.845Z"),dateTo:new Date("2019-05-12T11:22:13.375Z"),destination:H[2].id,isFavorite:!1,offers:["2"],type:"check-in"}],x=[{type:"taxi",offers:[{id:"1",title:w(p),price:350},{id:"2",title:w(p),price:45}]},{type:"flight",offers:[{id:"1",title:w(p),price:400},{id:"2",title:w(p),price:450},{id:"3",title:w(p),price:30}]},{type:"check-in",offers:[{id:"1",title:w(p),price:100},{id:"2",title:w(p),price:45}]}],F=document.querySelector(".trip-main"),A=document.querySelector(".trip-controls__filters"),L=document.querySelector(".trip-events"),N=new class{constructor(t){let{mainContainer:e,filtersContainer:n}=t;this.mainContainer=e,this.filtersContainer=n}init(){i(new s,this.mainContainer,t.AFTERBEGIN);const e=document.querySelector(".trip-main__trip-info");i(new r,e),i(new o,e),i(new a,this.filtersContainer);const n=document.querySelector(".trip-main");i(new l,n)}}({mainContainer:F,filtersContainer:A}),R=new class{routePoits=P;getRoutePoints(){return this.routePoits}},B=new class{offers=x;getOffers(){return this.offers}getByType(t){return this.offers.find((e=>e.type===t.type)).offers}getById(t){return this.getByType(t).filter((e=>t.offers.includes(e.id)))}},I=new class{destinations=H;getDestinations(){return this.destinations}getById(t){return this.destinations.find((e=>e.id===t.id))}},j=new class{constructor(t){let{eventsContainer:e,routePointsModel:n,offerModel:i,destinationModel:s}=t;this.eventsContainer=e,this.routePointsModel=n,this.offerModel=i,this.destinationModel=s}init(){this.tripRoute=w([...this.routePointsModel.getRoutePoints()]),this.points=[...this.routePointsModel.getRoutePoints()],this.offerModel=[...this.offerModel.getByType(this.tripRoute)],this.destination=[...this.destinationModel.getDestinations()],i(new u,this.eventsContainer),i(new c,this.eventsContainer),(new k).getElement(this.tripRoute,this.offerModel,this.destinationModel.getById(this.tripRoute));const t=document.querySelector(".trip-events__list");for(let e=0;e<this.points.length;e++)i(new C(this.points[e],this.destinationModel.getById(this.points[e])),t)}}({eventsContainer:L,routePointsModel:R,offerModel:B,destinationModel:I});N.init(),j.init()})()})();
//# sourceMappingURL=bundle.fdc2a7287b54c491645d.js.map