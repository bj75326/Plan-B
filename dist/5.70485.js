webpackJsonp([5],{300:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(1),c=l(s),u=n(122),f=l(u),p=n(309),d=l(p),h=n(311),b=l(h),m=[{text:"Mark as Unread",style:{background:"lightgray",color:"#fff",boxShadow:"0 -1px lightgray"},onPress:function(){console.log("1")}},{text:"Delete",style:{background:"red",color:"#fff",boxShadow:"0 -1px red"},onPress:function(){console.log("2")}}],g=[{text:"Delete",style:{background:"red",color:"#fff",boxShadow:"0 -1px red"},onPress:function(){console.log("3")}}],y=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"page subpage"},c.default.createElement(d.default,{title:"Cell Swipe",currentAnimation:this.props.currentAnimation}),c.default.createElement("div",{className:"viewport"},c.default.createElement(b.default,{title:"向左滑动单元格出现功能按键，点击触发事件",style:{marginTop:"11px"}},c.default.createElement(b.default.Cell,{titleText:"Item-1",right:m,swipeDisabled:!1}),c.default.createElement(b.default.Cell,{titleText:"Item-2",right:m,swipeDisabled:!1}),c.default.createElement(b.default.Cell,{titleText:"Item-3",right:m,swipeDisabled:!1})),c.default.createElement(b.default,{title:"向右滑动单元格出现功能按键，点击触发事件"},c.default.createElement(b.default.Cell,{titleText:"Item-1",left:g,swipeDisabled:!1}),c.default.createElement(b.default.Cell,{titleText:"Item-2",left:g,swipeDisabled:!1}),c.default.createElement(b.default.Cell,{titleText:"Item-3",left:g,swipeDisabled:!1})),c.default.createElement(b.default,{title:"滑动单元格（向左为例），自动触发事件"},c.default.createElement(b.default.Cell,{titleText:"Item-1"}),c.default.createElement(b.default.Cell,{titleText:"Item-2"}),c.default.createElement(b.default.Cell,{titleText:"Item-3"})),c.default.createElement(b.default,{title:"自定义按键组",style:{marginBottom:"42px"}},c.default.createElement(b.default.Cell,{titleText:"Item-1"}),c.default.createElement(b.default.Cell,{titleText:"Item-2"}),c.default.createElement(b.default.Cell,{titleText:"Item-3"}))))}}]),t}(s.Component);t.default=(0,f.default)({id:"cellSwipe",component:y})},305:function(e,t,n){var l,i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l))e.push(n.apply(null,l));else if("object"===i)for(var a in l)r.call(l,a)&&l[a]&&e.push(a)}}return e.join(" ")}var r={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(l=[],void 0!==(i=function(){return n}.apply(t,l))&&(e.exports=i))}()},307:function(e,t,n){var l=n(313);"string"==typeof l&&(l=[[e.i,l,""]]);var i={};i.transform=void 0;n(298)(l,i);l.locals&&(e.exports=l.locals)},309:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(1),c=l(s),u=n(6),f=l(u),p=n(121),d=l(p),h=n(39),b=n(28),m=l(b),g=n(38),y=l(g),v=n(40),w=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLinkClick=n.handleLinkClick.bind(n),n}return a(t,e),o(t,[{key:"shouldComponentUpdate",value:function(e){return!(0,v.is)((0,v.fromJS)(e),(0,v.fromJS)(this.props))}},{key:"handleLinkClick",value:function(){this.props.currentAnimation("right",y.default.getWindowScrollTop())}},{key:"render",value:function(){var e=(m.default.projectName,this.props),t=e.title,n=e.description;return c.default.createElement("div",{className:"subtitle"},c.default.createElement("div",{className:"page-back"},c.default.createElement(h.Link,{to:"/",onClick:this.handleLinkClick},c.default.createElement(d.default,{name:"angle-left"}))),c.default.createElement("div",{className:"page-title"},t),c.default.createElement("div",{className:"extension"}),c.default.createElement("div",{className:"desc"},n.map(function(e){return c.default.createElement("p",null,y.default.trim(e))})))}}]),t}(s.Component);w.defaultProps={title:"",description:["此例请用移动端查看"]},w.PropTypes={title:f.default.string.isRequired,description:f.default.array,currentAnimation:f.default.func.isRequired},t.default=w},311:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),f=n(1),p=l(f),d=n(312),h=l(d),b=n(6),m=l(b),g=n(305),y=l(g);n(307);var v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasCellSwiped:!1},n.changeCellGroupState=n.changeCellGroupState.bind(n),n}return s(t,e),u(t,[{key:"changeCellGroupState",value:function(e){this.setState({hasCellSwiped:e})}},{key:"render",value:function(){var e,t=this,n=this.props,l=n.prefixCls,a=n.className,o=n.title,s=n.style,u=n.children,f=r(n,["prefixCls","className","title","style","children"]),d=(0,y.default)((e={},i(e,l+"-group",!!l),i(e,a,!!a),e)),h=this.state.hasCellSwiped;return p.default.createElement("div",c({className:d,style:s},f),p.default.createElement("h5",{className:l+"-desc"},o),u?p.default.createElement("div",{className:l+"-wrapper"},p.default.Children.map(u,function(e){return p.default.cloneElement(e,{hasCellSwiped:h,changeCellGroupState:t.changeCellGroupState})})):null)}}]),t}(f.Component);v.Cell=h.default,v.defaultProps={title:"",prefixCls:"pb-cell"},v.PropTypes={prefixCls:m.default.string,className:m.default.string,title:m.default.String,children:m.default.any},t.default=v},312:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(1),f=l(u),p=n(6),d=l(p),h=n(305),b=l(h),m=n(121),g=l(m);n(307);var y=!1,v=void 0,w=void 0,x=void 0,k=null,C=function(){},E=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={swiping:!1},n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleCoverTouchStart=n.handleCoverTouchStart.bind(n),n.captureWidth=n.captureWidth.bind(n),n.openedLeft=!1,n.openedRight=!1,n}return s(t,e),c(t,[{key:"captureWidth",value:function(){this.leftBtnsWidth=this.left?this.left.offsetWidth:0,this.rightBtnsWidth=this.right?this.right.offsetWidth:0}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.captureWidth),this.leftBtnsWidth=this.left?this.left.offsetWidth:0,this.rightBtnsWidth=this.right?this.right.offsetWidth:0}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.captureWidth)}},{key:"componentWillUpdate",value:function(e){e.hasCellSwiped||!this.openedLeft&&!this.openedRight||this.close()}},{key:"_getContentEasing",value:function(e,t){var n=Math.abs(e)-Math.abs(t),l=n>0,i=0===t?e>0?1:-1:t>0?1:-1;return l?(e=t+Math.pow(n,.85)*i,Math.abs(e)>Math.abs(t)?e:t):e}},{key:"_setStyle",value:function(e){var t=e>0?this.leftBtnsWidth:-this.rightBtnsWidth,n=this._getContentEasing(e,t),l="translate3d("+n+"px, 0px, 0px)",i=n-this.leftBtnsWidth,r=n+this.rightBtnsWidth,a="translate3d("+i+"px, 0px, 0px)",o="translate3d("+r+"px, 0px, 0px)";this.content.style.transform=l,this.left&&(this.left.style.transform=a),this.right&&(this.right.style.transform=o),this.cover&&(this.cover.style.display=Math.abs(e)>0?"block":"none",this.cover.style.transform=l)}},{key:"handleTouchStart",value:function(e){if(!y){y=!0,this.props.hasCellSwiped&&this.props.changeCellGroupState(!1);var t=e.touches[0];v=t.clientX,w=t.clientY,x=+new Date}}},{key:"handleTouchMove",value:function(e){if(y){var t=e.touches[0],n=t.clientX-v;t.clientY;this.state.swiping||this.setState({swiping:!0}),this._setStyle(n),k=n}}},{key:"handleTouchEnd",value:function(e){if(y){y=!1,this.setState({swiping:!1});+new Date-x<300?k>0&&this.leftBtnsWidth>0?this.doOpenLeft():k<0&&this.rightBtnsWidth>0?this.doOpenRight():this._setStyle(0):k<-this.rightBtnsWidth/2&&this.rightBtnsWidth>0?this.doOpenRight():k>this.leftBtnsWidth/2&&this.leftBtnsWidth>0?this.doOpenLeft():this._setStyle(0),k=null}}},{key:"handleCoverTouchStart",value:function(){this.props.changeCellGroupState(!1)}},{key:"doOpenLeft",value:function(){this.open(this.leftBtnsWidth,!0,!1)}},{key:"doOpenRight",value:function(){this.open(-this.rightBtnsWidth,!1,!0)}},{key:"open",value:function(e,t,n){this.openedLeft||this.openedRight||!this.props.onOpen||this.onOpen(),this.openedLeft=t,this.openedRight=n,this._setStyle(e),this.props.changeCellGroupState(!0)}},{key:"close",value:function(){(this.openedLeft||this.openedRight)&&this.props.onClose&&this.props.onClose(),this._setStyle(0),this.openedLeft=!1,this.openedRight=!1}},{key:"onBtnClick",value:function(e,t){e.preventDefault(),e.stopPropagation();var n=t.onPress;n&&n(e),this.props.autoClose&&this.close()}},{key:"renderButtons",value:function(e){var t=this,n=this.props.prefixCls;return e&&e.length?f.default.createElement("div",{className:n+"-btnGroup"},e.map(function(e,l){return f.default.createElement("span",{key:l,className:n+"-swipe-btn "+(e.hasOwnProperty("className")?e.className:""),onClick:function(n){return t.onBtnClick(n,e)},style:e.style,role:"button"},e.text||"Click")})):null}},{key:"renderContent",value:function(){var e=this,t=this.props,n=t.prefixCls,l=t.titleIcon,i=t.titleText,r=t.titleLabel,a=t.swipeDisabled,o=t.customTitle,s=t.children,c=t.onCellClick;return f.default.createElement("div",{className:n+"-content",ref:function(t){return e.content=t},onTouchStart:a?C:this.handleTouchStart,onTouchMove:a?C:this.handleTouchMove,onTouchEnd:a?C:this.handleTouchEnd,onClick:c||C},o?1===f.default.Children.count(s)?s:s[0]:l?[f.default.createElement("div",{className:n+"-icon"},f.default.createElement(g.default,{name:l,className:"fa-lg"})),f.default.createElement("div",{className:n+"-title"},[i?f.default.createElement("span",{className:n+"-text"},i):null,r?f.default.createElement("span",{className:n+"-label"},r):null])]:f.default.createElement("div",{className:n+"-title"},i?f.default.createElement("span",{className:n+"-text"},i):null,r?f.default.createElement("span",{className:n+"-label"},r):null),f.default.createElement("div",{className:n+"-value"},o?s[1]:s))}},{key:"renderAllowRight",value:function(){var e=this.props,t=e.allowRight,n=e.prefixCls;return t?f.default.createElement("div",{className:n+"-allow-right"},f.default.createElement(g.default,{name:"angle-right"})):null}},{key:"render",value:function(){var e,t=this,n=this.props,l=n.prefixCls,a=n.className,o=n.left,s=n.right,c=n.swipeDisabled,u=(r(n,["prefixCls","className","left","right","swipeDisabled"]),this.state.swiping),p=(0,b.default)((e={},i(e,l,!!l),i(e,a,!!a),i(e,l+"-swipe",!c),i(e,l+"-swiping",u),e));return!o.length&&!s.length||c?f.default.createElement("a",{className:p},this.renderContent(),this.renderAllowRight()):f.default.createElement("a",{className:p},f.default.createElement("div",{className:l+"-cover",ref:function(e){return t.cover=e},onTouchStart:this.handleCoverTouchStart}),f.default.createElement("div",{className:l+"-left",ref:function(e){return t.left=e}},this.renderButtons(o)),this.renderContent(),f.default.createElement("div",{className:l+"-right",ref:function(e){return t.right=e}},this.renderButtons(s)),this.renderAllowRight())}}]),t}(u.Component);E.defaultProps={prefixCls:"pb-cell",left:[],right:[],autoClose:!1,swipeDisabled:!0,allowRight:!1,customTitle:!1},E.PropTypes={prefixCls:d.default.string,className:d.default.string,swipeDisabled:d.default.bool,left:d.default.array,right:d.default.array,onOpen:d.default.func,onClose:d.default.func,autoClose:d.default.bool,hasCellSwiped:d.default.bool,titleText:d.default.string,titleLabel:d.default.string,titleIcon:d.default.string,allowRight:d.default.bool,customTitle:d.default.bool,onCellClick:d.default.func},t.default=E},313:function(e,t,n){t=e.exports=n(297)(void 0),t.push([e.i,'.pb-cell-group {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    overflow: hidden;\n}\n\n.pb-cell-desc {\n    padding: 14px 8px 11px;\n    font-size: 12px;\n    color: #8f8f94;\n    font-weight: normal;\n}\n\n.pb-cell-wrapper {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.pb-cell-wrapper:before {\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: -1px;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell-wrapper:after {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell {\n    display: block;\n    background-color: #fff;\n    box-sizing: border-box;\n    height: 46px;\n    /*overflow: hidden;*/\n    position: relative;\n    color: #333;\n    font-weight: 400;\n    text-decoration: none;\n}\n\n.pb-cell:after {\n    position: absolute;\n    right: 0;\n    left: 11px;\n    bottom: 0;\n    height: 1px;\n    content: "";\n    -webkit-transform: scaleY(.5);\n    transform: scaleY(.5);\n    background-color: #d9d9d9;\n}\n\n.pb-cell:last-child:after{\n    height: 0;\n}\n\n.pb-cell-left {\n    position: absolute;\n    height: 100%;\n    left: 0;\n    -webkit-transform: translate3d(-100%,0,0);\n    transform: translate3d(-100%,0,0);\n    z-index: 1;\n}\n\n.pb-cell-right {\n    position: absolute;\n    height: 100%;\n    right: 0;\n    top: 0;\n    -webkit-transform: translate3d(100%,0,0);\n    transform: translate3d(100%,0,0);\n    z-index: 1;\n}\n\n.pb-cell-content{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    width: 100%;\n    height: 100%;\n    padding: 0 11px;\n    line-height: 1;\n    touch-action: pan-y;\n}\n\n\n.pb-cell:not(.no-feedback-cell) .pb-cell-content:active {\n    background-color: #f2f2f2;\n}\n\n.pb-cell-cover {\n    position: absolute;\n    z-index: 2;\n    background-color: transparent;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    display: none;\n}\n\n.pb-cell-icon {\n    -webkit-flex: 0 0 26px;\n    -ms-flex: 0 0 26px;\n    flex: 0 0 26px ;\n    margin-right: 7px;\n    text-align: center;\n    color: #f07c01;\n}\n\n.pb-cell-title {\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n\n.pb-cell-text {\n    font-size: 14px;\n}\n\n.pb-cell-label {\n    color: #888;\n    display: block;\n    font-size: 12px;\n    margin-top: 6px;\n}\n\n.pb-cell-value {\n    flex: 0;\n}\n\n.pb-cell-allow-right {\n    position: absolute;\n    top: 50%;\n    right: 14px;\n    width: 14px;\n    height: 16px;\n    margin-top: -8px;\n    text-align: center;\n    color: #818a91;\n    line-height: 16px;\n}\n\n.pb-cell-btnGroup {\n    height: 100%;\n}\n\n.pb-cell-swipe-btn {\n    display: inline-block;\n    height: 100%;\n    line-height: 46px;\n    padding: 0 10px;\n}\n\n.pb-cell-swipe .pb-cell-left,\n.pb-cell-swipe .pb-cell-content,\n.pb-cell-swipe .pb-cell-right {\n    -webkit-transition: -webkit-transform .15s ease-in-out;\n    transition: -webkit-transform .15s ease-in-out;\n    transition: transform .15s ease-in-out;\n}\n\n.pb-cell-swipe.pb-cell-swiping .pb-cell-left,\n.pb-cell-swipe.pb-cell-swiping .pb-cell-content,\n.pb-cell-swipe.pb-cell-swiping .pb-cell-right {\n    -webkit-transition: -webkit-transform 0s ease;\n    transition: -webkit-transform 0s ease;\n    transition: transform 0s ease;\n}\n\n.field-cell .pb-cell-value {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}',""])}});