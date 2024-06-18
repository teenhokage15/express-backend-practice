import mongoose from 'mongoose';
const categorySchema = new mongoose.schema(
  {
    type: String,
    required: true,
  },
  { timestamps: true }
);

export const category = mongoose.model('Category', categorySchema);
