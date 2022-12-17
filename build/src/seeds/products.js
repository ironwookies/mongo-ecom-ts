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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("../db");
const product_1 = require("../modules/product");
const productSeeds = [
    {
        name: 'ultamite waifu action figure',
        description: 'uwu',
        price: 50,
        image: '',
        quantity: 68,
    },
    {
        name: 'iron man action figure',
        description: 'I like cheeseburgers',
        price: 50,
        image: '',
        quantity: 68,
    },
    {
        name: 'saitama action figure',
        description: 'uhhh',
        price: 50,
        image: '',
        quantity: 68,
    },
    {
        name: 'pablo action figure',
        description: 'youre wasting so much time',
        price: 50,
        image: '',
        quantity: 68,
    },
    {
        name: 'eduardo action figure',
        description: 'fly to spain and slap me',
        price: 50,
        image: '',
        quantity: 68,
    },
    {
        name: 'neil degrasse tyson action figure',
        description: 'not pompous',
        price: 50,
        image: '',
        quantity: 68,
    },
];
function seedMeBabyOneMoreTime() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, db_1.connectToMongoDB)();
        product_1.Product.create(productSeeds, (res, err) => {
            console.log({ res });
            if (res) {
                console.log('im so seeded', res);
            }
            if (err) {
                console.error(err);
            }
            mongoose_1.default.connection.close();
        });
    });
}
seedMeBabyOneMoreTime();
