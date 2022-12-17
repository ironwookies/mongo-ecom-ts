import { Request, Response, NextFunction } from 'express';
import { Callback, Document } from 'mongoose';
import {
  createService,
  deleteService,
  getService,
  getByIdService,
  editService,
} from './services';
import { ProductDocument } from './model';

type QueryParam = Callback<
  Document<unknown, unknown, unknown> & ProductDocument
>; // TODO: there is probably a better way to do this

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query as unknown as QueryParam; // TODO: mmm idk about this
    const products = (await getService(query)) as ProductDocument[];

    if (products.length) {
      res.status(200).json({ products });
    } else {
      res.status(400).json({ Error: 'aint no products baby' });
    }
  } catch (error) {
    next(error);
  }
};

export const getProductByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await getByIdService(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json({ Error: 'aint no product son' });
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = await createService(req?.body);

    res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const updatedProduct = await editService(data, req.params.id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedProduct = await deleteService(req.params.id);

    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};
