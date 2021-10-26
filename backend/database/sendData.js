import { products } from "./productData.js"
import productSchema from "../model/productSchema.js"
const sendData = async () => {
    try {
        await productSchema.deleteMany({})
        await productSchema.insertMany(products)
    }
    catch (err) {
        console.log(err);
    }
}

export default sendData
