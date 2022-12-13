import React, { useState } from 'react';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview';
import Home from './pages/Home';
import Login from './pages/Login';
import BlogPost from './pages/BlogPost';
import Navigation from './components/Navigation';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
      <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login toggleAuth={toggleIsAuthenticated} />} />
        <Route path="/blogposts" element={isAuthenticated ? <Overview /> : <Navigate to="/login" />} />
        <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;