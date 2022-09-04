"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 4843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rm": () => (/* binding */ ctaTexts),
/* harmony export */   "qY": () => (/* binding */ headings),
/* harmony export */   "ug": () => (/* binding */ userinfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9872);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//PLEASE FOLLOW THE FORMAT OF THIS FILE.



const userinfo = {
    logoText: "Herivony",
    contact: {
        email: "alphabitic@gmail.com",
        phone: "00261 38 73 999 89",
        countrycode: "+261" //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        {
            type: "github",
            link: "https://github.com/Alphabitic/React_Andry_Zola",
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithubAlt
        },
        {
            type: "linkedin",
            link: "https://www.linkedin.com/in/%E2%9C%A8herivony-zolalaina-andrianantenaina-574856238/",
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedinIn
        }, 
    ],
    greeting: {
        //this text goes on your landing page
        title: "ANDRIANANTENAINA Herivony Zolalaina",
        subtitle: "  Developpeur Frontend React certifi\xe9 FreeCodeCamp",
        subtitle2: "  Administrateur syst\xe8mes, r\xe9seaux et virtualisation"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Administrateur syst\xe8mes et r\xe9seaux",
            icones: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiFirebase, {
                size: "3rem"
            }),
            skills: [
                "Administration de serveur Citrix, AD et Exchange (environnement Windows / Linux) ",
                "Administration de machines Virtuelles via VSphere (VMWARE)  ",
                " Cloud Computing "
            ] //eg. react, html, python etc.
        },
        {
            category: "Developpeur FrontEnd en React",
            icones: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiReact, {
                size: "3rem"
            }),
            skills: [
                "ReactJS/ Javascript Vanilla/ Langage C /Next.js /React Router /Redux ",
                "Material UI/ React Bootstrap / Chakra Ui",
                "Firebase / Axios / Vercel"
            ]
        },
        {
            category: "R\xe9seaux et T\xe9l\xe9communication",
            icones: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiZend, {
                size: "3rem"
            }),
            skills: [
                "Internet (Gestion acc\xe8s, appel API, installation, reverse DNS) ",
                "Telephonie VOIP ( 3CX/ PABX/ SIP)",
                "OvertheBox OVH"
            ]
        }, 
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true,
        educationList: [
            {
                time: "Juillet 16, 2022",
                title: "Certificat :Front End Development Libraries",
                organization: "freeCodeCamp.org",
                description: "https://www.freecodecamp.org/certification/fcc3b5de587-ab7e-4a19-b1cc-6ae5814d4793/front-end-development-libraries" //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: "2015-2016",
                title: "Master en Ing\xe9nierie S\xe9curit\xe9 syst\xe8mes, R\xe9seau et t\xe9l\xe9communication",
                organization: "Ecole Sup\xe9rieure de Management, de Commerce et d'Informatique de F\xe8s, Maroc",
                description: "" //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: "2012-2013",
                title: "Licence en G\xe9nie M\xe9canique ",
                organization: "Facult\xe9 des Sciences et Techniques de Beni Mellal Maroc.",
                description: "Programmation et simulation M\xe9caniques en langage C"
            },
            {
                time: "2009-2012",
                title: "Dipl\xf4me d'\xc9tudes Universitaires en Sciences et Techniques en Math- Info - Physique(D.E.U.S.T)",
                organization: "Facult\xe9 des Sciences et Techniques de Beni Mellal Maroc.",
                description: ""
            }, 
        ]
    },
    experience: {
        visible: true,
        experienceList: [
            {
                company: "EasyTech",
                companylogo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiRedhat, {
                    size: "3rem"
                }),
                position: "Administrateurs syst\xe8mes et virtualisation",
                time: "Mai 2022 - Jusqu'a pr\xe9sent",
                description: "Administration de serveurs (Citrix, AD et Exchange, machines Virtuelles via VSphere (VMWARE))"
            },
            {
                company: "Transacom",
                companylogo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiCodeigniter, {
                    size: "3rem"
                }),
                position: "G\xe9rant et technicien N\xb03",
                time: "D\xe9cembre 2020 - Mai 2022",
                description: "Cr\xe9ation intranet et proc\xe9dures en (HTML/CSS/JavaScript), gestion RH, d\xe9ploiment de solutions VOIP et Internet"
            },
            {
                company: "Miav",
                companylogo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiJqueryLogo, {
                    size: "3rem"
                }),
                position: "Support technique N\xb0 3",
                time: "Mai 2019- D\xe9cembre 2020",
                description: "Guider l'utilisateur \xe0 r\xe9soudre les dysfonctionnements, contr\xf4le \xe0 distance et routage (VPN, Borne Wifi, DMZ, Cam\xe9ras)."
            }, 
        ]
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    }
};
const headings = {
    //you can customise all the headings here.
    workHomePage: "Projets",
    workMainPage: "Projets",
    capabilities: "Technologies",
    about: "A mon sujet",
    education: "Etudes",
    experience: "Experiences",
    blogs: "I write!",
    contact: "Me contacter"
};
const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: "D\xe9tails",
    workCTA: "Voir plus",
    capabCTA: "Plus d'informations",
    educationCTA: "D\xe9tails",
    resumeCTA: "Conclusion",
    submitBTN: "Soumettre"
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;