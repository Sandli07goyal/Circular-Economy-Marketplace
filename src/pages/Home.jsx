import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Welcome to the Circular Economy Marketplace
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" paragraph>
                Our platform leverages AI to generate innovative ideas for transforming discarded materials into new, useful products, fostering a circular economy.
              </Typography>
              <Typography variant="body1" paragraph>
                Explore our AI Repurposing tool, browse the Marketplace for upcycled products, and track your environmental impact with our Lifecycle Analysis feature.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" component={RouterLink} to="/ai-repurposing" sx={{ mr: 2 }}>
                  Try AI Repurposing
                </Button>
                <Button variant="outlined" color="primary" component={RouterLink} to="/marketplace">
                  Visit Marketplace
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
              alt="Circular Economy Concept"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom align="center">
            Why Choose Circular Economy?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Reduce Waste"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Reduce Waste</Typography>
                <Typography variant="body2">Transform discarded materials into valuable products, minimizing waste and conserving resources.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Innovate"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Innovate</Typography>
                <Typography variant="body2">Use AI-powered ideas to create unique, sustainable products that stand out in the market.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Sustainable Future"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Sustainable Future</Typography>
                <Typography variant="body2">Contribute to a greener planet by participating in the circular economy movement.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;