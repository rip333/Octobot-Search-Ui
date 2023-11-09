// components/sort/Sort.tsx
import React from 'react';
import { Card } from '../../interfaces/Card';

interface SortProps {
  onSort: (sortBy: keyof Card) => void;
}

const Sort: React.FC<SortProps> = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value as keyof Card)}>
      <option value="Name">Name</option>
      <option value="Cost">Cost</option>
      <option value="Type">Type</option>
      <option value="Classification">Classification</option>
      <option value="Id">Release</option>
    </select>
  );
};

export default Sort;
