// App.tsx
import styles from "./App.module.css";
import React, { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/results/Results';
import { Card } from './interfaces/Card';
import Footer from './components/footer/Footer';
import FilterOptions from './components/filters/FilterOptions';
import logo from './logo.png';
import iconText from './icon-text.png';

function App() {
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [incomplete, setIncomplete] = useState(false);
  const [origin, setOrigin] = useState('official'); // 'official', 'unofficial', 'all'
  const [searchPerformed, setSearchPerformed] = useState(false); // Add this line

  const handleSearchResults = (results: Card[]) => {
    setSearchResults(results);
    setSearchPerformed(true);
  };

  const resetToHomePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor action
    setSearchResults([]); // Reset search results
    setSearchPerformed(false);
  };

  return (
    <div className={styles.Octobot}>
      <header className={styles.OctobotHeader}>
        <a href="#" onClick={resetToHomePage} className={styles.OctobotLabel}>
          {searchPerformed ? <img src={iconText} className={styles.LogoText} alt="logo" /> : <img src={logo} className={styles.OctobotLogo} alt="logo" />}
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
        {searchPerformed && <Results results={searchResults} />}
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
