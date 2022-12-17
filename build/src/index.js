"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const product_1 = require("./modules/product");
const config_1 = require("./utils/config");
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin',
        'Acces-Control-Allow-Methods',
        'Origin',
        'withCredentials',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'X-HTTP-Method-Override',
        'Set-Cookie',
        'Request',
    ],
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
app.use((0, cookie_parser_1.default)());
(0, db_1.connectToMongoDB)();
const port = config_1.appPort || 5001;
app.listen(port, () => {
    if (config_1.env === 'dev') {
        console.log(`TypeScript with Express http://localhost:${port}/`);
    }
});
app.use('/', product_1.productRouter);
