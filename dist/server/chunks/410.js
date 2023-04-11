"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/malie-Logo.cd166a37.svg","height":189,"width":399,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const header_variants = {
    initial: {
        x: -50,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
            duration: 0.5,
            type: "tween",
            ease: "backOut",
            delay: 0.5
        }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.25,
            duration: 0.5,
            type: "tween",
            ease: "backOut"
        }
    }
};
const blob_variants = {
    initial: {
        clipPath: "circle(0% at 30% 50%)"
    },
    enter: {
        clipPath: "circle(30% at 30% 50%)",
        transition: {
            ease: "easeIn",
            stiffness: 100
        }
    },
    exit: {
        clipPath: "circle(0% at 30% 50%)",
        transition: {
            duration: 0.25
        }
    }
};
const wrapper_variants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    enter: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.25
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
const button_variants = {
    initial: {
        y: 20,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "backOut",
            duration: 0.5
        }
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.5
        }
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "backOut",
            duration: 0.5
        }
    }
};
const image_variants = {
    initial: {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)"
    },
    enter: {
        opacity: 1,
        clipPath: "circle(100% at 50% 50%)"
    },
    exit: {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)"
    }
};
const DetailHero = ({ firstTitle , secondTitle , alternativeSub , text , subtitle , altText , btn_txt , btn_txt_sec , image , image2 , image3  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const inView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useInView)(ref, {
        once: true,
        margin: "0px"
    });
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useAnimationControls)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (inView) {
            setTimeout(()=>{
                controls.start("enter");
            }, 500);
        }
    }, [
        controls,
        inView
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            initial: "initial",
            whileInView: "enter",
            viewport: {
                margin: "100px 0px 100px 0px",
                amount: "some"
            },
            exit: "exit",
            className: "detail__hero",
            ref: ref,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "blob__detail",
                    variants: blob_variants,
                    style: {
                        transformOrigin: "center"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: wrapper_variants,
                    className: "lr__wrapper mobile",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "blob__detail",
                            variants: blob_variants,
                            style: {
                                transformOrigin: "center"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: wrapper_variants,
                            className: "left-wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large first",
                                    variants: image_variants,
                                    style: {
                                        position: "absolute"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large second",
                                    variants: image_variants,
                                    style: {
                                        position: "absolute"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image2}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image2}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large third",
                                    variants: image_variants,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image3}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image3}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: header_variants,
                            className: "right-wrapper",
                            children: [
                                firstTitle || secondTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    children: [
                                        firstTitle,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: secondTitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("red", {
                                                children: secondTitle
                                            }) : null
                                        })
                                    ]
                                }) : null,
                                alternativeSub ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: alternativeSub
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: text
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "sub",
                                    children: [
                                        subtitle,
                                        " "
                                    ]
                                }),
                                btn_txt || btn_txt_sec ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "button__wrapper",
                                    variants: wrapper_variants,
                                    children: [
                                        btn_txt ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                                            variants: button_variants,
                                            className: "btn__primary",
                                            children: btn_txt
                                        }) : null,
                                        btn_txt_sec ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                                            variants: button_variants,
                                            className: "btn__outline",
                                            children: btn_txt_sec
                                        }) : null
                                    ]
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: wrapper_variants,
                    className: "lr__wrapper desktop",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "left-wrapper",
                            variants: header_variants,
                            children: [
                                firstTitle || secondTitle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    children: [
                                        firstTitle,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: secondTitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("red", {
                                                children: secondTitle
                                            }) : null
                                        })
                                    ]
                                }) : null,
                                alternativeSub ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: alternativeSub
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: text
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "sub",
                                    children: [
                                        subtitle,
                                        " "
                                    ]
                                }),
                                btn_txt || btn_txt_sec ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "button__wrapper",
                                    variants: wrapper_variants,
                                    children: [
                                        btn_txt ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                                            variants: button_variants,
                                            className: "btn__primary",
                                            children: btn_txt
                                        }) : null,
                                        btn_txt_sec ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                                            variants: button_variants,
                                            className: "btn__outline",
                                            children: btn_txt_sec
                                        }) : null
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: wrapper_variants,
                            className: "right-wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large first",
                                    variants: image_variants,
                                    style: {
                                        position: "absolute"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large second",
                                    variants: image_variants,
                                    style: {
                                        position: "absolute"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image2}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image2}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "photo_large third",
                                    variants: image_variants,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        alt: altText,
                                        src: `${image3}`,
                                        placeholder: "blur",
                                        blurDataURL: `${image3}`,
                                        quality: 100,
                                        fill: true,
                                        sizes: "100%",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailHero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;