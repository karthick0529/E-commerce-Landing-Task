import React from 'react';
import { TextField } from '@mui/material';

function SearchBar({ onSearch }) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      label="Search products"
      onChange={(e) => onSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;
