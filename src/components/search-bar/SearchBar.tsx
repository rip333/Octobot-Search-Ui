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
        <form onSubmit={handleSearch} className={styles.form}>
            <div className={styles.searchbox}>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <input
                    aria-label="Search"
                    placeholder="Search"
                    type="search"
                    value={query}
                    autoFocus required
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchBar;
