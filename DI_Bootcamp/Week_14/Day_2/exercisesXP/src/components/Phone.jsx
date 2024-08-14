import React, { useState } from 'react';

const Phone = () => {
    const [brand] = useState('Samsung');
    const [model] = useState('Galaxy S20');
    const [color, setColor] = useState('black');
    const [year] = useState(2020);

    const changeColor = () => {
        if (color === 'black') {
            setColor('blue');
        }
        else {
            setColor('black');
        }
    };

    return (
        <div>
            <h2>My telephone is a {brand}</h2>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Phone;