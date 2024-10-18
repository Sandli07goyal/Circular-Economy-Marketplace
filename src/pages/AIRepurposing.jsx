import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';

function AIRepurposing() {
  const [material, setMaterial] = useState('');
  const [ideas, setIdeas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating AI-generated ideas
    const generatedIdeas = [
      {
        title: `${material} Wall Art`,
        description: `Create a unique piece of wall art using repurposed ${material}.`,
        image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        title: `${material} Furniture`,
        description: `Design and build eco-friendly furniture using reclaimed ${material}.`,
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        title: `${material} Jewelry`,
        description: `Craft unique, sustainable jewelry pieces from recycled ${material}.`,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        title: `${material} Garden Planters`,
        description: `Transform ${material} into creative and functional garden planters.`,
        image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        title: `${material} Lighting Fixtures`,
        description: `Design innovative lighting solutions using repurposed ${material}.`,
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      },
      {
        title: `${material} Fashion Accessories`,
        description: `Create trendy, eco-conscious fashion accessories from recycled ${material}.`,
        image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      }
    ];
    setIdeas(generatedIdeas);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          AI Repurposing Ideas
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Enter a material to repurpose"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Get Ideas
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
              src="https://images.unsplash.com/photo-1530904613557-b405de3fb731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
              alt="AI Repurposing Concept"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
        {ideas.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center">
              Repurposing Ideas for {material}
            </Typography>
            <Grid container spacing={3}>
              {ideas.map((idea, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={idea.image}
                      alt={idea.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {idea.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {idea.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default AIRepurposing;