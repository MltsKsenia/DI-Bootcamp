import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult('Please enter valid numbers.');
            return;
        }

        let calculation;
        calculation = number1 + number2;

        setResult(calculation);
    };

    return (
        <div>
            <h1>React Calculator</h1>
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <br />
            <button onClick={handleCalculate}>Add Them!</button>
            <h2>Result: {result !== null ? result : 'Enter numbers and select an operation'}</h2>
        </div>
    );
}

export default Calculator;