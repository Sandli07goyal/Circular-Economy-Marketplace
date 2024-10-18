import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RecyclingIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Circular Economy Marketplace
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/ai-repurposing">
            AI Repurposing
          </Button>
          <Button color="inherit" component={RouterLink} to="/marketplace">
            Marketplace
          </Button>
          <Button color="inherit" component={RouterLink} to="/lifecycle-analysis">
            Lifecycle Analysis
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;