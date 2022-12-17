"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.appPort = exports.db_uri = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.db_uri = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : '';
exports.appPort = process.env.PORT;
exports.env = process.env.ENV;
