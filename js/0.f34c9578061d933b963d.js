(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=script&lang=js&":function(t,e,i){"use strict";i.r(e);var s=i("./src/components/home/img/side1.png"),n=i.n(s),o=i("./src/components/home/img/side2.png"),a=i.n(o),r=i("./src/components/home/img/side3.png"),l=i.n(r),d=i("./src/components/home/img/side4.png"),c=i.n(d),h=i("./node_modules/pageable/dist/pageable.min.js");e.default={data:function(){return{index:1,instance:null,items:[{title:"Boost for free.",description:"Start earning more with our mobile and web application",img:n.a},{title:"Capital for Traders",description:"Manual and automatic trading on crypto-exchange",img:a.a},{title:"Capital for <s>Investors</s> All",description:"Will earn you 48% per annum*",img:l.a},{title:"Join and start earning",description:"Try our hackable solution free forever",img:c.a}],show:!0}},mounted:function(){new h("#container",{infinite:!0}),window.addEventListener("resize",this.reCreateInstance())},updated:function(){this.reCreateInstance()},beforeDestroy:function(){window.removeEventListener("resize",this.reCreateInstance())},methods:{reCreateInstance:function(){this.instance&&(this.instance.destory(),this.init())}}}},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&":function(t,e,i){(t.exports=i("./node_modules/css-loader/lib/css-base.js")(!1)).push([t.i,"#container[data-v-26b335d3] {\n  display: block !important;\n}\n.background-image[data-v-26b335d3] {\n  position: absolute;\n  filter: brightness(80%);\n  z-index: -1;\n}\n@media (min-width: 600px) {\n.description[data-v-26b335d3] {\n    width: 200px;\n}\n.page-number[data-v-26b335d3] {\n    position: fixed;\n    right: 20px;\n    bottom: 40px;\n    z-index: 999999;\n}\n.page-number span[data-v-26b335d3] {\n      transform: rotate(90deg);\n}\n.page-number[data-v-26b335d3]:before {\n      content: '';\n      position: absolute;\n      width: 2px;\n      height: 100px;\n      right: 5px;\n      top: 30px;\n      background: white;\n}\n}\n.description[data-v-26b335d3] {\n  position: relative;\n}\n.description[data-v-26b335d3]:before {\n    content: '';\n    position: absolute;\n    background: white;\n    height: 2px;\n    width: 100%;\n    left: -120%;\n    top: 50%;\n}\n",""])},"./node_modules/pageable/dist/pageable.min.js":function(t,e,i){(function(i){var s,n,o;function a(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](t):t instanceof e}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),function(i,a){"object"===r(e)?t.exports=a():(n=[],void 0===(o="function"==typeof(s=a)?s.apply(e,n):s)||(t.exports=o))}(void 0===i&&(this.window||this.global),(function(){"use strict";var t=function(){},e=function(t){return"[object Object]"===Object.prototype.toString.call(t)},i=function t(i,s){for(var n in s)if(s.hasOwnProperty(n)){var o=s[n];o&&e(o)?(i[n]=i[n]||{},t(i[n],o)):i[n]=o}return i},s=function(t,e,i){var s;return function(){if(i=i||this,!s)return t.apply(i,arguments),s=!0,setTimeout((function(){s=!1}),e)}},n=function(t){this.instance=t,this.running=!1,this.config=this.instance.config.slideshow};n.prototype.start=function(){var t=this;t.running||(t.running=!0,t.instance.slideIndex=t.instance.index,t.instance.interval=setInterval((function(){t.instance.config.onBeforeStart.call(t.instance,t.instance.slideIndex),setTimeout((function(){t.instance.config.infinite&&t.instance._overScroll(!0),t.instance.index<t.instance.pages.length-1?t.instance.slideIndex++:t.instance.slideIndex=0,t.instance.scrollToIndex(t.instance.slideIndex)}),t.config.delay||0)}),t.config.interval))},n.prototype.stop=function(){this.running&&(clearInterval(this.instance.interval),this.instance.slideInterval=!1,this.running=!1)};var o=function(e,s){if(void 0===e)return console.error("Pageable:","No container defined.");var n=this;return this.container="string"==typeof e?document.querySelector(e):e,this.container?(this.config=i({pips:!0,animation:300,delay:0,throttle:50,orientation:"vertical",easing:function(t,e,i,s){return-i*(t/=s)*(t-2)+e},onInit:t,onUpdate:t,onBeforeStart:t,onStart:t,onScroll:t,onFinish:t,swipeThreshold:50,freeScroll:!1,slideshow:!1,infinite:!1,childSelector:"[data-anchor]",events:{wheel:!0,mouse:!0,touch:!0,keydown:!0}},s),this.events=this.config.events,this.pages=[].slice.call(this.container.querySelectorAll(this.config.childSelector)),this.pages.length?(this.horizontal="horizontal"===this.config.orientation,this.anchors=[],this.pages.forEach((function(t,e){var i,s=function(t,e){return t.dataset?t.dataset[e]:t.getAttribute("data-"+e)}(t,"anchor");i=s?s.replace(/\s+/,"-").toLowerCase():Array.isArray(n.config.anchors)&&n.config.anchors.length?n.config.anchors[e].replace(/\s+/,"-").toLowerCase():t.className.replace(/\s+/,"-").toLowerCase(),t.id!==i&&(t.id=i),n.anchors.push("#"+i),t.classList.add("pg-page"),0==e?t.classList.add("pg-active"):t.classList.remove("pg-active")})),this.axis=this.horizontal?"x":"y",this.mouseAxis={x:"clientX",y:"clientY"},this.scrollAxis={x:"scrollLeft",y:"scrollTop"},this.size={x:"width",y:"height"},this.bar=this._getScrollBarWidth(),this.index=0,this.slideIndex=0,this.oldIndex=0,this.down=!1,this.initialised=!1,this.touch="ontouchstart"in window||window.DocumentTouch&&a(document,DocumentTouch),void this.init()):console.error("Pageable:","No child nodes matching the selector "+this.config.childSelector+" could be found.")):console.error("Pageable:","The container could not be found.")};return o.prototype.init=function(){if(!this.initialised&&!this.container.pageable){var t=this.config;if(this.wrapper=document.createElement("div"),this.container.parentNode.insertBefore(this.wrapper,this.container),this.wrapper.appendChild(this.container),this.wrapper.classList.add("pg-wrapper"),this.wrapper.classList.add("pg-"+t.orientation),this.wrapper.classList.add("pg-wrapper"),this.container.classList.add("pg-container"),document.body.style.margin=0,document.body.style.overflow="hidden",this.container.style.display="inline-block",["Prev","Next"].forEach((function(e){var i="nav"+e+"El";t[i]&&("string"==typeof t[i]?this[i]=document.querySelector(t[i]):a(t[i],Element)&&(this[i]=t[i]),this[i]&&this[i].classList.add("pg-nav"))}),this),t.pips){var e=document.createElement("nav"),i=document.createElement("ul");e.classList.add("pg-pips"),this.pages.forEach((function(t,e){var s=document.createElement("li"),n=document.createElement("a"),o=document.createElement("span");n.href="#"+t.id,0==e&&n.classList.add("active"),n.appendChild(o),s.appendChild(n),i.appendChild(s)})),e.appendChild(i),this.wrapper.appendChild(e),this.pips=[].slice.call(i.children)}this.pageCount=this.pages.length,this.lastIndex=this.pageCount-1,t.infinite&&this._toggleInfinite(!1,!0),this.bind(),this.update(),this._load();var s=this._getData();this.config.onInit.call(this,s),this.emit("init",s),this.initialised=!0,this.container.pageable=this,t.slideshow&&(this.slider=new n(this),this.slider.start())}},o.prototype.bind=function(){this.callbacks={wheel:this._wheel.bind(this),update:s(this.update.bind(this),this.config.throttle),load:this._load.bind(this),start:this._start.bind(this),drag:this._drag.bind(this),stop:this._stop.bind(this),click:this._click.bind(this),prev:this.prev.bind(this),next:this.next.bind(this),keydown:this._keydown.bind(this)},document.addEventListener("keydown",this.callbacks.keydown,!1),this.wrapper.addEventListener("wheel",this.callbacks.wheel,!1),window.addEventListener("resize",this.callbacks.update,!1),this.wrapper.addEventListener(this.touch?"touchstart":"mousedown",this.callbacks.start,!1),window.addEventListener(this.touch?"touchmove":"mousemove",this.callbacks.drag,!1),window.addEventListener(this.touch?"touchend":"mouseup",this.callbacks.stop,!1),this.navPrevEl&&(this.navPrevEl.addEventListener("click",this.callbacks.prev,!1),this.navNextEl&&this.navNextEl.addEventListener("click",this.callbacks.next,!1)),document.addEventListener("click",this.callbacks.click,!1)},o.prototype.unbind=function(){this.wrapper.removeEventListener("wheel",this.callbacks.wheel),window.removeEventListener("resize",this.callbacks.update),this.wrapper.removeEventListener(this.touch?"touchstart":"mousedown",this.callbacks.start),window.addEventListener(this.touch?"touchmove":"mousemove",this.callbacks.drag),window.removeEventListener(this.touch?"touchend":"mouseup",this.callbacks.stop),document.removeEventListener("keydown",this.callbacks.keydown),this.navPrevEl&&this.navPrevEl.removeEventListener("click",this.callbacks.prev,!1),this.navNextEl&&this.navNextEl.removeEventListener("click",this.callbacks.next,!1),document.removeEventListener("click",this.callbacks.click)},o.prototype.scrollToPage=function(t){this.scrollToIndex(t-1)},o.prototype.scrollToAnchor=function(t){this.scrollToIndex(this.anchors.indexOf(t))},o.prototype.scrollToIndex=function(t){if(!this.scrolling&&0<=t&&t<=this.pages.length-1){var e=this.index;this.index=t,this.oldIndex=e,this._scrollBy(this._getScrollAmount(e))}},o.prototype.next=function(){if(this.config.infinite){var t=this.index;if(t===this.lastIndex)return t++,this._scrollBy(-this.data.window[this.size[this.axis]],t)}this.scrollToIndex(this.index+1)},o.prototype.prev=function(){if(this.config.infinite){var t=this.index;if(0===t)return t--,this._scrollBy(this.data.window[this.size[this.axis]],t)}this.scrollToIndex(this.index-1)},o.prototype.update=function(){clearTimeout(this.timer),this.data={window:{width:window.innerWidth,height:window.innerHeight},container:{height:this.wrapper.scrollHeight,width:this.wrapper.scrollWidth}};var t=this.size[this.axis],e=this.horizontal?this.size.y:this.size.x;this.wrapper.style["overflow-"+this.axis]="scroll",this.wrapper.style[t]=this.data.window[t]+"px",this.wrapper.style[e]=this.data.window[e]+this.bar+"px";var i=this.config.infinite?this.pages.length+2:this.pages.length,s=this.config.infinite?this.data.window[t]:0;this.container.style[t]=i*this.data.window[t]+"px",this.wrapper.style["padding-"+(this.horizontal?"bottom":"right")]=this.bar+"px",this.wrapper[this.scrollAxis[this.axis]]=this.index*this.data.window[t]+s,this.scrollSize=i*this.data.window[t]-this.data.window[t],this.scrollPosition=this.data.window[t]*this.index+s,this.pages.forEach((function(i){this.horizontal&&(i.style.float="left"),i.style[t]=this.data.window[t]+"px",i.style[e]=this.data.window[e]+"px"}),this),this.config.infinite&&this.clones.forEach((function(i){this.horizontal&&(i.style.float="left"),i.style[t]=this.data.window[t]+"px",i.style[e]=this.data.window[e]+"px"}),this),this.config.onUpdate.call(this,this._getData()),this.emit("update",this._getData())},o.prototype.orientate=function(t){switch(t){case"vertical":this.horizontal=!1,this.axis="y",this.container.style.width="";break;case"horizontal":this.horizontal=!0,this.axis="x",this.container.style.height="";break;default:return!1}this.horizontal?(this.wrapper.classList.add("pg-horizontal"),this.wrapper.classList.remove("pg-vertical")):(this.wrapper.classList.add("pg-vertical"),this.wrapper.classList.remove("pg-horizontal")),this.config.orientation=t,this.update()},o.prototype.slideshow=function(){return this.slider},o.prototype.destroy=function(){if(this.initialised){this.emit("destroy"),this.unbind(),document.body.style.margin="",document.body.style.overflow="",this.container.style.display="",this.container.style.height="",this.container.style.width="",this.container.classList.remove("pg-container"),this.wrapper.parentNode.replaceChild(this.container,this.wrapper);for(var t,e=0;e<this.pages.length;e++)(t=this.pages[e]).style.height="",t.style.width="",t.style.float="",t.classList.remove("pg-page"),t.classList.remove("pg-active");["Prev","Next"].forEach((function(t){var e="nav"+t+"El";this[e]&&(this[e].classList.remove("active"),this[e].classList.remove("pg-nav"))}),this),this.config.infinite&&this._toggleInfinite(!0),this.config.slideshow&&(this.slider.stop(),this.slider=!1),this.initialised=!1,delete this.container.pageable}},o.prototype.on=function(t,e){this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)},o.prototype.off=function(t,e){this.listeners=this.listeners||{},0==t in this.listeners||this.listeners[t].splice(this.listeners[t].indexOf(e),1)},o.prototype.emit=function(t){if(this.listeners=this.listeners||{},0!=t in this.listeners)for(var e=0;e<this.listeners[t].length;e++)this.listeners[t][e].apply(this,[].slice.call(arguments,1))},o.prototype._click=function(t){if(t.target.closest){var e=t.target.closest("a");e&&-1<this.anchors.indexOf(e.hash)&&(t.preventDefault(),this.scrollToAnchor(e.hash))}},o.prototype._preventDefault=function(t){t.preventDefault(),t.stopPropagation()},o.prototype._keydown=function(t){if(this.config.events.keydown){if(this.scrolling||this.dragging)return t.preventDefault(),!1;var e=!1;void 0===t.key?void 0!==t.keyCode&&(e=t.keyCode):e=t.key;var i="Arrow"+("x"===this.axis?"Left":"Up"),s="Arrow"+("x"===this.axis?"Right":"Down");e&&(33===e||37===e||e===i||"PageUp"===e?(t.preventDefault(),this.prev()):(34===e||39===e||e===s||"PageDown"===e)&&(t.preventDefault(),this.next()))}},o.prototype._start=function(t){var e=this._getEvent(t);return!(this.scrolling||this.dragging)&&("touchstart"!==t.type||this.events.touch?!!("mousedown"!==t.type||this.events.mouse&&0===t.button)&&!!e.target.closest(this.config.childSelector)&&(this._preventDefault(t),this.dragging=this.config.freeScroll,this.config.slideshow&&this.slider.stop(),this.down={x:e.clientX,y:e.clientY},this.startIndex=this.index,void this.config.onBeforeStart.call(this,this.index)):(e.target.closest("a")||this._preventDefault(t),!1))},o.prototype._drag=function(t){if(this.config.freeScroll&&this.dragging&&!this.scrolling){var e=this._getEvent(t),i=this._limitDrag(e),s=this._getData();this.container.style.transform=this.horizontal?"translate3d("+i+"px, 0, 0)":"translate3d(0, "+i+"px, 0)",s.scrolled-=i,this.config.onScroll.call(this,s,"drag"),this.emit("scroll",s)}},o.prototype._stop=function(t){var e=this,i=this._getEvent(t),s=function(){e.index<e.pages.length-1&&e.index++},n=function(){0<e.index&&e.index--};this.oldIndex=this.index;var o=Math.abs(i[this.mouseAxis[this.axis]]-this.down[this.axis])>=this.config.swipeThreshold,a=this.down&&o;if(this.config.slideshow&&this.slider.start(),this.dragging&&!this.scrolling){var r=this._limitDrag(i);return this.dragging=r,a&&(this.config.infinite&&this._overScroll(0>r,r),0<r?n():s()),this._scrollBy(this._getScrollAmount(this.oldIndex)-r),void(this.down=!1)}if(this.down&&!this.scrolling){var l=i[this.mouseAxis[this.axis]]<this.down[this.axis],d=i[this.mouseAxis[this.axis]]>this.down[this.axis];a&&(this.config.infinite&&this._overScroll(l),l?s():d&&n()),this.startIndex===this.index?this.config.onFinish.call(this,this._getData()):this._scrollBy(this._getScrollAmount(this.oldIndex)),this.down=!1}},o.prototype._wheel=function(t){if(t.preventDefault(),this.events.wheel&&!this.scrolling){var e=this.index,i=this.index,s=0<t.deltaY;this.config.infinite&&this._overScroll(s),s?this.index<this.pages.length-1&&e++:0<this.index&&e--,e!==i&&(this.oldIndex=i,this.scrollToIndex(e))}},o.prototype._load=function(){var t=location.hash;if(t){var e=this.anchors.indexOf(t);if(-1<e){var i=this.config.infinite?1:0;this.scrollPosition=this.data.window[this.size[this.axis]]*(e+i);var s=this._getData();this.index=e,this.slideIndex=e,this.pages.forEach((function(t,e){e===this.index?t.classList.add("pg-active"):t.classList.remove("pg-active")}),this),this._setNavs(),this._setPips(),this.config.onScroll.call(this,s),this.config.onFinish.call(this,s),this.emit("scroll",s)}}this.update()},o.prototype._getEvent=function(t){return this.touch?"touchend"===t.type?t.changedTouches[0]:t.touches[0]:t},o.prototype._getData=function(){var t=this.config.infinite?this.scrollPosition-this.data.window[this.size[this.axis]]:this.scrollPosition,e=this.config.infinite?this.scrollSize-2*this.data.window[this.size[this.axis]]:this.scrollSize;return{index:this.index,percent:t/e*100,scrolled:t,max:e}},o.prototype._overScroll=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=this.index;i===this.lastIndex&&t?(i++,this._scrollBy(-this.data.window[this.size[this.axis]]-e,i)):0===i&&!t&&(i--,this._scrollBy(this.data.window[this.size[this.axis]]-e,i))},o.prototype._scrollBy=function(t,e){if(this.scrolling)return!1;this.scrolling=!0,this.config.onBeforeStart.call(this,this.oldIndex),this.emit("scroll.before",this._getData()),this.config.slideshow&&this.slider.stop();var i=this;i.timer=setTimeout((function(){var s=Date.now(),n=i._getScrollOffset();i.config.onStart.call(i,i.pages[i.index].id),i.emit("scroll.start",i._getData()),i.frame=requestAnimationFrame((function o(){var a=Date.now()-s;if(a>i.config.animation){cancelAnimationFrame(i.frame),i.container.style.transform="",i.frame=!1,i.scrolling=!1,i.dragging=!1,i.config.slideshow&&i.slider.start(),i.config.infinite&&(e===i.pageCount?i.index=0:-1===e&&(i.index=i.lastIndex));var r=i._getData();return window.location.hash=i.pages[i.index].id,i.pages.forEach((function(t,e){e===i.index?t.classList.add("pg-active"):t.classList.remove("pg-active")}),i),i.slideIndex=i.index,i._setPips(),i._setNavs(),i.config.onFinish.call(i,r),i.emit("scroll.end",r),!1}var l=i.dragging?i.dragging:0,d=i.config.easing(a,l,t,i.config.animation);i.container.style.transform=i.horizontal?"translate3d("+d+"px, 0, 0)":"translate3d(0, "+d+"px, 0)",i.scrollPosition=n[i.axis]-d;r=i._getData();i.config.infinite&&(e===i.pageCount?r.scrolled=0:-1===e&&(r.scrolled=r.max)),i.config.onScroll.call(i,r),i.emit("scroll",r),i.frame=requestAnimationFrame(o)}))}),i.dragging?0:i.config.delay)},o.prototype._getScrollOffset=function(){return{x:this.wrapper.scrollLeft,y:this.wrapper.scrollTop}},o.prototype._getScrollAmount=function(t,e){void 0===e&&(e=this.index);var i=this.data.window[this.size[this.axis]];return i*t-i*e},o.prototype._getScrollBarWidth=function(){var t,e=document.body,i=document.createElement("div");return i.style.cssText="width: 100; height: 100; overflow: scroll; position: absolute; top: -9999;",e.appendChild(i),t=i.offsetWidth-i.clientWidth,e.removeChild(i),t},o.prototype._toggleInfinite=function(t,e){if(t&&this.config.infinite)this.clones.forEach((function(t){this.container.removeChild(t)}),this),this.config.infinite=!1;else if(!this.config.infinite||e){this.config.infinite=!0;var i=this.pages[0].cloneNode(!0),s=this.pages[this.lastIndex].cloneNode(!0);i.id+="-clone",s.id+="-clone",i.classList.add("pg-clone"),s.classList.add("pg-clone"),i.classList.remove("pg-active"),s.classList.remove("pg-active"),this.clones=[i,s],this.container.insertBefore(s,this.pages[0]),this.container.appendChild(i)}this.update()},o.prototype._limitDrag=function(t){var e=t[this.mouseAxis[this.axis]]-this.down[this.axis];return!this.config.infinite&&(0===this.index&&0<e||this.index===this.pages.length-1&&0>e)&&(e/=10),e},o.prototype._setNavs=function(){this.navPrevEl&&(this.config.infinite||0<this.index?this.navPrevEl.classList.add("active"):this.navPrevEl.classList.remove("active")),this.navNextEl&&(this.config.infinite||this.index<this.pages.length-1?this.navNextEl.classList.add("active"):this.navNextEl.classList.remove("active"))},o.prototype._setPips=function(t){this.config.pips&&(void 0===t&&(t=this.index),this.pips.forEach((function(e,i){i==t?e.firstElementChild.classList.add("active"):e.firstElementChild.classList.remove("active")})))},o}))}).call(this,i("./node_modules/webpack/buildin/global.js"))},"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=template&id=26b335d3&scoped=true&":function(t,e,i){"use strict";i.r(e),i.d(e,"render",(function(){return s})),i.d(e,"staticRenderFns",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},t._l(t.items,(function(e,s){return i("div",{staticClass:"p-relative",attrs:{"data-anchor":"page-"+s,id:"'page-' + index"}},[i("div",{staticClass:"container grid-lg h100 flex-centered-vertical"},[i("div",{staticClass:"width100 "},[i("div",{staticClass:"row text-center-sm"},[i("div",{staticClass:"column col-8 col-sm-12"},[i("div",{staticClass:"description h6 mb2",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),i("div",{staticClass:"h1 text-semibold mb2",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("a",{staticClass:"btn btn-lg p-relative",staticStyle:{padding:"0 40px","z-index":"999"},attrs:{href:"https://docs.google.com/forms/d/1JO7pkz-KSX9c4Z4cg1DBAT7vBs8riHRIUvg0ZM6eABc"}},[t._v("Get early access")])])])])]),t._v(" "),i("div",{staticClass:"background-image block-filled",style:"background: url("+e.img+")"})])})))},n=[]},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&":function(t,e,i){var s=i("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("2a0d0c56",s,!0,{})},"./src/components/home/img/side1.png":function(t,e,i){t.exports=i.p+"side1.png?9706a3c6adab252990da1cff3a17ac3f"},"./src/components/home/img/side2.png":function(t,e,i){t.exports=i.p+"side2.png?704a59199ffa9b4c5b34e4eff0e75a2d"},"./src/components/home/img/side3.png":function(t,e,i){t.exports=i.p+"side3.png?48518ff874ace57177a4ec3473144a7d"},"./src/components/home/img/side4.png":function(t,e,i){t.exports=i.p+"side4.png?632d1f1576eb4f076cd00afd4c6065cf"},"./src/components/home/index.vue":function(t,e,i){"use strict";i.r(e);var s=i("./src/components/home/index.vue?vue&type=template&id=26b335d3&scoped=true&"),n=i("./src/components/home/index.vue?vue&type=script&lang=js&"),o=(i("./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&"),i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=Object(o.default)(n.default,s.render,s.staticRenderFns,!1,null,"26b335d3",null);a.options.__file="index.vue",e.default=a.exports},"./src/components/home/index.vue?vue&type=script&lang=js&":function(t,e,i){"use strict";i.r(e);var s=i("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=script&lang=js&");e.default=s.default},"./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&":function(t,e,i){"use strict";i.r(e);var s=i("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=style&index=0&id=26b335d3&lang=scss&scoped=true&"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e.default=n.a},"./src/components/home/index.vue?vue&type=template&id=26b335d3&scoped=true&":function(t,e,i){"use strict";i.r(e);var s=i("./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/home/index.vue?vue&type=template&id=26b335d3&scoped=true&");i.d(e,"render",(function(){return s.render})),i.d(e,"staticRenderFns",(function(){return s.staticRenderFns}))}}]);