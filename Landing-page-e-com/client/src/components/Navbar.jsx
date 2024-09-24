import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront'; // E-commerce Icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Add to Cart Icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Wishlist Icon

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* E-commerce site icon */}
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <StorefrontIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ShopSphere
        </Typography>

        {/* Wishlist Icon */}
        <IconButton color="inherit" aria-label="wishlist">
          <FavoriteIcon />
        </IconButton>

        {/* Add to Cart Icon */}
        <IconButton color="inherit" aria-label="add to cart">
          <ShoppingCartIcon />
        </IconButton>

        {/* Login Button */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
