"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = void 0;
const mongodb_config_1 = __importDefault(require("./mongodb.config"));
exports.connectToMongoDB = mongodb_config_1.default;
