import mongoose from 'mongoose';
import { connectToMongoDB } from '../db';
import { Product } from '../modules/product';

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

async function seedMeBabyOneMoreTime() {
  connectToMongoDB();
  Product.create(productSeeds, (res, err) => {
    console.log({ res });
    if (res) {
      console.log('im so seeded', res);
    }
    if (err) {
      console.error(err);
    }

    mongoose.connection.close();
  });
}

seedMeBabyOneMoreTime();
