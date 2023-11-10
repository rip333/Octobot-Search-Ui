import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '../../interfaces/Card';
import styles from './SearchBar.module.css'; // Import the CSS Module
import { createSearchQuery } from './searchUtils';

interface SearchBarProps {
    onSearch: (results: Card[]) => void;
    incomplete: boolean;
    origin: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, incomplete, origin }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submit action

        try {
            const filterOptions = {
                incomplete: incomplete,
                origin: origin,
            };
            const searchQuery = createSearchQuery(query, filterOptions);

            const response = await axios.get(`https://cerebro-beta-bot.herokuapp.com/query?${searchQuery}`);

            // Handle response here
            onSearch(response.data);
        } catch (error) {
            // Handle error here
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} className={styles.form}>
                <div className={styles.searchbox}>
                    <input
                        aria-label="Search"
                        placeholder="Search"
                        type="search"
                        value={query}
                        autoFocus required
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className={styles.searchContainer}>
                    <button type="submit" className={styles.searchButton}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
