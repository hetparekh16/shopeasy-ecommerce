import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    rating: Object,
})

export default mongoose.model('product', productSchema)