"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/malie-Logo.cd166a37.svg","height":189,"width":399,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 6712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const blob_variants = {
    hidden: {
        clipPath: "circle(0% at 50% 50%)"
    },
    enter: {
        clipPath: "circle(100% at 50% 50%)",
        transition: {
            duration: 0.75,
            delay: .5,
            type: "tween",
            ease: "circOut"
        }
    },
    exit: {
        clipPath: "circle(0% at 50% 50%)",
        transition: {
            delay: 1,
            duration: 0.5
        }
    }
};
const BlobBg = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "bg__trans",
        variants: blob_variants,
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlobBg);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _NavItemMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2659);
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _NavItemMobile__WEBPACK_IMPORTED_MODULE_3__, _NavbarToggle__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _NavItemMobile__WEBPACK_IMPORTED_MODULE_3__, _NavbarToggle__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const variants = {
    open: {
        clipPath: "circle(100% at 50% 50%)",
        transition: {
            type: "tween",
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        clipPath: "circle(0% at 50% 50%)",
        transition: {
            delay: 0.5,
            type: "tween",
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const MobileNav = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul, {
            id: "nav-items-mobile",
            className: "nav-items-mobile",
            variants: variants,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const variants = {
    initial: {
        x: 50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 50,
        opacity: 0
    }
};
const NavItem = ({ href , name , clickLink  })=>{
    const [isShrunk, setShrunk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>{
            setShrunk((isShrunk)=>{
                if (!isShrunk && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                    return true;
                }
                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false;
                }
                return isShrunk;
            });
        };
        window.addEventListener("scroll", handler);
        return ()=>window.removeEventListener("scroll", handler);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
            className: "navItem",
            variants: variants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: {
                type: "tween",
                duration: 0.75
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                "aria-label": name,
                scroll: false,
                className: isShrunk ? "nav-link black" : "nav-link",
                href: `${href}`,
                onClick: clickLink,
                children: name
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};
const NavItem = ({ href , name , toggle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
            className: "nav-item",
            variants: variants,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                scroll: false,
                onClick: toggle,
                "aria-label": name,
                className: "nav-link black",
                href: `${href}`,
                children: name
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NavbarToggle = ({ toggle , clickLink  })=>{
    const [click, setClick] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useCycle)(true, false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: toggle,
        id: "menu-toggle",
        "aria-label": "mobile-menu-toggle",
        "aria-controls": "nav-items-mobile",
        "aria-expanded": "false",
        children: [
            "Menu",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "bar",
                variants: {
                    closed: {
                        rotate: [
                            45,
                            0,
                            0
                        ],
                        top: [
                            "50%",
                            "50%",
                            "35%"
                        ]
                    },
                    open: {
                        rotate: [
                            0,
                            0,
                            45
                        ],
                        top: [
                            "35%",
                            "50%",
                            "50%"
                        ]
                    },
                    transition: {
                        type: "spring",
                        stiffness: 20,
                        restDelta: 2
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "bar ",
                variants: {
                    closed: {
                        rotate: [
                            -45,
                            0,
                            0
                        ],
                        top: [
                            "50%",
                            "50%",
                            "65%"
                        ]
                    },
                    open: {
                        rotate: [
                            0,
                            0,
                            -45
                        ],
                        top: [
                            "65%",
                            "50%",
                            "50%"
                        ]
                    },
                    transition: {
                        type: "spring",
                        stiffness: 20,
                        restDelta: 2
                    }
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarToggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _NavItemDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _NavItemDesktop__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _NavItemDesktop__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const Navigation = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul, {
            className: "nav-items-desktop",
            variants: variants,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_Nav_NavItemDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5568);
/* harmony import */ var _components_Nav_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1999);
/* harmony import */ var _components_Nav_MobileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6345);
/* harmony import */ var _components_Nav_NavItemMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2659);
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_Nav_NavItemDesktop__WEBPACK_IMPORTED_MODULE_5__, _components_Nav_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_Nav_MobileNav__WEBPACK_IMPORTED_MODULE_7__, _components_Nav_NavItemMobile__WEBPACK_IMPORTED_MODULE_8__, _NavbarToggle__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_Nav_NavItemDesktop__WEBPACK_IMPORTED_MODULE_5__, _components_Nav_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_Nav_MobileNav__WEBPACK_IMPORTED_MODULE_7__, _components_Nav_NavItemMobile__WEBPACK_IMPORTED_MODULE_8__, _NavbarToggle__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Navbar = ({ logo , alt , children  })=>{
    const navbarMain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [isShrunk, setShrunk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = ()=>{
            setShrunk((isShrunk)=>{
                if (!isShrunk && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                    return true;
                }
                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false;
                }
                return isShrunk;
            });
        };
        handler();
        window.addEventListener("scroll", handler);
        //--------------------------------------------------------------------------------------- Mutation Observer
        // var observer = new MutationObserver(function (mutations) {
        //   mutations.forEach(function (mutation) {
        //     setChanged(true);
        //     console.log(changed);
        //   });
        // });
        // var config = { attributes: false, childList: true, characterData: false };
        // observer.observe(document.getElementById("data-scroll-content"), config);
        return ()=>window.removeEventListener("scroll", handler);
    }, []);
    const variants = {
        closed: {},
        open: {}
    };
    const image_variants = {
        initial: {
            scale: 0,
            opacity: 0
        },
        enter: {
            scale: [
                0,
                1.2,
                1
            ],
            opacity: 1
        },
        exit: {
            scale: 0,
            opacity: 0
        }
    };
    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useCycle)(false, true);
    const navitems = [
        "Home",
        "Training",
        "\xdcber mich",
        "Kontakt"
    ];
    const hrefs = [
        "/",
        "/#cards",
        "/#about",
        "/#contact"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.nav, {
        className: isShrunk ? "navbar shrunk" : "navbar",
        variants: variants,
        ref: navbarMain,
        initial: false,
        animate: isOpen ? "open" : "closed",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "navbar__container",
            "aria-haspopup": "menu",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {
                    "aria-label": "Home",
                    "aria-current": "page",
                    className: "navbar__logo active",
                    href: "/",
                    variants: image_variants,
                    initial: "hidden",
                    animate: "enter",
                    exit: "exit",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: logo,
                        alt: alt
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav_Navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: navitems.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav_NavItemDesktop__WEBPACK_IMPORTED_MODULE_5__/* .NavItem */ .L, {
                            name: i,
                            href: hrefs[index]
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav_MobileNav__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: navitems.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav_NavItemMobile__WEBPACK_IMPORTED_MODULE_8__/* .NavItem */ .L, {
                            toggle: ()=>toggleOpen(),
                            name: i,
                            href: hrefs[index]
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavbarToggle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    toggle: ()=>toggleOpen()
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const section_variants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    enter: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.35
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
const header_variants = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeOut",
            duration: 0.5
        }
    }
};
const Section = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Section(props, ref) {
    const wrapper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {
        "data-section-name": props.sectionName,
        initial: "initial",
        whileInView: "enter",
        viewport: {
            margin: "100px 0px 100px 0px"
        },
        exit: "exit",
        ref: ref,
        id: props.id,
        variants: section_variants,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            ref: wrapper,
            variants: section_variants,
            className: "__s__b",
            children: [
                props.header ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {
                    variants: header_variants,
                    children: props.header
                }) : null,
                props.text ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                    variants: header_variants,
                    children: props.text
                }) : null,
                props.children
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;