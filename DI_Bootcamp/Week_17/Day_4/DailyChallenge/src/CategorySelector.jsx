import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from './selectors';

const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
    const categories = useSelector(selectCategories);

    return (
        <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
        >
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;