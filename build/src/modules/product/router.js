"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.get('/product', controllers_1.getProducts);
router.get('/product/:id', controllers_1.getProductByID);
router.post('/product', controllers_1.createProduct);
router.put('/product/:id', controllers_1.updateProduct);
router.delete('/product/:id', controllers_1.deleteProduct);
exports.default = router;
