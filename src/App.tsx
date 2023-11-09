// App.tsx
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/results/Results';
import { Card } from './interfaces/Card';
import Footer from './components/footer/Footer';
import FilterOptions from './components/filters/FilterOptions';

function App() {
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [incomplete, setIncomplete] = useState(false);
  const [origin, setOrigin] = useState('all'); // 'official', 'unofficial', 'all'

  const handleSearchResults = (results: Card[]) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        OCTOBOT
        <SearchBar onSearch={handleSearchResults} incomplete={incomplete} origin={origin} />
        <FilterOptions 
          incomplete={incomplete} 
          setIncomplete={setIncomplete} 
          origin={origin} 
          setOrigin={setOrigin} 
        />
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
