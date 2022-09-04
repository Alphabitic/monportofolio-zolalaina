exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 6848:
/***/ ((module) => {

// Exports
module.exports = {
	"workHeading": "Work_workHeading__YXZeb",
	"blogHeading": "Work_blogHeading__hNQEy",
	"workmain": "Work_workmain__jB8er",
	"parentofparentcard": "Work_parentofparentcard__OkQ4P",
	"containerCard": "Work_containerCard__wUdxD",
	"parentcard": "Work_parentcard__CJPma",
	"imageandsocials": "Work_imageandsocials__vHXNQ",
	"card": "Work_card__RdCP4",
	"arrows": "Work_arrows__TaC_u",
	"cardtitle": "Work_cardtitle__hJ2rj",
	"cardbottom": "Work_cardbottom__2kTTj",
	"socialIcon": "Work_socialIcon__laat7",
	"projtitle": "Work_projtitle__VWQBo",
	"projdescription": "Work_projdescription__Y9JJ1",
	"carouselItem": "Work_carouselItem__B4Onf",
	"carousel": "Work_carousel__Sah2B",
	"inner": "Work_inner__7bQO9",
	"indicators": "Work_indicators__duzgz",
	"active": "Work_active__jH6HZ",
	"cta2": "Work_cta2__ZNPnk",
	"experienceWrapper": "Work_experienceWrapper__m_wMw",
	"experienceCardWrapper": "Work_experienceCardWrapper__bbKvU",
	"experienceCard": "Work_experienceCard__tKONc",
	"experienceCardContent": "Work_experienceCardContent__ThXA2",
	"avatar": "Work_avatar__78Z4r"
};


/***/ }),

/***/ 6662:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const BlogCard = ({ blog , currentTheme  })=>{
    return /*#__PURE__*/ _jsx("div", {
        style: {
            whiteSpace: "initial"
        },
        children: /*#__PURE__*/ _jsxs(Box, {
            maxW: "sm",
            borderWidth: "2px",
            borderRadius: "lg",
            overflow: "hidden",
            bg: currentTheme.secondary,
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: blog.thumbnail || blog.cover_image,
                    alt: "thumbnail image",
                    height: "300",
                    width: "500"
                }),
                /*#__PURE__*/ _jsxs(Box, {
                    p: "6",
                    children: [
                        /*#__PURE__*/ _jsx(HStack, {
                            spacing: 2,
                            children: blog.categories ? blog.categories.slice(0, 3).map((category, key)=>{
                                return /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx(Tag, {
                                        size: "sm",
                                        borderRadius: "md",
                                        variant: "outline",
                                        colorScheme: "blue",
                                        children: /*#__PURE__*/ _jsx(TagLabel, {
                                            children: category
                                        })
                                    })
                                }, key);
                            }) : blog.tag_list ? blog.tag_list.slice(0, 3).map((category, key)=>{
                                return /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx(Tag, {
                                        size: "sm",
                                        borderRadius: "md",
                                        variant: "outline",
                                        colorScheme: "blue",
                                        children: /*#__PURE__*/ _jsx(TagLabel, {
                                            children: category
                                        })
                                    })
                                }, key);
                            }) : null
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            mt: "1",
                            as: "h4",
                            lineHeight: "tight",
                            children: blog.title
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            as: "span",
                            color: currentTheme.subtext,
                            fontSize: "sm",
                            children: blog.description.replace(/(<([^>]+)>)/ig, "").slice(0, 85) + " . . ."
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: /*#__PURE__*/ _jsx(Box, {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: blog.link || blog.url,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: styles.cta2,
                                        style: {
                                            color: "#3182ce"
                                        },
                                        children: "View More"
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (BlogCard)));


/***/ }),

/***/ 6033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export CarouselItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3789);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants_userinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_userinfo__WEBPACK_IMPORTED_MODULE_4__]);
_Constants_userinfo__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CarouselItem = ({ children , width , currentTheme  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.carouselItem,
        style: {
            width: width,
            backgroundColor: currentTheme.secondary
        },
        children: children
    });
};
const Carousel = ({ children , currentTheme  })=>{
    const { 0: activeIndex , 1: setActiveIndex  } = useState(0);
    const { 0: paused , 1: setPaused  } = useState(false);
    const [isSmall] = useMediaQuery("(max-width: 1200px)");
    const [isVerySmall] = useMediaQuery("(max-width: 800px)");
    const dividingFactor = isSmall ? isVerySmall ? 1 : 2 : 3;
    const arrayLength = Math.ceil(React.Children.count(children) / dividingFactor);
    const repeat = Array.from(Array(arrayLength).keys());
    useEffect(()=>{
        setActiveIndex(0);
    }, [
        dividingFactor
    ]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    });
    const updateIndex = (newIndex)=>{
        if (newIndex < 0) {
            newIndex = arrayLength - 1;
        } else if (newIndex >= arrayLength) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    const handlers = useSwipeable({
        onSwipedLeft: ()=>updateIndex(activeIndex + 1),
        onSwipedRight: ()=>updateIndex(activeIndex - 1)
    });
    return /*#__PURE__*/ _jsxs("div", {
        ...handlers,
        className: styles.carousel,
        id: "blogs",
        style: {
            backgroundColor: currentTheme.secondary
        },
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.blogHeading,
                children: headings.blogs
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.inner,
                style: {
                    transform: `translateX(-${activeIndex * 100}%)`
                },
                onMouseEnter: ()=>setPaused(true),
                onMouseLeave: ()=>setPaused(false),
                children: React.Children.map(children, (child, index)=>{
                    return /*#__PURE__*/ React.cloneElement(child, {
                        width: isSmall ? isVerySmall ? "100%" : "50%" : "33.33%"
                    });
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.indicators,
                children: [
                    /*#__PURE__*/ _jsx("button", {
                        onClick: ()=>{
                            updateIndex(activeIndex - 1);
                        },
                        children: "<"
                    }),
                    repeat.map((dot, index)=>{
                        return /*#__PURE__*/ _jsx("button", {
                            className: `${index === activeIndex ? styles.active : ""}`,
                            onClick: ()=>{
                                updateIndex(index);
                            },
                            children: "•"
                        }, dot);
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        onClick: ()=>{
                            updateIndex(activeIndex + 1);
                        },
                        children: ">"
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Carousel)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6848);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__]);
_Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Experiences = ({ currentTheme  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().experienceWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().workHeading),
                "data-aos": "fade-up",
                "data-aos-duration": "1000",
                "data-aos-delay": "100",
                children: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .headings.experience */ .qY.experience
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().experienceCardWrapper),
                "data-aos": "fade-up",
                "data-aos-duration": "1000",
                "data-aos-delay": "100",
                children: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .userinfo.experience.experienceList */ .ug.experience.experienceList ? _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .userinfo.experience.experienceList.map */ .ug.experience.experienceList.map((exp, key)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().experienceCard),
                        "data-aos": "fade-up",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            borderWidth: "1px",
                            borderRadius: "md",
                            overflow: "hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        background: currentTheme.contrastText,
                                        height: "150px",
                                        color: currentTheme.contrastText
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().experienceCardContent),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: exp.company
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_4___default().avatar),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                size: "xl",
                                                name: exp.company,
                                                children: exp.companylogo
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                position: "relative",
                                                top: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: exp.position
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: exp.description
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            style: {
                                                color: currentTheme.contrastText
                                            },
                                            children: exp.time
                                        })
                                    ]
                                })
                            ]
                        })
                    }, key);
                }) : null
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experiences);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__]);
_Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const HeadTag = ({ page  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: `${_Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .userinfo.logoText */ .ug.logoText} | ${page}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.jpeg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "title",
                content: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .userinfo.logoText */ .ug.logoText
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_3__/* .userinfo.greeting.subtitle */ .ug.greeting.subtitle
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadTag);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6848);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _WorkProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6662);
/* harmony import */ var _Constants_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
/* harmony import */ var _Constants_blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Constants_userinfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4843);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6033);
/* harmony import */ var _Experiences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3111);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WorkProject__WEBPACK_IMPORTED_MODULE_1__, _Constants_userinfo__WEBPACK_IMPORTED_MODULE_6__, _Carousel__WEBPACK_IMPORTED_MODULE_7__, _Experiences__WEBPACK_IMPORTED_MODULE_8__]);
([_WorkProject__WEBPACK_IMPORTED_MODULE_1__, _Constants_userinfo__WEBPACK_IMPORTED_MODULE_6__, _Carousel__WEBPACK_IMPORTED_MODULE_7__, _Experiences__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Work = ({ currentTheme  })=>{
    const { 0: blogList , 1: setBlogList  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    // CUSTOM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR CUSTOM BLOGS
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setBlogList(_Constants_blogs__WEBPACK_IMPORTED_MODULE_4__/* .custom_blogs */ .$);
    }, []);
    // MEDIUM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR MEDIUM BLOGS
    // useEffect(() => {
    //     fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${medium_blogs.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data.items))
    //         .catch(err => console.error(err));
    // }, [])
    // DEV.TO BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR DEV.TO BLOGS
    // useEffect(() => {
    //     fetch(`https://dev.to/api/articles?username=${dev_to.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data))
    //         .catch(err => console.error(err));
    // }, [])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            _Constants_userinfo__WEBPACK_IMPORTED_MODULE_6__/* .userinfo.experience.visible */ .ug.experience.visible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Experiences__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                currentTheme: currentTheme
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().workHeading),
                children: _Constants_userinfo__WEBPACK_IMPORTED_MODULE_6__/* .headings.workMainPage */ .qY.workMainPage
            }),
            _Constants_projects__WEBPACK_IMPORTED_MODULE_3__/* .projects.map */ .q.map((project, key)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerCard),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WorkProject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                currentTheme: currentTheme,
                                project: project,
                                id: key
                            })
                        }, project.name)
                    })
                });
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6848);
/* harmony import */ var _styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(303);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3789);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Constants_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const WorkProject = ({ currentTheme , project , id  })=>{
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const showGitToast = ()=>{
        toast({
            description: "Sorry, this project has a private repository!",
            status: "info",
            isClosable: true
        });
    };
    const showProjToast = ()=>{
        toast({
            description: "Sorry, this project has not been deployed yet!",
            status: "info",
            isClosable: true
        });
    };
    const ahead = ()=>{
        if (index === project.photo.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const back = ()=>{
        if (index === 0) {
            setIndex(project.photo.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_7__.useSwipeable)({
        onSwipedLeft: ()=>ahead(),
        onSwipedRight: ()=>back()
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().parentofparentcard),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().parentcard),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardtitle),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().projtitle),
                                children: project.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {
                                spacing: 2,
                                children: project.tech.map((tech)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tag, {
                                            size: "sm",
                                            borderRadius: "md",
                                            variant: "subtle",
                                            colorScheme: currentTheme.name === "light" ? "cyan" : "purple",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TagLabel, {
                                                children: tech
                                            })
                                        })
                                    }, tech);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().imageandsocials),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                ...handlers,
                                style: {
                                    borderColor: currentTheme.footerColor,
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        src: project.photo[index],
                                        alt: "thumbnail image",
                                        height: "300",
                                        width: "500"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: back,
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "10px",
                                            color: "white",
                                            fontSize: "20px"
                                        },
                                        children: "<"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ahead,
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            right: "10px",
                                            color: "white",
                                            fontSize: "20px"
                                        },
                                        children: ">"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                        label: "Github link",
                                        placement: "right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().socialIcon),
                                            style: {
                                                color: currentTheme.subtext,
                                                borderColor: currentTheme.subtext
                                            },
                                            children: project.githubLink !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: project.githubLink,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithubAlt
                                                    })
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithubAlt,
                                                onClick: showGitToast
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                        label: "Project link",
                                        placement: "right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().socialIcon),
                                            style: {
                                                color: currentTheme.subtext,
                                                borderColor: currentTheme.subtext
                                            },
                                            children: project.projectLink !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: project.projectLink,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTelegramPlane
                                                    })
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTelegramPlane,
                                                onClick: showProjToast
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardbottom),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_Work_module_css__WEBPACK_IMPORTED_MODULE_9___default().projdescription),
                            children: project.description
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkProject);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ custom_blogs)
});

;// CONCATENATED MODULE: ./styles/projects/blog.jpg
/* harmony default export */ const blog = ({"src":"/_next/static/media/blog.1c9d9e3d.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABQf/2gAMAwEAAhADEAAAALARQ//EABsQAAEEAwAAAAAAAAAAAAAAABEAAhMUAxJR/9oACAEBAAE/ALGKOKqzcCQuJ6v/xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAgEBPwBb/8QAGxEAAQQDAAAAAAAAAAAAAAAAIQABAhESMbH/2gAIAQMBAT8AxaGrJJ6v/9k="});
;// CONCATENATED MODULE: ./Constants/blogs.js

const custom_blogs = [
    // please add only upto 6 blogs for maintaining the ui
    {
        title: "Blog Tilte",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        link: "www.google.com",
        thumbnail: blog,
        categories: [
            "jim",
            "pam",
            "dwight"
        ] //eg. web developement, prgramming, lifestyle etc.
    },
    {
        title: "Blog Tilte",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        link: "www.google.com",
        thumbnail: blog,
        categories: [
            "jim",
            "pam",
            "dwight"
        ]
    },
    {
        title: "Blog Tilte",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        link: "www.google.com",
        thumbnail: blog,
        categories: [
            "jim",
            "pam",
            "dwight"
        ]
    },
    {
        title: "Blog Tilte",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        link: "www.google.com",
        thumbnail: blog,
        categories: [
            "jim",
            "pam",
            "dwight"
        ]
    }, 
] // uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
 // export const medium_blogs = { username: 'yourusername'}
 // uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
 // export const dev_to = { username: 'yourusername'}
;


/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ projects)
});

;// CONCATENATED MODULE: ./styles/projects/Project1_1.jpg
/* harmony default export */ const Project1_1 = ({"src":"/_next/static/media/Project1_1.6df72c9e.jpg","height":660,"width":1265,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApwP/xAAcEAABBQADAAAAAAAAAAAAAAABAgMEERIAEzH/2gAIAQEAAT8AEapqnO505dsJsZ95/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./styles/projects/Project1_2.jpg
/* harmony default export */ const Project1_2 = ({"src":"/_next/static/media/Project1_2.fbcc6bb6.jpg","height":748,"width":1264,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApwP/xAAbEAEBAAEFAAAAAAAAAAAAAAACAQMABDEyUf/aAAgBAQABPwAnc4xXjzmJKdjVOfLdf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./styles/projects/Project1_3.jpg
/* harmony default export */ const Project1_3 = ({"src":"/_next/static/media/Project1_3.6118dbe7.jpg","height":678,"width":1262,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKSI/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIDADEyNNH/2gAIAQEAAT8AczINiTFbheV//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z"});
;// CONCATENATED MODULE: ./styles/projects/Project2_1.jpg
/* harmony default export */ const Project2_1 = ({"src":"/_next/static/media/Project2_1.15226b8a.jpg","height":853,"width":1273,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAaEAACAgMAAAAAAAAAAAAAAAABAwACEjGR/9oACAEBAAE/AAhW8K8E/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./styles/projects/Project2_2.jpg
/* harmony default export */ const Project2_2 = ({"src":"/_next/static/media/Project2_2.583de4f4.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAqBYL/8QAFxABAAMAAAAAAAAAAAAAAAAAAQARUv/aAAgBAQABPwCzJP/EABgRAAIDAAAAAAAAAAAAAAAAAAABElGR/9oACAECAQE/AIpXp//EABsRAAIBBQAAAAAAAAAAAAAAAAECABITITFi/9oACAEDAQE/ALrtunHIE//Z"});
;// CONCATENATED MODULE: ./styles/projects/Project2_3.jpg
/* harmony default export */ const Project2_3 = ({"src":"/_next/static/media/Project2_3.7d34bb08.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAqBYL/8QAFxABAAMAAAAAAAAAAAAAAAAAAQARUv/aAAgBAQABPwCzJP/EABgRAAIDAAAAAAAAAAAAAAAAAAABElGR/9oACAECAQE/AIpXp//EABsRAAIBBQAAAAAAAAAAAAAAAAECABITITFi/9oACAEDAQE/ALrtunHIE//Z"});
;// CONCATENATED MODULE: ./styles/projects/Project3_1.jpg
/* harmony default export */ const Project3_1 = ({"src":"/_next/static/media/Project3_1.5f2b0277.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKoTAn//xAAaEAACAgMAAAAAAAAAAAAAAAACEQATEiFR/9oACAEBAAE/ALQxVIPu5//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCmf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCs/9k="});
;// CONCATENATED MODULE: ./styles/projects/Project3_2.jpg
/* harmony default export */ const Project3_2 = ({"src":"/_next/static/media/Project3_2.6ccd04b2.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKoTAn//xAAaEAACAgMAAAAAAAAAAAAAAAACEQATEiFR/9oACAEBAAE/ALQxVIPu5//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCmf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCs/9k="});
;// CONCATENATED MODULE: ./styles/projects/Project3_3.jpg
/* harmony default export */ const Project3_3 = ({"src":"/_next/static/media/Project3_3.26271029.jpg","height":590,"width":1004,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKoTAn//xAAaEAACAgMAAAAAAAAAAAAAAAACEQATEiFR/9oACAEBAAE/ALQxVIPu5//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCmf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCs/9k="});
;// CONCATENATED MODULE: ./Constants/projects.js
// import project demo images as follows.









// first 3 projects are visible on the homepage while all are visible on the work page.
const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: "Agence immobili\xe8re",
        description: "Projet con\xe7u en utilisant le framework Chakra UI, React/Next, RapidAPI pour l'appel API",
        githubLink: "",
        projectLink: "https://next-immo-alphabitic.vercel.app/",
        tech: [
            "React",
            "RapidAPI",
            "Chakra UI"
        ],
        photo: [
            Project1_1,
            Project1_2,
            Project1_3
        ]
    },
    {
        name: "Generateur d'analyses",
        description: "En tant qu'administrateur syst\xe8me au sein du groupe Orange Business Service, cette application a \xe9t\xe9 con\xe7u pour faciliter le travail",
        githubLink: "/",
        projectLink: "https://bewys-ac97c.web.app/",
        tech: [
            "Firebase",
            "React",
            "Boostrap"
        ],
        photo: [
            Project2_1,
            Project2_2,
            Project2_3
        ]
    },
    {
        name: "Social Media",
        description: "Application con\xe7u avec la technologie MERN, elle int\xe8gre toutes les fonctionnalit\xe9s d'un r\xe9seau social",
        githubLink: "/",
        projectLink: "/",
        tech: [
            "Tech1",
            "Tech2",
            "Tech3"
        ],
        photo: [
            Project3_1,
            Project3_2,
            Project3_3
        ]
    }, 
];


/***/ })

};
;