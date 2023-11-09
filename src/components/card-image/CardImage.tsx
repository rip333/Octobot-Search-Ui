// CardImage.tsx
import React, { useState, useEffect } from 'react';
import styles from './CardImage.module.css'; // Make sure to create a corresponding CSS module file for styling
import { Card } from '../../interfaces/Card';

interface CardImageProps {
  card: Card;
}

const CardImage: React.FC<CardImageProps> = ({ card }) => {
  const [loaded, setLoaded] = useState(false);

  const getImageUrl = (card: Card): string => {
    const imageBaseUrl = "https://cerebrodatastorage.blob.core.windows.net/cerebro-cards/";
    return card.Official
      ? `${imageBaseUrl}official/${card.Id}.jpg`
      : `${imageBaseUrl}unofficial/${card.Id}.jpg`;
  };

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <img
      src={getImageUrl(card)}
      alt={card.Name}
      className={`${styles.cardImage} ${loaded ? '' : styles.loading}`}
      onLoad={handleImageLoaded}
    />
  );
};

export default CardImage;
