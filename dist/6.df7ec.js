webpackJsonp([6],{301:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(1),u=l(s),c=n(122),f=l(c),p=n(317),d=l(p),h=n(325),b=l(h),m=n(38),g=l(m),y=n(121),v=l(y),w=[{path:"/",breadcrumbName:u.default.createElement(v.default,{name:"home"})},{path:"/Cell-Swipe",breadcrumbName:"Cell Swipe"}],x=[{text:"Mark as Unread",style:{background:"lightgray",color:"#fff",boxShadow:"0 -1px lightgray"},onPress:function(){console.log("1")}},{text:"Delete",style:{background:"red",color:"#fff",boxShadow:"0 -1px red"},onPress:function(){console.log("2")}}],C=[{text:"Delete",style:{background:"red",color:"#fff",boxShadow:"0 -1px red"},onPress:function(){console.log("3")}}],k=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.breadCrumbClick=n.breadCrumbClick.bind(n),n}return o(t,e),i(t,[{key:"breadCrumbClick",value:function(){this.props.currentAnimation("right",g.default.getWindowScrollTop())}},{key:"render",value:function(){return u.default.createElement("div",{className:"page subpage"},u.default.createElement(d.default,{routes:w,param:{onClick:this.breadCrumbClick}}),u.default.createElement("div",{className:"viewport"},u.default.createElement(b.default,{title:"向左滑动单元格出现功能按键，点击触发事件"},u.default.createElement(b.default.Cell,{titleText:"Item-1",right:x,swipeDisabled:!1}),u.default.createElement(b.default.Cell,{titleText:"Item-2",right:x,swipeDisabled:!1}),u.default.createElement(b.default.Cell,{titleText:"Item-3",right:x,swipeDisabled:!1})),u.default.createElement(b.default,{title:"向右滑动单元格出现功能按键，点击触发事件"},u.default.createElement(b.default.Cell,{titleText:"Item-1",left:C,swipeDisabled:!1}),u.default.createElement(b.default.Cell,{titleText:"Item-2",left:C,swipeDisabled:!1}),u.default.createElement(b.default.Cell,{titleText:"Item-3",left:C,swipeDisabled:!1})),u.default.createElement(b.default,{title:"滑动单元格（向左为例），自动触发事件"},u.default.createElement(b.default.Cell,{titleText:"Item-1"}),u.default.createElement(b.default.Cell,{titleText:"Item-2"}),u.default.createElement(b.default.Cell,{titleText:"Item-3"})),u.default.createElement(b.default,{title:"自定义按键组",style:{marginBottom:"42px"}},u.default.createElement(b.default.Cell,{titleText:"Item-1"}),u.default.createElement(b.default.Cell,{titleText:"Item-2"}),u.default.createElement(b.default.Cell,{titleText:"Item-3"}))))}}]),t}(s.Component);t.default=(0,f.default)({id:"cellSwipe",component:k})},307:function(e,t,n){var l,r;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l))e.push(n.apply(null,l));else if("object"===r)for(var o in l)a.call(l,o)&&l[o]&&e.push(o)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(l=[],void 0!==(r=function(){return n}.apply(t,l))&&(e.exports=r))}()},315:function(e,t,n){var l=n(327);"string"==typeof l&&(l=[[e.i,l,""]]);var r={};r.transform=void 0;n(299)(l,r);l.locals&&(e.exports=l.locals)},317:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),f=l(c),p=n(6),d=l(p),h=n(121),b=l(h),m=n(39),g=n(38),y=l(g),v=[{path:"/",breadcrumbName:f.default.createElement(b.default,{name:"home"})}],w=function(e,t,n,l){return t.indexOf(e)===t.length-1?"object"===u(e.breadcrumbName)?e.breadcrumbName:f.default.createElement("span",null,e.breadcrumbName):f.default.createElement(m.Link,s({to:n},l),e.breadcrumbName)},x=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.routes,n=e.itemRender,l=e.separator,r=e.param;return f.default.createElement("div",{className:"breadCrumb"},y.default.flattenArray(t.map(function(e,t,a){return t===a.length-1?n(e,a,e.path,r):[n(e,a,e.path,r),"string"==typeof l?f.default.createElement("span",{className:"breadCrumb-separator"},l):l]})))}}]),t}(f.default.Component);x.defaultProps={routes:v,itemRender:w,separator:"/"},x.PropTypes={routes:d.default.array,itemRender:d.default.func,separator:d.default.oneOfType([d.default.string,d.default.node]),param:d.default.object},t.default=x},325:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),f=n(1),p=l(f),d=n(326),h=l(d),b=n(6),m=l(b),g=n(307),y=l(g);n(315);var v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasCellSwiped:!1},n.changeCellGroupState=n.changeCellGroupState.bind(n),n}return s(t,e),c(t,[{key:"changeCellGroupState",value:function(e){this.setState({hasCellSwiped:e})}},{key:"render",value:function(){var e,t=this,n=this.props,l=n.prefixCls,o=n.className,i=n.title,s=n.style,c=n.children,f=a(n,["prefixCls","className","title","style","children"]),d=(0,y.default)((e={},r(e,l+"-group",!!l),r(e,o,!!o),e)),h=this.state.hasCellSwiped;return p.default.createElement("div",u({className:d,style:s},f),p.default.createElement("h5",{className:l+"-desc"},i),c?p.default.createElement("div",{className:l+"-wrapper"},p.default.Children.map(c,function(e){return p.default.cloneElement(e,{hasCellSwiped:h,changeCellGroupState:t.changeCellGroupState})})):null)}}]),t}(f.Component);v.Cell=h.default,v.defaultProps={title:"",prefixCls:"pb-cell"},v.PropTypes={prefixCls:m.default.string,className:m.default.string,title:m.default.String,children:m.default.any},t.default=v},326:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(1),f=l(c),p=n(6),d=l(p),h=n(307),b=l(h),m=n(121),g=l(m);n(315);var y=!1,v=void 0,w=void 0,x=void 0,C=null,k=function(){},E=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={swiping:!1},n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleCoverTouchStart=n.handleCoverTouchStart.bind(n),n.captureWidth=n.captureWidth.bind(n),n.openedLeft=!1,n.openedRight=!1,n}return s(t,e),u(t,[{key:"captureWidth",value:function(){this.leftBtnsWidth=this.left?this.left.offsetWidth:0,this.rightBtnsWidth=this.right?this.right.offsetWidth:0}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.captureWidth),this.leftBtnsWidth=this.left?this.left.offsetWidth:0,this.rightBtnsWidth=this.right?this.right.offsetWidth:0}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.captureWidth)}},{key:"componentWillUpdate",value:function(e){e.hasCellSwiped||!this.openedLeft&&!this.openedRight||this.close()}},{key:"_getContentEasing",value:function(e,t){var n=Math.abs(e)-Math.abs(t),l=n>0,r=0===t?e>0?1:-1:t>0?1:-1;return l?(e=t+Math.pow(n,.85)*r,Math.abs(e)>Math.abs(t)?e:t):e}},{key:"_setStyle",value:function(e){var t=e>0?this.leftBtnsWidth:-this.rightBtnsWidth,n=this._getContentEasing(e,t),l="translate3d("+n+"px, 0px, 0px)",r=n-this.leftBtnsWidth,a=n+this.rightBtnsWidth,o="translate3d("+r+"px, 0px, 0px)",i="translate3d("+a+"px, 0px, 0px)";this.content.style.transform=l,this.left&&(this.left.style.transform=o),this.right&&(this.right.style.transform=i),this.cover&&(this.cover.style.display=Math.abs(e)>0?"block":"none",this.cover.style.transform=l)}},{key:"handleTouchStart",value:function(e){if(!y){y=!0,this.props.hasCellSwiped&&this.props.changeCellGroupState(!1);var t=e.touches[0];v=t.clientX,w=t.clientY,x=+new Date}}},{key:"handleTouchMove",value:function(e){if(y){var t=e.touches[0],n=t.clientX-v;t.clientY;this.state.swiping||this.setState({swiping:!0}),this._setStyle(n),C=n}}},{key:"handleTouchEnd",value:function(e){if(y){y=!1,this.setState({swiping:!1});+new Date-x<300?C>0&&this.leftBtnsWidth>0?this.doOpenLeft():C<0&&this.rightBtnsWidth>0?this.doOpenRight():this._setStyle(0):C<-this.rightBtnsWidth/2&&this.rightBtnsWidth>0?this.doOpenRight():C>this.leftBtnsWidth/2&&this.leftBtnsWidth>0?this.doOpenLeft():this._setStyle(0),C=null}}},{key:"handleCoverTouchStart",value:function(){this.props.changeCellGroupState(!1)}},{key:"doOpenLeft",value:function(){this.open(this.leftBtnsWidth,!0,!1)}},{key:"doOpenRight",value:function(){this.open(-this.rightBtnsWidth,!1,!0)}},{key:"open",value:function(e,t,n){this.openedLeft||this.openedRight||!this.props.onOpen||this.onOpen(),this.openedLeft=t,this.openedRight=n,this._setStyle(e),this.props.changeCellGroupState(!0)}},{key:"close",value:function(){(this.openedLeft||this.openedRight)&&this.props.onClose&&this.props.onClose(),this._setStyle(0),this.openedLeft=!1,this.openedRight=!1}},{key:"onBtnClick",value:function(e,t){e.preventDefault(),e.stopPropagation();var n=t.onPress;n&&n(e),this.props.autoClose&&this.close()}},{key:"renderButtons",value:function(e){var t=this,n=this.props.prefixCls;return e&&e.length?f.default.createElement("div",{className:n+"-btnGroup"},e.map(function(e,l){return f.default.createElement("span",{key:l,className:n+"-swipe-btn "+(e.hasOwnProperty("className")?e.className:""),onClick:function(n){return t.onBtnClick(n,e)},style:e.style,role:"button"},e.text||"Click")})):null}},{key:"renderContent",value:function(){var e=this,t=this.props,n=t.prefixCls,l=t.titleIcon,r=t.titleText,a=t.titleLabel,o=t.swipeDisabled,i=t.customTitle,s=t.children,u=t.onCellClick;return f.default.createElement("div",{className:n+"-content",ref:function(t){return e.content=t},onTouchStart:o?k:this.handleTouchStart,onTouchMove:o?k:this.handleTouchMove,onTouchEnd:o?k:this.handleTouchEnd,onClick:u||k},i?1===f.default.Children.count(s)?s:s[0]:l?[f.default.createElement("div",{className:n+"-icon"},f.default.createElement(g.default,{name:l,className:"fa-lg"})),f.default.createElement("div",{className:n+"-title"},[r?f.default.createElement("span",{className:n+"-text"},r):null,a?f.default.createElement("span",{className:n+"-label"},a):null])]:f.default.createElement("div",{className:n+"-title"},r?f.default.createElement("span",{className:n+"-text"},r):null,a?f.default.createElement("span",{className:n+"-label"},a):null),f.default.createElement("div",{className:n+"-value"},i?s[1]:s))}},{key:"renderAllowRight",value:function(){var e=this.props,t=e.allowRight,n=e.prefixCls;return t?f.default.createElement("div",{className:n+"-allow-right"},f.default.createElement(g.default,{name:"angle-right"})):null}},{key:"render",value:function(){var e,t=this,n=this.props,l=n.prefixCls,o=n.className,i=n.left,s=n.right,u=n.swipeDisabled,c=(a(n,["prefixCls","className","left","right","swipeDisabled"]),this.state.swiping),p=(0,b.default)((e={},r(e,l,!!l),r(e,o,!!o),r(e,l+"-swipe",!u),r(e,l+"-swiping",c),e));return!i.length&&!s.length||u?f.default.createElement("a",{className:p},this.renderContent(),this.renderAllowRight()):f.default.createElement("a",{className:p},f.default.createElement("div",{className:l+"-cover",ref:function(e){return t.cover=e},onTouchStart:this.handleCoverTouchStart}),f.default.createElement("div",{className:l+"-left",ref:function(e){return t.left=e}},this.renderButtons(i)),this.renderContent(),f.default.createElement("div",{className:l+"-right",ref:function(e){return t.right=e}},this.renderButtons(s)),this.renderAllowRight())}}]),t}(c.Component);E.defaultProps={prefixCls:"pb-cell",left:[],right:[],autoClose:!1,swipeDisabled:!0,allowRight:!1,customTitle:!1},E.PropTypes={prefixCls:d.default.string,className:d.default.string,swipeDisabled:d.default.bool,left:d.default.array,right:d.default.array,onOpen:d.default.func,onClose:d.default.func,autoClose:d.default.bool,hasCellSwiped:d.default.bool,titleText:d.default.string,titleLabel:d.default.string,titleIcon:d.default.string,allowRight:d.default.bool,customTitle:d.default.bool,onCellClick:d.default.func},t.default=E},327:function(e,t,n){t=e.exports=n(298)(void 0),t.push([e.i,'.pb-cell-group {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    overflow: hidden;\n}\n\n.pb-cell-desc {\n    padding: 14px 8px 11px;\n    font-size: 12px;\n    color: #8f8f94;\n    font-weight: normal;\n}\n\n.pb-cell-wrapper {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.pb-cell-wrapper:before {\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: -1px;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell-wrapper:after {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell {\n    display: block;\n    background-color: #fff;\n    box-sizing: border-box;\n    height: 46px;\n    /*overflow: hidden;*/\n    position: relative;\n    color: #333;\n    font-weight: 400;\n    text-decoration: none;\n}\n\n.pb-cell:after {\n    position: absolute;\n    right: 0;\n    left: 11px;\n    bottom: 0;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell:last-child:after{\n    height: 0;\n}\n\n.pb-cell-left {\n    position: absolute;\n    height: 100%;\n    left: 0;\n    -webkit-transform: translate3d(-100%,0,0);\n    transform: translate3d(-100%,0,0);\n    z-index: 1;\n}\n\n.pb-cell-right {\n    position: absolute;\n    height: 100%;\n    right: 0;\n    top: 0;\n    -webkit-transform: translate3d(100%,0,0);\n    transform: translate3d(100%,0,0);\n    z-index: 1;\n}\n\n.pb-cell-content{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    width: 100%;\n    height: 100%;\n    padding: 0 11px;\n    line-height: 1;\n    touch-action: pan-y;\n}\n\n\n.pb-cell:not(.no-feedback-cell) .pb-cell-content:active {\n    background-color: #f2f2f2;\n}\n\n.pb-cell-cover {\n    position: absolute;\n    z-index: 2;\n    background-color: transparent;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    display: none;\n}\n\n.pb-cell-icon {\n    -webkit-flex: 0 0 26px;\n    -ms-flex: 0 0 26px;\n    flex: 0 0 26px ;\n    margin-right: 7px;\n    text-align: center;\n    color: #f07c01;\n}\n\n.pb-cell-title {\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n\n.pb-cell-text {\n    font-size: 14px;\n}\n\n.pb-cell-label {\n    color: #888;\n    display: block;\n    font-size: 12px;\n    margin-top: 6px;\n}\n\n.pb-cell-value {\n    flex: 0;\n}\n\n.pb-cell-allow-right {\n    position: absolute;\n    top: 50%;\n    right: 14px;\n    width: 14px;\n    height: 16px;\n    margin-top: -8px;\n    text-align: center;\n    color: #818a91;\n    line-height: 16px;\n}\n\n.pb-cell-btnGroup {\n    height: 100%;\n}\n\n.pb-cell-swipe-btn {\n    display: inline-block;\n    height: 100%;\n    line-height: 46px;\n    padding: 0 10px;\n}\n\n.pb-cell-swipe .pb-cell-left,\n.pb-cell-swipe .pb-cell-content,\n.pb-cell-swipe .pb-cell-right {\n    -webkit-transition: -webkit-transform .15s ease-in-out;\n    transition: -webkit-transform .15s ease-in-out;\n    transition: transform .15s ease-in-out;\n}\n\n.pb-cell-swipe.pb-cell-swiping .pb-cell-left,\n.pb-cell-swipe.pb-cell-swiping .pb-cell-content,\n.pb-cell-swipe.pb-cell-swiping .pb-cell-right {\n    -webkit-transition: -webkit-transform 0s ease;\n    transition: -webkit-transform 0s ease;\n    transition: transform 0s ease;\n}\n\n.field-cell .pb-cell-value {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}',""])}});