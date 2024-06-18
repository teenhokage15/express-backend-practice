import mongoose from 'mongoose';
import { category } from './category.models';

const productSchema = new mongoose.schema({
  description:{
    required: true,
    type: String,
  },
  name:{
    required: true,
    type: string
  },
  productImage:{
    type: string,

  },
  price: {
    default: 0,
    type: Number,
  },
  stock: {
    default: 0,
    type: Number,
  },
  category: {
    type: mongoose.schema.types.objectId,
    ref: "Category",
    required: true,
  },
  owner: {
    type: mongoose.schema.types.objectId,
    ref: "User",
  }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);

