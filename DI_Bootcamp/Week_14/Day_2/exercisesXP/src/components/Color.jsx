import React, { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
    });

    const changeColor = () => {
        if (favoriteColor === 'red') {
            setFavoriteColor('blue');
        }
        else {
            setFavoriteColor('red');
        }
    };

    return (
        <div>
            <h1>My favorite color is <i>{favoriteColor}</i></h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Color;