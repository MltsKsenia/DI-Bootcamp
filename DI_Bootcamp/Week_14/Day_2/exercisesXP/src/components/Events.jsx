import React, { useState } from 'react';

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true); // Переменная состояния для переключателя

    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`Input value: ${event.target.value}`);
        }
    };

    // Функция для переключения значения isToggleOn
    const toggleButton = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <div><button onClick={clickMe}>Click Me</button></div>
            <br />
            <div><input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" /></div>
            <br />
            <div>
                <p>Exercise 2 Part III:</p>
                <button onClick={toggleButton}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        </div>
    );
};

export default Events;
