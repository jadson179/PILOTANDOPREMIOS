"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var transporter = nodemailer_1.default.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL || "suporte@jadsonsantos.com",
        pass: process.env.PASS || "suporte@jadson",
    },
});
function sendMail(password, email) {
    return __awaiter(this, void 0, void 0, function () {
        var mailOptions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mailOptions = {
                        to: email,
                        from: process.env.EMAIL,
                        subject: "Recuperação de senha",
                        html: "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <style>\n            * {\n                padding: 0;\n                margin: 0;\n                box-sizing: border-box;\n            }\n            html,body {\n                width: 100%;\n                height: 100%;\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n               \n            }\n            .header {\n                background-color: #fff;   \n                height: 30%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            .header h3 {\n                font-family: \"Roboto\",sans-serif; \n                color: #000;  \n                font-size: 2em;\n            }\n            .main {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                height: 60%;\n                margin-top: 30px;\n                justify-content: space-between;\n            }\n            .footer {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                height: 10%;\n                margin-top: 30px;\n                justify-content: space-around;\n            }\n    \n    \n        </style>\n    </head>\n    <body>\n        <header class=\"header\">\n            <h3>Pilotando Motos</h3>\n        </header>\n        <main class=\"main\">\n            <p >Ol\u00E1,</p>\n    \n            </p>Segue sua senha: " + password + "</p>\n        </main>\n        <footer class=\"footer\">\n            <a href=\"http://pilotandomotos.com.br\">http://pilotandomotos.com.br</a></p>\n        </footer>\n    </body>\n    </html>\n        ",
                    };
                    return [4 /*yield*/, transporter.sendMail(mailOptions)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.default = sendMail;
