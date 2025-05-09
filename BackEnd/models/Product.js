import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: String,
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
