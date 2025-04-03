import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import App from './App';
import Projects from './Projects'; // Import the Projects page
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your app with Router */}
      <Routes> {/* Define your Routes */}
        <Route path="/" element={<App />} /> {/* Route for homepage */}
        <Route path="/projects" element={<Projects />} /> {/* Route for projects page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// Performance measuring
reportWebVitals();