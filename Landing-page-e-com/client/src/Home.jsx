import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, MenuItem, Select, InputLabel, FormControl, Box, TextField } from '@mui/material';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModel';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  // API base URL from environment variables or fallback to default
  const API_BASE_URL = 'https://landing-task-sz90.onrender.com/api' || 'http://localhost:5000/api';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`).then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    }).catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, [API_BASE_URL]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (category) => {
    if (category) {
      axios
        .get(`${API_BASE_URL}/products/category/${category}`)
        .then((response) => setFilteredProducts(response.data))
        .catch((error) => {
          console.error('Error filtering by category:', error);
        });
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("https://wallpapercave.com/wp/wp3537557.jpg")',
        backgroundSize: 'cover',
        padding: '40px 0',
      }}
    >
      <Container maxWidth="xl">
        {/* Search and Category Container */}
        <Box
          sx={{
            mb: 4,
            p: 3,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
          }}
        >
          {/* MUI Search Field */}
          <TextField
            id="search"
            label="Search products"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
            sx={{ flexGrow: 1 }}
          />

          {/* MUI Category Dropdown */}
          <FormControl variant="outlined" sx={{ minWidth: 150 }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="home appliances">Home Appliances</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
                handleAddToCart={handleAddToCart} // Passing the add-to-cart function
              />
            </Grid>
          ))}
        </Grid>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            open={openModal}
            handleClose={() => setOpenModal(false)}
            product={selectedProduct}
            handleAddToCart={handleAddToCart}
            cart={cart}
          />
        )}
      </Container>
    </Box>
  );
}

export default Home;
