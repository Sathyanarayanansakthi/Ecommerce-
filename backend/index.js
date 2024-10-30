import express from "express"; // Importing Express framework
import dotenv from "dotenv"; // .env import for environment variables
import { connectDB } from "./config/db.js"; // Importing the database connection function
import Product from "./models/product.js"; // Importing the Product model

const app = express();

// Configure environment variables
dotenv.config();

// Middleware to accept JSON data in req.body
app.use(express.json());
 
// Routes

//used to create the products
app.post('/api/products', async (req, res) => {
    const product = req.body; // Get product data from the request body

    // ! NOT Operator 
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        });
    }

    // Creating a new product instance
    const newProduct = new Product(product);

    // Try to save the product or catch the error
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct }); // Send success response with the created product
    } catch (error) {
        console.log("Error in Creating Product:", error); // Log the error
        res.status(500).json({ success: false, message: "Server Error" }); // Send error response
    }
});

// Log MongoDB URI (for testing purposes)
console.log(process.env.MONGO_URI); // Ensure .env file has MONGO_URI variable

// Start the server
app.listen(3400, () => {
    connectDB(); // Connect to the database
    console.log("Server started on localhost:3400"); // Log server startup message
});


