import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    productionImage: {
      type: String,
    },
    price: {
      default: 0,
      type: mongoose.Schemas.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("products", productSchema);
