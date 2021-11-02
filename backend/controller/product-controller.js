import productSchema from "../model/productSchema.js";

export const getProduct = async (req, res) => {
    try {
        const products = await productSchema.find({})
        res.json(products)
    } catch (err) {
        console.log(err);
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await productSchema.findOne({ 'id': req.params.id })
        res.json(product)
    } catch (err) {
        console.log(err.message);
    }
}
