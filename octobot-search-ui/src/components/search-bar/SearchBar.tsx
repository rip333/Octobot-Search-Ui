import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '../../interfaces/Card';

interface SearchBarProps {
    onSearch: (results: Card[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submit action

        try {
            const response = await axios.get(`https://cerebro-beta-bot.herokuapp.com/cards`, {
                params: { name: query },
                // In a real application, you would also likely include headers such as an Authorization header
            });

            // Handle response here
            onSearch(response.data);
        } catch (error) {
            // Handle error here
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
