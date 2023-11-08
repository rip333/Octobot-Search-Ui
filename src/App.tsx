
import './App.css';
import SearchBar from './components/search-bar/SearchBar';
import React, { useState } from 'react';
import Results from './components/results/Results';
import { Card } from './interfaces/Card';
import Footer from './components/footer/Footer';

function App() {
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  // This function will be passed down to the SearchBar component
  const handleSearchResults = (results: Array<Card>) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        OCTOBOT
        <SearchBar onSearch={handleSearchResults} />
      </header>
      <body>
        <Results results={searchResults} />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
