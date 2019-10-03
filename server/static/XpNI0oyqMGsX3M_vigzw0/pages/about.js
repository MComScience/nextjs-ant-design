module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "1SKB":
/***/ (function(module, exports) {



/***/ }),

/***/ "6UH/":
/***/ (function(module, exports) {



/***/ }),

/***/ "AplU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("Fmub");

__webpack_require__("lBu3");

__webpack_require__("aVHW");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/breadcrumb/style/css.js
var css = __webpack_require__("AplU");

// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__("TMRn");
var breadcrumb_default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/css.js
var style_css = __webpack_require__("OvTR");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/css.js
var layout_style_css = __webpack_require__("Fwwi");

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/css.js
var menu_style_css = __webpack_require__("lBu3");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/css/layout.css
var layout = __webpack_require__("orCV");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/head.js
var __jsx = external_react_default.a.createElement;


const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => __jsx(head_default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, props.title || ""), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("link", {
  rel: "icon",
  sizes: "192x192",
  href: "/static/touch-icon.png"
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/static/touch-icon.png"
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/favicon-mask.svg",
  color: "#49B882"
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/nprogress.css"
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  property: "og:title",
  content: props.title || ""
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image"
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200"
}), __jsx("meta", {
  property: "og:image:height",
  content: "630"
}));

/* harmony default export */ var head = (Head);
// CONCATENATED MODULE: ./components/layout.js









var layout_jsx = external_react_default.a.createElement;


const {
  SubMenu
} = menu_default.a;
const {
  Header,
  Content,
  Sider
} = layout_default.a;
/* harmony default export */ var components_layout = __webpack_exports__["a"] = (({
  children,
  title = "Next.js"
}) => layout_jsx(layout_default.a, null, layout_jsx(head, {
  title: title
}), layout_jsx(Header, {
  className: "header"
}, layout_jsx("div", {
  id: "app-logo",
  className: "logo"
}), layout_jsx(menu_default.a, {
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: ["2"],
  style: {
    lineHeight: "64px"
  }
}, layout_jsx(menu_default.a.Item, {
  key: "1"
}, "nav 1"), layout_jsx(menu_default.a.Item, {
  key: "2"
}, "nav 2"), layout_jsx(menu_default.a.Item, {
  key: "3"
}, "nav 3"))), layout_jsx(layout_default.a, null, layout_jsx(Sider, {
  width: 200,
  style: {
    background: "#fff"
  }
}, layout_jsx(menu_default.a, {
  mode: "inline",
  theme: "dark",
  defaultSelectedKeys: ["1"],
  style: {
    height: "100%",
    borderRight: 0
  }
}, layout_jsx(SubMenu, {
  key: "sub1",
  title: layout_jsx("span", null, layout_jsx(icon_default.a, {
    type: "user"
  }), "subnav 1")
}, layout_jsx(menu_default.a.Item, {
  key: "1"
}, "option1"), layout_jsx(menu_default.a.Item, {
  key: "2"
}, "option2"), layout_jsx(menu_default.a.Item, {
  key: "3"
}, "option3"), layout_jsx(menu_default.a.Item, {
  key: "4"
}, "option4")), layout_jsx(SubMenu, {
  key: "sub2",
  title: layout_jsx("span", null, layout_jsx(icon_default.a, {
    type: "laptop"
  }), "subnav 2")
}, layout_jsx(menu_default.a.Item, {
  key: "5"
}, "option5"), layout_jsx(menu_default.a.Item, {
  key: "6"
}, "option6"), layout_jsx(menu_default.a.Item, {
  key: "7"
}, "option7"), layout_jsx(menu_default.a.Item, {
  key: "8"
}, "option8")), layout_jsx(SubMenu, {
  key: "sub3",
  title: layout_jsx("span", null, layout_jsx(icon_default.a, {
    type: "notification"
  }), "subnav 3")
}, layout_jsx(menu_default.a.Item, {
  key: "9"
}, "option9"), layout_jsx(menu_default.a.Item, {
  key: "10"
}, "option10"), layout_jsx(menu_default.a.Item, {
  key: "11"
}, "option11"), layout_jsx(menu_default.a.Item, {
  key: "12"
}, "option12")))), layout_jsx(layout_default.a, {
  style: {
    padding: "0 24px 24px"
  }
}, layout_jsx(breadcrumb_default.a, {
  style: {
    margin: "16px 0"
  }
}, layout_jsx(breadcrumb_default.a.Item, null, "Home"), layout_jsx(breadcrumb_default.a.Item, null, "List"), layout_jsx(breadcrumb_default.a.Item, null, "App")), layout_jsx(Content, {
  className: "wrapper-content"
}, children)))));

/***/ }),

/***/ "Fmub":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fwwi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("YwLm");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CafY");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const AboutPage = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("p", null, "This is about Next.js!"));

AboutPage.getInitialProps = async () => {
  await new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(resolve => {
    setTimeout(resolve, 500);
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "OvTR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("dleZ");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "QU2i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("iGLF");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "Rdar":
/***/ (function(module, exports) {



/***/ }),

/***/ "TMRn":
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "YwLm":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aVHW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("6UH/");

__webpack_require__("bAY4");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "bAY4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("Rdar");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dleZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "iGLF":
/***/ (function(module, exports) {



/***/ }),

/***/ "lBu3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("vVUs");

__webpack_require__("QU2i");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "orCV":
/***/ (function(module, exports) {



/***/ }),

/***/ "vVUs":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });