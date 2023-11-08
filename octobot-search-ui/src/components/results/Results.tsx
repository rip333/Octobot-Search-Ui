import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '../../interfaces/Card';

interface ResultsProps {
    results: Array<Card>; // Use a more specific type depending on your actual data structure
}

const Results: React.FC<ResultsProps> = ({ results }) => {

    const getImageUrl = (card: Card): string => {
        const imageBaseUrl = "https://cerebrodatastorage.blob.core.windows.net/cerebro-cards/";
        return card.Official
            ? `${imageBaseUrl}official/${card.Id}.jpg`
            : `${imageBaseUrl}unofficial/${card.Id}.jpg`;
    };

    return (
        <div>
            {results.length > 0 ? (
                <ul>
                    {results.map((card, index) => (
                        <li key={index}>
                            <img src={getImageUrl(card)} alt={card.Name} />

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results to display</p>
            )}
        </div>
    );
};


export default Results;
