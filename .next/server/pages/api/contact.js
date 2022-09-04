"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)({
        path: `${__dirname}/../../Collections/.env`
    });
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SENDER,
            pass: process.env.PASSWORD
        },
        secure: true
    });
    const mailData = {
        from: process.env.SENDER,
        to: process.env.TO,
        subject: `Message From Portfolio Website`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.message}</p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log("error");
        else console.log("info");
    });
    res.status(200);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7221));
module.exports = __webpack_exports__;

})();