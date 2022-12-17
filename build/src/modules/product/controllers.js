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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductByID = exports.getProducts = void 0;
const services_1 = require("./services");
const getProducts = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { req, res, next } = params;
    try {
        const query = req === null || req === void 0 ? void 0 : req.query; // TODO: mmm idk about this
        const products = (yield (0, services_1.getService)(query));
        if (products.length) {
            res.status(200).json({ products });
        }
        else {
            res.status(400).json({ Error: 'aint no products baby' });
        }
    }
    catch (error) {
        console.log('?????');
        next(error);
    }
});
exports.getProducts = getProducts;
const getProductByID = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { req, res, next } = params;
    try {
        const product = yield (0, services_1.getByIdService)(req.params.id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(400).json({ Error: 'aint no product son' });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getProductByID = getProductByID;
const createProduct = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { req, res, next } = params;
    try {
        const newProduct = yield (0, services_1.createService)(req === null || req === void 0 ? void 0 : req.body);
        res.status(200).json(newProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { req, res, next } = params;
    try {
        const data = req.body;
        const updatedProduct = yield (0, services_1.editService)(data, req.params.id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { req, res, next } = params;
    try {
        const deletedProduct = yield (0, services_1.deleteService)(req.params.id);
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProduct = deleteProduct;
