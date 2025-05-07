import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
}, {
  versionKey: false,
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
