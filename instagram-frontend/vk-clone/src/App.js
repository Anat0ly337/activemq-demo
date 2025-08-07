import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import News from './components/News';
import Messenger from './components/Messenger';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <div className="app-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile />} /> {/* Default to profile page */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
