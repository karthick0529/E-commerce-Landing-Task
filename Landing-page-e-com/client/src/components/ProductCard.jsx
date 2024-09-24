import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function ProductCard({ product, onClick, handleAddToCart }) {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', height: '100%', position: 'relative' }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 180, objectFit: 'contain' }} // Adjust height and fit
      />
      
      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>

      {/* Add to Cart Button inside the card */}
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click event
            handleAddToCart(product); // Add to Cart
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}

export default ProductCard;
