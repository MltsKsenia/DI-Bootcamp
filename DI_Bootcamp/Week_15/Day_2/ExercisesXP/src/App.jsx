import React from 'react';
import Navbar from './Navbar';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Webhook from './webhook';


function App() {
  return (
    <div>
      <h1>Exercise 1</h1>
      <Navbar />
      <h1>Exercise 2</h1>
      <PostList />
      <h1>Exercise 3</h1>
      <Example1 />
      <Example2 />
      <Example3 />
      <h1>Exercise 4</h1>
      <Webhook />
    </div>
  );
}

export default App;