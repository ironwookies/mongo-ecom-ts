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
exports.deleteService = exports.editService = exports.createService = exports.getByIdService = exports.getService = void 0;
const model_1 = require("./model");
const getService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return model_1.Product.find(query);
    }
    catch (error) {
        return error;
    }
});
exports.getService = getService;
const getByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return model_1.Product.findById({ _id: id });
    }
    catch (error) {
        return error;
    }
});
exports.getByIdService = getByIdService;
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return model_1.Product.create(data);
    }
    catch (error) {
        return error;
    }
});
exports.createService = createService;
const editService = (data, id) => {
    try {
        return model_1.Product.findByIdAndUpdate({ _id: id }, data, { new: true });
    }
    catch (error) {
        return error;
    }
};
exports.editService = editService;
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return model_1.Product.findByIdAndDelete({ _id: id });
    }
    catch (error) {
        return error;
    }
});
exports.deleteService = deleteService;
