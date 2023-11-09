import React from 'react';
import styles from './Results.module.css'; // If using CSS Modules
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
        <div className={styles.resultsContainer}>
        {results.length > 0 ? (
            <ul className={styles.resultsList}>
                {results.map((card, index) => (
                    <img
                    key={index}
                    src={getImageUrl(card)}
                    alt={card.Name}
                    className={styles.cardImage}
                />
                ))}
            </ul>
        ) : (
            <p>No results to display</p>
        )}
    </div>
    );
};


export default Results;
