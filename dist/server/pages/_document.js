"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 8506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: ./src/components/loader/Loader.js
/* harmony default export */ const Loader = (`
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    background-color: #fff;
    display: flex;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.custom-loader {
    --d:22px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    color: #5B0A0A;
    box-shadow: 
      calc(1*var(--d))      calc(0*var(--d))     0 0,
      calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
      calc(0*var(--d))      calc(1*var(--d))     0 2px,
      calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
      calc(-1*var(--d))     calc(0*var(--d))     0 4px,
      calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
      calc(0*var(--d))      calc(-1*var(--d))    0 6px;
    animation: s7 1s infinite steps(8);
  }
  
  @keyframes s7 {
    100% {transform: rotate(1turn)}
  }
   `);

;// CONCATENATED MODULE: ./src/pages/_document.js



function Document() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("style", {
                        children: [
                            " ",
                            Loader
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "application-name",
                        content: "Malie Sports"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "default"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "Malie Sports"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Egal ob vor oder nach der Geburt, Malie hilft dir als Mama mit deinem K\xf6rper in Einklang zu kommen und mit pr\xe4natalem und postnatalem Sport einen Ausgleich zwischen Stress und Fitness zu finden. Nimm deinen Schatz gerne mit und melde dich noch heute f\xfcr meine Kurse an!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-config",
                        content: "/icons/browserconfig.xml"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#F6F6F6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-tap-highlight",
                        content: "no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#FF887A"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "icons/apple-icon-180.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2048-2732.jpg",
                        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2732-2048.jpg",
                        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1668-2388.jpg",
                        media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2388-1668.jpg",
                        media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1536-2048.jpg",
                        media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2048-1536.jpg",
                        media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1668-2224.jpg",
                        media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2224-1668.jpg",
                        media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1620-2160.jpg",
                        media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2160-1620.jpg",
                        media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1290-2796.jpg",
                        media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2796-1290.jpg",
                        media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1179-2556.jpg",
                        media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2556-1179.jpg",
                        media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1284-2778.jpg",
                        media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2778-1284.jpg",
                        media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1170-2532.jpg",
                        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2532-1170.jpg",
                        media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1125-2436.jpg",
                        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2436-1125.jpg",
                        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1242-2688.jpg",
                        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2688-1242.jpg",
                        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-828-1792.jpg",
                        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1792-828.jpg",
                        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1242-2208.jpg",
                        media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-2208-1242.jpg",
                        media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-750-1334.jpg",
                        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1334-750.jpg",
                        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-640-1136.jpg",
                        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-startup-image",
                        href: "icons/apple-splash-1136-640.jpg",
                        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "globalLoader",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "custom-loader"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(8506)));
module.exports = __webpack_exports__;

})();