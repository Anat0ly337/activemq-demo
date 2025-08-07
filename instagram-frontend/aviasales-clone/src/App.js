import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import './App.css'; // I will create this file

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchForm />
      </main>
    </div>
  );
}

export default App;
