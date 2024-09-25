# E-commerce Landing Page

This is a full-stack ECommerce landing page built using the MERN stack (MongoDB, Express, React, and Node.js). The application allows users to browse products, search by name, and filter by category to enhance their shopping experience.

--Features

# Product Management:

Fetch all products from the database.
Search for products by title using query parameters.
Filter products by category using route parameters.

# RESTful API Endpoints:

    /api/products: Fetches all products.
    /api/products/search: Searches for products by title.
    /api/products/category/:category: Filters products by category.

# Technologies Used:-

Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Middleware: CORS, dotenv
Environment Variables: Managed using dotenv
Setup and Installation
Prerequisites
Node.js and npm installed on your local machine.
MongoDB installed and running or access to a cloud MongoDB instance.

# API Endpoints

Get All Products
Endpoint: GET /api/products
Description: Fetches all products from the database.

Search Products by Title
Endpoint: GET /api/products/search?q=product
Description: Searches for products by title. 

Filter Products by Category
Endpoint: GET /api/products/category/:category
Description: Fetches products based on the category specified in the URL parameter.

