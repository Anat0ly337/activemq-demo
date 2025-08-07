import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex' }}>
        <Feed />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
