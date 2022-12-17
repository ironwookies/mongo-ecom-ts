import express from 'express';
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getProductByID,
} from './controllers';

const router = express.Router();

router.get('/product', getProducts);

router.get('/product/:id', getProductByID);

router.post('/product', createProduct);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

export default router;
