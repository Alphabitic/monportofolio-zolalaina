(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5799:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "NavbarFooter_logo__1oSyE",
	"footerlogo": "NavbarFooter_footerlogo__Kp4eD",
	"navbar": "NavbarFooter_navbar__SfrV_",
	"navlinks": "NavbarFooter_navlinks__1gQdi",
	"footermain": "NavbarFooter_footermain__mfbml",
	"footercontent": "NavbarFooter_footercontent__NVeF3",
	"blockNav": "NavbarFooter_blockNav__wzMXD",
	"blockTitle": "NavbarFooter_blockTitle__FB5v2",
	"blockText": "NavbarFooter_blockText__MvEJ6",
	"footertable": "NavbarFooter_footertable__AiEFv",
	"listHeading": "NavbarFooter_listHeading__EJ7lN",
	"css-yi1c6h": "NavbarFooter_css-yi1c6h__lM4IP"
};


/***/ }),

/***/ 558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5799);
/* harmony import */ var _styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4843);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__]);
_Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Footer = ({ currentTheme  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().footermain),
        style: {
            backgroundColor: currentTheme.footerColor,
            color: currentTheme.subtext
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().footertable),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().footerlogo),
                                children: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__/* .userinfo.logoText */ .ug.logoText
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().listHeading),
                                children: "Socials"
                            }),
                            _Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__/* .userinfo.socials */ .ug.socials ? _Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__/* .userinfo.socials.map */ .ug.socials.map((social, key)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: social.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: social.type
                                        })
                                    })
                                }, key);
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `mailto:${_Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__/* .userinfo.contact.email */ .ug.contact.email ? _Constants_userinfo__WEBPACK_IMPORTED_MODULE_1__/* .userinfo.contact.email */ .ug.contact.email : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Mail"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().listHeading),
                                children: "Pages"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Accueil"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/#about",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "A mon sujet"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/work",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Projets"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "Informations personnelles"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                style: {
                    height: "1px",
                    backgroundColor: currentTheme.subtext,
                    border: "none",
                    opacity: "0.5"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_NavbarFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().footercontent),
                children: "@ Zolalaina"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./styles/NavbarFooter.module.css
var NavbarFooter_module = __webpack_require__(5799);
var NavbarFooter_module_default = /*#__PURE__*/__webpack_require__.n(NavbarFooter_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./Components/Navlinks.js





const Navlinks = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: activeLink , 1: setActiveLink  } = (0,external_react_.useState)("/");
    (0,external_react_.useEffect)(()=>{
        setActiveLink(router.asPath);
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavbarFooter_module_default()).navlinks,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            opacity: activeLink === "/" || activeLink === "/#work" ? "100%" : "80%"
                        },
                        children: "Accueil"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavbarFooter_module_default()).navlinks,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/#about",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            opacity: activeLink === "/#about" ? "100%" : "80%"
                        },
                        children: "A mon sujet"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavbarFooter_module_default()).navlinks,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/work",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            opacity: activeLink === "/work" ? "100%" : "80%"
                        },
                        children: "Projets"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavbarFooter_module_default()).navlinks,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            opacity: activeLink === "/contact" ? "100%" : "80%"
                        },
                        children: "Me contacter"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Navlinks = (Navlinks);

// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__(9872);
;// CONCATENATED MODULE: ./Components/Navbar.js









const Navbar = ({ toggleTheme , currentTheme  })=>{
    const [drawerVisible] = (0,react_.useMediaQuery)("(max-width: 950px)");
    const { 0: sticky , 1: setSticky  } = (0,external_react_.useState)(false);
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NavbarFooter_module_default()).navbar,
        style: {
            backgroundColor: currentTheme.secondary,
            boxShadow: currentTheme.boxShadow,
            position: sticky ? "fixed" : "static"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: !drawerVisible ? "0" : "10px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        classNamme: (NavbarFooter_module_default()).blockNav,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            classNamme: (NavbarFooter_module_default()).blockTitle,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                    width: 50,
                                    height: 50,
                                    name: "Herivony Zolalaina",
                                    src: "https://i.ibb.co/10TM2G3/tof.jpg"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (NavbarFooter_module_default()).logo,
                                            children: " "
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    !drawerVisible ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Components_Navlinks, {})
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                        id: "dark-mode",
                        colorScheme: "white",
                        size: !drawerVisible ? "lg" : "md",
                        isChecked: currentTheme.name === "dark" ? true : false,
                        onChange: ()=>toggleTheme()
                    })
                ]
            }),
            drawerVisible ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginTop: "10px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Components_Navlinks, {})
                    })
                ]
            }) : null
        ]
    });
};
/* harmony default export */ const Components_Navbar = (Navbar);


/***/ }),

/***/ 6257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ darkTheme),
/* harmony export */   "W": () => (/* binding */ lightTheme)
/* harmony export */ });
const lightTheme = {
    name: "light",
    body: "#FFFFFF",
    text: "#24093E",
    subtext: "#707070",
    secondary: "#c1bfea",
    tertiary: "#75cac3",
    accent: "#263859",
    boxShadow: "0px 2px 10px -2px rgba(134, 134, 134, 0.5)",
    contrastText: "rgb(38,56,89)",
    footerColor: "#F0F0F0",
    fourth: "#FFFFFF"
};
const darkTheme = {
    name: "dark",
    body: "rgb(38, 56, 89)",
    text: "#FAFAFA",
    subtext: "#D0D0D0",
    secondary: "#FFFFFF",
    tertiary: "rgb(38,56,89)",
    accent: "#d7f7f5",
    boxShadow: "0px 2px 10px -2px rgba(51, 51, 51, 0.5)",
    contrastText: "rgb(38,56,89)",
    footerColor: "#16161D",
    fourth: "rgb(38, 56, 89)"
};


/***/ }),

/***/ 8168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2087);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Footer__WEBPACK_IMPORTED_MODULE_2__]);
_Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children , toggleTheme , currentTheme  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                toggleTheme: toggleTheme,
                currentTheme: currentTheme
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                currentTheme: currentTheme
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  body {
    background: ${({ theme  })=>theme.body};
    color: ${({ theme  })=>theme.text};
    font-family: 'Playfair Display', serif;
    transition: all 0.20s linear;
  }
`;


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7513);
/* harmony import */ var _Constants_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6257);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8168);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_5__]);
_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function MyApp({ Component , pageProps  }) {
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("light");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        } else {
            setTheme("light");
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_7___default().init({
            duration: 500
        });
    }, []);
    const toggleTheme = ()=>{
        theme == "light" ? setTheme("dark") : setTheme("light");
    };
    const currentTheme = theme === "light" ? _Constants_theme__WEBPACK_IMPORTED_MODULE_4__/* .lightTheme */ .W : _Constants_theme__WEBPACK_IMPORTED_MODULE_4__/* .darkTheme */ .$;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
            theme: theme == "light" ? _Constants_theme__WEBPACK_IMPORTED_MODULE_4__/* .lightTheme */ .W : _Constants_theme__WEBPACK_IMPORTED_MODULE_4__/* .darkTheme */ .$,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .GlobalStyles */ .n, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    toggleTheme: toggleTheme,
                    currentTheme: currentTheme,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        currentTheme: currentTheme
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9872:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/di");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 303:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,843], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();