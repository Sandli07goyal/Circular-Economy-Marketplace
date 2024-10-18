import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid, CircularProgress } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LifecycleAnalysis() {
  const [product, setProduct] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setAnalysis({
        co2Saved: Math.round(Math.random() * 100),
        waterSaved: Math.round(Math.random() * 1000),
        energySaved: Math.round(Math.random() * 500),
        wasteReduced: Math.round(Math.random() * 200),
      });
      setLoading(false);
    }, 1500);
  };

  const chartData = analysis
    ? [
        { name: 'CO2 Saved (kg)', value: analysis.co2Saved },
        { name: 'Water Saved (L)', value: analysis.waterSaved },
        { name: 'Energy Saved (kWh)', value: analysis.energySaved },
        { name: 'Waste Reduced (kg)', value: analysis.wasteReduced },
      ]
    : [];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Lifecycle Analysis
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Enter a product to analyze"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
                  {loading ? <CircularProgress size={24} /> : 'Analyze'}
                </Button>
              </form>
              {analysis && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Environmental Impact of {product}:
                  </Typography>
                  <Typography>CO2 Saved: {analysis.co2Saved} kg</Typography>
                  <Typography>Water Saved: {analysis.waterSaved} liters</Typography>
                  <Typography>Energy Saved: {analysis.energySaved} kWh</Typography>
                  <Typography>Waste Reduced: {analysis.wasteReduced} kg</Typography>
                </Box>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              {analysis ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#2e7d32" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Typography variant="body1" color="text.secondary">
                    Enter a product to see the analysis chart
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom align="center">
            Why Lifecycle Analysis Matters
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Environmental Impact"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Understand Environmental Impact</Typography>
                <Typography variant="body2">Gain insights into the environmental footprint of products throughout their lifecycle.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Make Informed Decisions"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Make Informed Decisions</Typography>
                <Typography variant="body2">Use data-driven insights to choose more sustainable products and materials.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                     alt="Continuous Improvement"
                     style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <Typography variant="h6" gutterBottom>Drive Continuous Improvement</Typography>
                <Typography variant="body2">Identify areas for improvement in product design and manufacturing processes.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LifecycleAnalysis;