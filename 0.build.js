(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/features-block.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/features-block.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phone = __webpack_require__(/*! ../../static/img/phone2.png */ "./src/static/img/phone2.png");

var _phone2 = _interopRequireDefault(_phone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			itemsLeft: [{
				'title': 'Free forever',
				'description': 'Trading terminal, bots, etc.',
				icon: 'money_off'
			}, {
				'title': 'Real-time data',
				'description': 'Connected directly to exchanges',
				icon: 'access_time'
			}],
			itemsRight: [{
				'title': 'Cross-platform',
				'description': 'Web and mobile applications',
				icon: 'devices_other'
			}, {
				'title': 'Secure',
				'description': 'API keys are encrypted',
				icon: 'verified_user'
			}],
			image: _phone2.default
		};
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pageable = __webpack_require__(/*! pageable */ "./node_modules/pageable/dist/pageable.min.js");

var _pageable2 = _interopRequireDefault(_pageable);

var _initBlock = __webpack_require__(/*! ./init-block */ "./src/components/root/init-block.vue");

var _initBlock2 = _interopRequireDefault(_initBlock);

var _featuresBlock = __webpack_require__(/*! ./features-block */ "./src/components/root/features-block.vue");

var _featuresBlock2 = _interopRequireDefault(_featuresBlock);

var _socialBlock = __webpack_require__(/*! ./social-block */ "./src/components/root/social-block.vue");

var _socialBlock2 = _interopRequireDefault(_socialBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var options = {
	pips: true,
	animation: 500,
	infinite: true
};

exports.default = {
	mounted: function mounted() {
		this.test();
	},
	updated: function updated() {
		this.test();
	},

	methods: {
		test: function test() {
			new _pageable2.default(this.$refs.container, options);
		}
	},
	components: {
		initBlock: _initBlock2.default,
		featuresBlock: _featuresBlock2.default,
		socialBlock: _socialBlock2.default
	}

};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/init-block.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/init-block.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phone = __webpack_require__(/*! ../../static/img/phone.png */ "./src/static/img/phone.png");

var _phone2 = _interopRequireDefault(_phone);

var _googlePlayBadge = __webpack_require__(/*! ../../static/img/badges/google-play-badge.svg */ "./src/static/img/badges/google-play-badge.svg");

var _googlePlayBadge2 = _interopRequireDefault(_googlePlayBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			image: _phone2.default,
			googleBadge: _googlePlayBadge2.default
		};
	}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/social-block.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			items: [{
				name: '',
				link: '',
				icon: ''
			}, {
				name: '',
				link: '',
				icon: ''
			}, {
				name: '',
				link: '',
				icon: ''
			}]
		};
	}
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pg-wrapper{overflow-y:hidden!important}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/pageable/dist/pageable.min.js":
/*!****************************************************!*\
  !*** ./node_modules/pageable/dist/pageable.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Pageable
 Copyright (c) 2017 Karl Saunders (http://mobius.ovh)
 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

 Version: 0.6.8

*/
function _instanceof(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var b=this;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null}),function(a,b){"object"===( false?undefined:_typeof(exports))?module.exports=b("Pageable"): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"==typeof global?this.window||this.global:global,function(){"use strict";var a=function(){},b=function(a,b){return a.dataset?a.dataset[b]:a.getAttribute("data-"+b)},c=function(a){return"[object Object]"===Object.prototype.toString.call(a)},d=function a(b,d){for(var e in d)if(d.hasOwnProperty(e)){var f=d[e];f&&c(f)?(b[e]=b[e]||{},a(b[e],f)):b[e]=f}return b},e=function(a,b,c){var d;return function(){if(c=c||this,!d)return a.apply(c,arguments),d=!0,setTimeout(function(){d=!1},b)}},f=function(a){this.instance=a,this.running=!1,this.config=this.instance.config.slideshow};f.prototype.start=function(){var a=this;a.running||(a.running=!0,a.instance.slideIndex=a.instance.index,a.instance.interval=setInterval(function(){a.instance.config.onBeforeStart.call(a.instance,a.instance.slideIndex),setTimeout(function(){a.instance.config.infinite&&a.instance._overScroll(!0),a.instance.index<a.instance.pages.length-1?a.instance.slideIndex++:a.instance.slideIndex=0,a.instance.scrollToIndex(a.instance.slideIndex)},a.config.delay||0)},a.config.interval))},f.prototype.stop=function(){this.running&&(clearInterval(this.instance.interval),this.instance.slideInterval=!1,this.running=!1)};var g=function(c,e){if(void 0===c)return console.error("Pageable:","No container defined.");var f=this;return(this.container="string"==typeof c?document.querySelector(c):c,!this.container)?console.error("Pageable:","The container could not be found."):(this.config=d({pips:!0,animation:300,delay:0,throttle:50,orientation:"vertical",easing:function(a,e,b,c){return-b*(a/=c)*(a-2)+e},onInit:a,onUpdate:a,onBeforeStart:a,onStart:a,onScroll:a,onFinish:a,swipeThreshold:50,freeScroll:!1,slideshow:!1,infinite:!1,childSelector:"[data-anchor]",events:{wheel:!0,mouse:!0,touch:!0,keydown:!0}},e),this.events=this.config.events,this.pages=[].slice.call(this.container.querySelectorAll(this.config.childSelector)),this.pages.length?void(this.horizontal="horizontal"===this.config.orientation,this.anchors=[],this.pages.forEach(function(a,c){var d="",e=b(a,"anchor");d=e?e.replace(/\s+/,"-").toLowerCase():Array.isArray(f.config.anchors)&&f.config.anchors.length?f.config.anchors[c].replace(/\s+/,"-").toLowerCase():a.className.replace(/\s+/,"-").toLowerCase(),a.id!==d&&(a.id=d),f.anchors.push("#"+d),a.classList.add("pg-page"),0==c?a.classList.add("pg-active"):a.classList.remove("pg-active")}),this.axis=this.horizontal?"x":"y",this.mouseAxis={x:"clientX",y:"clientY"},this.scrollAxis={x:"scrollLeft",y:"scrollTop"},this.size={x:"width",y:"height"},this.bar=this._getScrollBarWidth(),this.index=0,this.slideIndex=0,this.oldIndex=0,this.down=!1,this.initialised=!1,this.touch="ontouchstart"in window||window.DocumentTouch&&_instanceof(document,DocumentTouch),this.init()):console.error("Pageable:","No child nodes matching the selector "+this.config.childSelector+" could be found."))};return g.prototype.init=function(){if(!this.initialised&&!this.container.pageable){var a=this.config;if(this.wrapper=document.createElement("div"),this.container.parentNode.insertBefore(this.wrapper,this.container),this.wrapper.appendChild(this.container),this.wrapper.classList.add("pg-wrapper"),this.wrapper.classList.add("pg-"+a.orientation),this.wrapper.classList.add("pg-wrapper"),this.container.classList.add("pg-container"),document.body.style.margin=0,document.body.style.overflow="hidden",this.container.style.display="inline-block",["Prev","Next"].forEach(function(b){var c="nav"+b+"El";a[c]&&("string"==typeof a[c]?this[c]=document.querySelector(a[c]):_instanceof(a[c],Element)&&(this[c]=a[c]),this[c]&&this[c].classList.add("pg-nav"))},this),a.pips){var b=document.createElement("nav"),c=document.createElement("ul");b.classList.add("pg-pips"),this.pages.forEach(function(b,d){var e=document.createElement("li"),f=document.createElement("a"),a=document.createElement("span");f.href="#"+b.id,0==d&&f.classList.add("active"),f.appendChild(a),e.appendChild(f),c.appendChild(e)}),b.appendChild(c),this.wrapper.appendChild(b),this.pips=[].slice.call(c.children)}this.pageCount=this.pages.length,this.lastIndex=this.pageCount-1,a.infinite&&this._toggleInfinite(!1,!0),this.bind(),this.update(),this._load();var d=this._getData();this.config.onInit.call(this,d),this.emit("init",d),this.initialised=!0,this.container.pageable=this,a.slideshow&&"function"==typeof f&&(this.slider=new f(this),this.slider.start())}},g.prototype.bind=function(){this.callbacks={wheel:this._wheel.bind(this),update:e(this.update.bind(this),this.config.throttle),load:this._load.bind(this),start:this._start.bind(this),drag:this._drag.bind(this),stop:this._stop.bind(this),click:this._click.bind(this),prev:this.prev.bind(this),next:this.next.bind(this),keydown:this._keydown.bind(this)},document.addEventListener("keydown",this.callbacks.keydown,!1),this.wrapper.addEventListener("wheel",this.callbacks.wheel,!1),window.addEventListener("resize",this.callbacks.update,!1),this.wrapper.addEventListener(this.touch?"touchstart":"mousedown",this.callbacks.start,!1),window.addEventListener(this.touch?"touchmove":"mousemove",this.callbacks.drag,!1),window.addEventListener(this.touch?"touchend":"mouseup",this.callbacks.stop,!1),this.navPrevEl&&(this.navPrevEl.addEventListener("click",this.callbacks.prev,!1),this.navNextEl&&this.navNextEl.addEventListener("click",this.callbacks.next,!1)),document.addEventListener("click",this.callbacks.click,!1)},g.prototype.unbind=function(){this.wrapper.removeEventListener("wheel",this.callbacks.wheel),window.removeEventListener("resize",this.callbacks.update),this.wrapper.removeEventListener(this.touch?"touchstart":"mousedown",this.callbacks.start),window.addEventListener(this.touch?"touchmove":"mousemove",this.callbacks.drag),window.removeEventListener(this.touch?"touchend":"mouseup",this.callbacks.stop),document.removeEventListener("keydown",this.callbacks.keydown),this.navPrevEl&&this.navPrevEl.removeEventListener("click",this.callbacks.prev,!1),this.navNextEl&&this.navNextEl.removeEventListener("click",this.callbacks.next,!1),document.removeEventListener("click",this.callbacks.click)},g.prototype.scrollToPage=function(a){this.scrollToIndex(a-1)},g.prototype.scrollToAnchor=function(a){this.scrollToIndex(this.anchors.indexOf(a))},g.prototype.scrollToIndex=function(a){if(!this.scrolling&&0<=a&&a<=this.pages.length-1){var b=this.index;this.index=a,this.oldIndex=b,this._scrollBy(this._getScrollAmount(b))}},g.prototype.next=function(){if(this.config.infinite){var a=this.index;if(a===this.lastIndex)return a++,this._scrollBy(-this.data.window[this.size[this.axis]],a)}this.scrollToIndex(this.index+1)},g.prototype.prev=function(){if(this.config.infinite){var a=this.index;if(0===a)return a--,this._scrollBy(this.data.window[this.size[this.axis]],a)}this.scrollToIndex(this.index-1)},g.prototype.update=function(){clearTimeout(this.timer),this.data={window:{width:window.innerWidth,height:window.innerHeight},container:{height:this.wrapper.scrollHeight,width:this.wrapper.scrollWidth}};var a=this.size[this.axis],b=this.horizontal?this.size.y:this.size.x;this.wrapper.style["overflow-"+this.axis]="scroll",this.wrapper.style[a]=this.data.window[a]+"px",this.wrapper.style[b]=this.data.window[b]+this.bar+"px";var c=this.config.infinite?this.pages.length+2:this.pages.length,d=this.config.infinite?this.data.window[a]:0;this.container.style[a]=c*this.data.window[a]+"px",this.wrapper.style["padding-"+(this.horizontal?"bottom":"right")]=this.bar+"px",this.wrapper[this.scrollAxis[this.axis]]=this.index*this.data.window[a]+d,this.scrollSize=c*this.data.window[a]-this.data.window[a],this.scrollPosition=this.data.window[a]*this.index+d,this.pages.forEach(function(c){this.horizontal&&(c.style.float="left"),c.style[a]=this.data.window[a]+"px",c.style[b]=this.data.window[b]+"px"},this),this.config.infinite&&this.clones.forEach(function(c){this.horizontal&&(c.style.float="left"),c.style[a]=this.data.window[a]+"px",c.style[b]=this.data.window[b]+"px"},this),this.config.onUpdate.call(this,this._getData()),this.emit("update",this._getData())},g.prototype.orientate=function(a){switch(a){case"vertical":this.horizontal=!1,this.axis="y",this.container.style.width="";break;case"horizontal":this.horizontal=!0,this.axis="x",this.container.style.height="";break;default:return!1;}this.horizontal?(this.wrapper.classList.add("pg-horizontal"),this.wrapper.classList.remove("pg-vertical")):(this.wrapper.classList.add("pg-vertical"),this.wrapper.classList.remove("pg-horizontal")),this.config.orientation=a,this.update()},g.prototype.slideshow=function(){return this.slider},g.prototype.destroy=function(){if(this.initialised){this.emit("destroy"),this.unbind(),document.body.style.margin="",document.body.style.overflow="",this.container.style.display="",this.container.style.height="",this.container.style.width="",this.container.classList.remove("pg-container"),this.wrapper.parentNode.replaceChild(this.container,this.wrapper);for(var a,b=0;b<this.pages.length;b++)a=this.pages[b],a.style.height="",a.style.width="",a.style.float="",a.classList.remove("pg-page"),a.classList.remove("pg-active");["Prev","Next"].forEach(function(a){var b="nav"+a+"El";this[b]&&(this[b].classList.remove("active"),this[b].classList.remove("pg-nav"))},this),this.config.infinite&&this._toggleInfinite(!0),this.config.slideshow&&(this.slider.stop(),this.slider=!1),this.initialised=!1,delete this.container.pageable}},g.prototype.on=function(a,b){this.listeners=this.listeners||{},this.listeners[a]=this.listeners[a]||[],this.listeners[a].push(b)},g.prototype.off=function(a,b){this.listeners=this.listeners||{},!1==a in this.listeners||this.listeners[a].splice(this.listeners[a].indexOf(b),1)},g.prototype.emit=function(a){if(this.listeners=this.listeners||{},!1!=a in this.listeners)for(var b=0;b<this.listeners[a].length;b++)this.listeners[a][b].apply(this,[].slice.call(arguments,1))},g.prototype._click=function(a){if(a.target.closest){var b=a.target.closest("a");b&&-1<this.anchors.indexOf(b.hash)&&(a.preventDefault(),this.scrollToAnchor(b.hash))}},g.prototype._preventDefault=function(a){a.preventDefault(),a.stopPropagation()},g.prototype._keydown=function(a){if(this.config.events.keydown){if(this.scrolling||this.dragging)return a.preventDefault(),!1;var b=!1;void 0===a.key?void 0!==a.keyCode&&(b=a.keyCode):b=a.key;var c="Arrow"+("x"===this.axis?"Left":"Up"),d="Arrow"+("x"===this.axis?"Right":"Down");b&&(33===b||37===b||b===c||"PageUp"===b?(a.preventDefault(),this.prev()):34===b||39===b||b===d||"PageDown"===b?(a.preventDefault(),this.next()):void 0)}},g.prototype._start=function(a){var b=this._getEvent(a);return!(this.scrolling||this.dragging)&&("touchstart"!==a.type||this.events.touch?!!("mousedown"!==a.type||this.events.mouse&&0===a.button)&&!!b.target.closest(this.config.childSelector)&&void(this._preventDefault(a),this.dragging=this.config.freeScroll,this.config.slideshow&&this.slider.stop(),this.down={x:b.clientX,y:b.clientY},this.startIndex=this.index,this.config.onBeforeStart.call(this,this.index)):(b.target.closest("a")||this._preventDefault(a),!1))},g.prototype._drag=function(a){if(this.config.freeScroll&&this.dragging&&!this.scrolling){var b=this._getEvent(a),c=this._limitDrag(b),d=this._getData();this.container.style.transform=this.horizontal?"translate3d("+c+"px, 0, 0)":"translate3d(0, "+c+"px, 0)",d.scrolled-=c,this.config.onScroll.call(this,d,"drag"),this.emit("scroll",d)}},g.prototype._stop=function(a){var b=this,c=this._getEvent(a),d=function(){b.index<b.pages.length-1&&b.index++},e=function(){0<b.index&&b.index--};this.oldIndex=this.index;var f=Math.abs(c[this.mouseAxis[this.axis]]-this.down[this.axis])>=this.config.swipeThreshold,g=this.down&&f;if(this.config.slideshow&&this.slider.start(),this.dragging&&!this.scrolling){var h=this._limitDrag(c);return this.dragging=h,g&&(this.config.infinite&&this._overScroll(0>h,h),0<h?e():d()),this._scrollBy(this._getScrollAmount(this.oldIndex)-h),void(this.down=!1)}if(this.down&&!this.scrolling){var i=c[this.mouseAxis[this.axis]]<this.down[this.axis],j=c[this.mouseAxis[this.axis]]>this.down[this.axis];g&&(this.config.infinite&&this._overScroll(i),i?d():j&&e()),this.startIndex===this.index?this.config.onFinish.call(this,this._getData()):this._scrollBy(this._getScrollAmount(this.oldIndex)),this.down=!1}},g.prototype._wheel=function(a){if(a.preventDefault(),this.events.wheel&&!this.scrolling){var b=this.index,c=this.index,d=0<a.deltaY;this.config.infinite&&this._overScroll(d),d?this.index<this.pages.length-1&&b++:0<this.index&&b--,b!==c&&(this.oldIndex=c,this.scrollToIndex(b))}},g.prototype._load=function(){var a=location.hash;if(a){var b=this.anchors.indexOf(a);if(-1<b){var c=this.config.infinite?1:0;this.scrollPosition=this.data.window[this.size[this.axis]]*(b+c);var d=this._getData();this.index=b,this.slideIndex=b,this.pages.forEach(function(a,b){b===this.index?a.classList.add("pg-active"):a.classList.remove("pg-active")},this),this._setNavs(),this._setPips(),this.config.onScroll.call(this,d),this.config.onFinish.call(this,d),this.emit("scroll",d)}}this.update()},g.prototype._getEvent=function(a){return this.touch?"touchend"===a.type?a.changedTouches[0]:a.touches[0]:a},g.prototype._getData=function(){var a=this.config.infinite?this.scrollPosition-this.data.window[this.size[this.axis]]:this.scrollPosition,b=this.config.infinite?this.scrollSize-2*this.data.window[this.size[this.axis]]:this.scrollSize;return{index:this.index,percent:100*(a/b),scrolled:a,max:b}},g.prototype._overScroll=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,c=this.index;c===this.lastIndex&&a?(c++,this._scrollBy(-this.data.window[this.size[this.axis]]-b,c)):0===c&&!a&&(c--,this._scrollBy(this.data.window[this.size[this.axis]]-b,c))},g.prototype._scrollBy=function(a,b){if(this.scrolling)return!1;this.scrolling=!0,this.config.onBeforeStart.call(this,this.oldIndex),this.emit("scroll.before",this._getData()),this.config.slideshow&&this.slider.stop();var c=this;c.timer=setTimeout(function(){var d=Date.now(),e=c._getScrollOffset();c.config.onStart.call(c,c.pages[c.index].id),c.emit("scroll.start",c._getData()),c.frame=requestAnimationFrame(function f(){var g=Date.now(),h=g-d;if(h>c.config.animation){cancelAnimationFrame(c.frame),c.container.style.transform="",c.frame=!1,c.scrolling=!1,c.dragging=!1,c.config.slideshow&&c.slider.start(),c.config.infinite&&(b===c.pageCount?c.index=0:-1===b&&(c.index=c.lastIndex));var i=c._getData();return window.location.hash=c.pages[c.index].id,c.pages.forEach(function(a,b){b===c.index?a.classList.add("pg-active"):a.classList.remove("pg-active")},c),c.slideIndex=c.index,c._setPips(),c._setNavs(),c.config.onFinish.call(c,i),c.emit("scroll.end",i),!1}var j=c.dragging?c.dragging:0,k=c.config.easing(h,j,a,c.config.animation);c.container.style.transform=c.horizontal?"translate3d("+k+"px, 0, 0)":"translate3d(0, "+k+"px, 0)",c.scrollPosition=e[c.axis]-k;var i=c._getData();c.config.infinite&&(b===c.pageCount?i.scrolled=0:-1===b&&(i.scrolled=i.max)),c.config.onScroll.call(c,i),c.emit("scroll",i),c.frame=requestAnimationFrame(f)})},c.dragging?0:c.config.delay)},g.prototype._getScrollOffset=function(){return{x:this.wrapper.scrollLeft,y:this.wrapper.scrollTop}},g.prototype._getScrollAmount=function(a,c){void 0===c&&(c=this.index);var d=this.data.window[this.size[this.axis]],e=d*c;return d*a-e},g.prototype._getScrollBarWidth=function(){var a=document.body,b=document.createElement("div"),c=0;return b.style.cssText="width: 100; height: 100; overflow: scroll; position: absolute; top: -9999;",a.appendChild(b),c=b.offsetWidth-b.clientWidth,a.removeChild(b),c},g.prototype._toggleInfinite=function(a,b){if(a&&this.config.infinite)this.clones.forEach(function(a){this.container.removeChild(a)},this),this.config.infinite=!1;else if(!this.config.infinite||b){this.config.infinite=!0;var c=this.pages[0].cloneNode(!0),d=this.pages[this.lastIndex].cloneNode(!0);c.id+="-clone",d.id+="-clone",c.classList.add("pg-clone"),d.classList.add("pg-clone"),c.classList.remove("pg-active"),d.classList.remove("pg-active"),this.clones=[c,d],this.container.insertBefore(d,this.pages[0]),this.container.appendChild(c)}this.update()},g.prototype._limitDrag=function(a){var b=a[this.mouseAxis[this.axis]]-this.down[this.axis];return!this.config.infinite&&(0===this.index&&0<b||this.index===this.pages.length-1&&0>b)&&(b/=10),b},g.prototype._setNavs=function(){this.navPrevEl&&(this.config.infinite||0<this.index?this.navPrevEl.classList.add("active"):this.navPrevEl.classList.remove("active")),this.navNextEl&&(this.config.infinite||this.index<this.pages.length-1?this.navNextEl.classList.add("active"):this.navNextEl.classList.remove("active"))},g.prototype._setPips=function(a){this.config.pips&&(void 0===a&&(a=this.index),this.pips.forEach(function(b,c){c==a?b.firstElementChild.classList.add("active"):b.firstElementChild.classList.remove("active")}))},g});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/features-block.vue?vue&type=template&id=62558466&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/features-block.vue?vue&type=template&id=62558466& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content features-block"},[_c('div',{staticClass:"content-header"}),_vm._v(" "),_c('div',{staticClass:"content-body flex-centered"},[_c('div',{staticClass:"container grid-md"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"features-section column col-4 col-md-6 col-sm-12 text-right text-left-sm",staticStyle:{"justify-content":"flex-end"}},_vm._l((_vm.itemsLeft),function(i){return _c('div',{staticClass:"features-item tile tile-list"},[_c('div',{staticClass:"tile-section tile-icon show-sm"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(i.icon))])]),_vm._v(" "),_c('div',{staticClass:"tile-section"},[_c('i',{staticClass:"material-icons hide-sm"},[_vm._v(_vm._s(i.icon))]),_vm._v(" "),_c('div',{staticClass:"h5"},[_vm._v(_vm._s(i.title))]),_vm._v(" "),_c('div',{staticClass:"text-secondary"},[_vm._v(_vm._s(i.description))])])])})),_vm._v(" "),_c('div',{staticClass:"column col-4 flex-centered hide-md"},[_c('img',{staticStyle:{"height":"70vh"},attrs:{"src":_vm.image,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"features-section column col-4 col-md-6 col-sm-12"},_vm._l((_vm.itemsRight),function(i){return _c('div',{staticClass:"features-item tile tile-list"},[_c('div',{staticClass:"tile-section tile-icon show-sm"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(i.icon))])]),_vm._v(" "),_c('div',{staticClass:"tile-section"},[_c('i',{staticClass:"material-icons hide-sm"},[_vm._v(_vm._s(i.icon))]),_vm._v(" "),_c('div',{staticClass:"h5"},[_vm._v(_vm._s(i.title))]),_vm._v(" "),_c('div',{staticClass:"text-secondary"},[_vm._v(_vm._s(i.description))])])])}))])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=template&id=d6bbab50&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/index.vue?vue&type=template&id=d6bbab50& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container"},[_c('init-block',{attrs:{"data-anchor":"home"}}),_vm._v(" "),_c('features-block',{attrs:{"data-anchor":"features"}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content background-secondary init-block"},[_c('div',{staticClass:"content-header"}),_vm._v(" "),_c('div',{staticClass:"content-body flex-centered"},[_c('div',{staticClass:"container grid-md"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"column col-6 col-md-12 flex-centered-vertical"},[_c('div',{staticClass:"width100 text-center-sm"},[_c('div',{staticClass:"text-secondary text-smallcaps text-uppercase mb"},[_vm._v("Easy, Smart, Secure")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"row col-gapless text-center-sm"},[_c('span',{staticClass:"column col-6 col-sm-12"},[_c('img',{staticClass:"badge",attrs:{"src":_vm.googleBadge,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"column col-6 col-sm-12"},[_c('a',{staticClass:"btn btn-link",attrs:{"href":'//' + _vm.$store.state.url}},[_vm._v("Authenticate")])])])])]),_vm._v(" "),_c('div',{staticClass:"column col-6 col-md-12 flex-centered image"},[_c('img',{staticStyle:{"height":"70vh"},attrs:{"src":_vm.image,"alt":""}})])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h2 mb2"},[_vm._v("Boost trading"),_c('br'),_vm._v("profit for free")])}]



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h100 flex-centered"})}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e60722f", content, true, {});

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9f03ff34", content, true, {});

/***/ }),

/***/ "./src/components/root/features-block.vue":
/*!************************************************!*\
  !*** ./src/components/root/features-block.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-block.vue?vue&type=template&id=62558466& */ "./src/components/root/features-block.vue?vue&type=template&id=62558466&");
/* harmony import */ var _features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features-block.vue?vue&type=script&lang=js& */ "./src/components/root/features-block.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__["render"],
  _features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "features-block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/root/features-block.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/root/features-block.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./features-block.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/features-block.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/features-block.vue?vue&type=template&id=62558466&":
/*!*******************************************************************************!*\
  !*** ./src/components/root/features-block.vue?vue&type=template&id=62558466& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./features-block.vue?vue&type=template&id=62558466& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/features-block.vue?vue&type=template&id=62558466&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_features_block_vue_vue_type_template_id_62558466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/root/index.vue":
/*!***************************************!*\
  !*** ./src/components/root/index.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d6bbab50& */ "./src/components/root/index.vue?vue&type=template&id=d6bbab50&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/root/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/components/root/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/root/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/root/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/index.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************!*\
  !*** ./src/components/root/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/index.vue?vue&type=template&id=d6bbab50&":
/*!**********************************************************************!*\
  !*** ./src/components/root/index.vue?vue&type=template&id=d6bbab50& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d6bbab50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/index.vue?vue&type=template&id=d6bbab50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d6bbab50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/root/init-block.vue":
/*!********************************************!*\
  !*** ./src/components/root/init-block.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-block.vue?vue&type=template&id=4f6a0d0e& */ "./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e&");
/* harmony import */ var _init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-block.vue?vue&type=script&lang=js& */ "./src/components/root/init-block.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "init-block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/root/init-block.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/root/init-block.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./init-block.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/init-block.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e&":
/*!***************************************************************************!*\
  !*** ./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./init-block.vue?vue&type=template&id=4f6a0d0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/init-block.vue?vue&type=template&id=4f6a0d0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_init_block_vue_vue_type_template_id_4f6a0d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/root/social-block.vue":
/*!**********************************************!*\
  !*** ./src/components/root/social-block.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-block.vue?vue&type=template&id=08027510&scoped=true& */ "./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true&");
/* harmony import */ var _social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-block.vue?vue&type=script&lang=js& */ "./src/components/root/social-block.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& */ "./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08027510",
  null
  
)

component.options.__file = "social-block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/root/social-block.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/root/social-block.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./social-block.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=style&index=0&id=08027510&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_style_index_0_id_08027510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./social-block.vue?vue&type=template&id=08027510&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/root/social-block.vue?vue&type=template&id=08027510&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_block_vue_vue_type_template_id_08027510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/static/img/badges/google-play-badge.svg":
/*!*****************************************************!*\
  !*** ./src/static/img/badges/google-play-badge.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google-play-badge.svg?9078839d900e2d5b9c1db4eca9ef62f6";

/***/ }),

/***/ "./src/static/img/phone.png":
/*!**********************************!*\
  !*** ./src/static/img/phone.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "phone.png?5f5d376e7032bf2ee59e2912e84e7bd5";

/***/ }),

/***/ "./src/static/img/phone2.png":
/*!***********************************!*\
  !*** ./src/static/img/phone2.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "phone2.png?7a01acd380040a4aa70898f31cfc6ca9";

/***/ })

}]);
//# sourceMappingURL=0.build.js.map