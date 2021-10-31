import productSchema from "../model/productSchema.js";

export const getProduct = async (req, res) => {
    try {
        const products = await productSchema.find({})
        res.json(products)
    } catch (err) {
        console.log(err);
    }
    return "Hello from product"
}
