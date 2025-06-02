
import Product from "../model.js"

export const addProduct=async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const getProduct=async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const getProductbyId=async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ 
        message: 'Product not found'
     });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const deleteProduct= async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) 
        return res.status(404).json({
     message: 'Product not found' 
    });
    res.status(200).json({
         message: 'Product deleted' 
        });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const updateProduct=async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ 
        message: 'Product not found' 
    });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

