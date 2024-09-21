import React from 'react';
import { handleData } from './handleData';
import { User, Product, Order } from './types';
import './App.css'

const App: React.FC = () => {
  const mixedData: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 75.5 },
    { type: 'user', name: 'Bob', age: 25 },
  ];

  const results = handleData(mixedData);

  return (
    <div>
      <h1>Handle Data Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
