import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, TextField } from '@mui/material';

const mockProducts = [
  { id: 1, name: 'Upcycled Denim Bag', price: 1999, image: 'https://images.unsplash.com/photo-1614016635969-6326fa24d213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 2, name: 'Recycled Plastic Planter', price: 1499, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 3, name: 'Repurposed Wood Coffee Table', price: 9999, image: 'https://images.unsplash.com/photo-1604074131665-7a4b13870ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 4, name: 'Upcycled Tire Ottoman', price: 2499, image: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 5, name: 'Recycled Paper Notebook', price: 299, image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 6, name: 'Upcycled Glass Bottle Lamp', price: 1799, image: 'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 7, name: 'Recycled Metal Wall Art', price: 3499, image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 8, name: 'Upcycled Pallet Bookshelf', price: 4999, image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 9, name: 'Recycled Fabric Cushion Cover', price: 799, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
];

function Marketplace() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Marketplace
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField
            label="Search products"
            variant="outlined"
            sx={{ width: '50%' }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Search
          </Button>
        </Box>
        <Grid container spacing={4}>
          {mockProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ m: 2 }}>
                  Buy Now
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Marketplace;