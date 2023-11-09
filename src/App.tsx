// App.tsx
import styles from "./App.module.css";
import React, { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/results/Results';
import { Card } from './interfaces/Card';
import Footer from './components/footer/Footer';
import FilterOptions from './components/filters/FilterOptions';
import logo from './logo.png';

function App() {
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [incomplete, setIncomplete] = useState(false);
  const [origin, setOrigin] = useState('official'); // 'official', 'unofficial', 'all'

  const handleSearchResults = (results: Card[]) => {
    setSearchResults(results);
  };

  const resetToHomePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor action
    setSearchResults([]); // Reset search results
    // Reset other states if necessary
    // setIncomplete(false);
    // setOrigin('official');
  };

  return (
    <div className={styles.Octobot}>
      <header className={styles.OctobotHeader}>
        <a href="#" onClick={resetToHomePage} className={styles.OctobotLabel}>
          <img src={logo} className={styles.OctobotLogo} alt="logo" />
        </a>
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
