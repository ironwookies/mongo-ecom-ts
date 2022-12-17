import { Callback, Document } from 'mongoose';
import { Product, ProductDocument } from './model';

type ServiceReturnType<T> = Promise<T | null | unknown>;
type QueryParam = Callback<
  Document<unknown, unknown, unknown> & ProductDocument
>; // TODO: there is probably a better way to do this

export const getService = async (
  query: QueryParam
): ServiceReturnType<ProductDocument[]> => {
  try {
    return Product.find(query);
  } catch (error) {
    return error;
  }
};

export const getByIdService = async (
  id: string
): ServiceReturnType<ProductDocument> => {
  try {
    return Product.findById({ _id: id });
  } catch (error) {
    return error;
  }
};

export const createService = async (
  data: ProductDocument
): ServiceReturnType<ProductDocument> => {
  try {
    return Product.create(data);
  } catch (error) {
    return error;
  }
};

export const editService = (data: ProductDocument, id: string) => {
  try {
    return Product.findByIdAndUpdate({ _id: id }, data, { new: true });
  } catch (error) {
    return error;
  }
};

export const deleteService = async (
  id: string
): ServiceReturnType<ProductDocument> => {
  try {
    return Product.findByIdAndDelete({ _id: id });
  } catch (error) {
    return error;
  }
};
