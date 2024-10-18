import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIRepurposing from './pages/AIRepurposing';
import Marketplace from './pages/Marketplace';
import LifecycleAnalysis from './pages/LifecycleAnalysis';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#1565c0',
    },
    background: {
      default: '#f1f8e9',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-repurposing" element={<AIRepurposing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/lifecycle-analysis" element={<LifecycleAnalysis />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;