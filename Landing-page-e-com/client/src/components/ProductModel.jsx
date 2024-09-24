import React from 'react';
import { Box, Button, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ProductModal({ open, handleClose, product, handleAddToCart, cart }) {
  const isInCart = cart.some((item) => item._id === product._id);

  const handleRemoveFromCart = () => {
    // Logic to remove from cart
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        {/* Close Icon at the top-right corner */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
        
        {/* Render Product Image */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
        </Box>

        {/* Product Title, Description, and Price */}
        <Typography variant="h5" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          ${product.price}
        </Typography>

        {/* Add/Remove Cart Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleRemoveFromCart}
            disabled={!isInCart}
          >
            Remove from Cart
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddToCart(product)}
            disabled={isInCart}
          >
            Add to Cart
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
