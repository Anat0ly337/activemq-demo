import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Messenger from './components/Messenger';
import Sidebar from './components/Sidebar'; // Sidebar might be part of a layout component later

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ paddingTop: '60px' }}> {/* Add padding to avoid content being hidden by fixed header */}
          <Routes>
            <Route path="/" element={
              <div style={{ display: 'flex', maxWidth: '935px', margin: '0 auto' }}>
                <Feed />
                <Sidebar />
              </div>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
