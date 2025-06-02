import express from "express"
import bodyParser from 'body-parser';
import cors from "cors"
import { addProduct,deleteProduct,updateProduct,getProduct,getProductbyId } from "./components/product.js";
import connectDB from "./db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.post('/products',addProduct );

app.get('/products', getProduct);

app.get('/products/:id', getProductbyId);

app.put('/products/:id', updateProduct);

app.delete('/products/:id', deleteProduct);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

