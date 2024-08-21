import './App.css'
import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import FavoriteColorComponent from './FavoriteColorComponent';
import UnmountingExample from './UnmountingExample';

function App() {
  return (
    <div>
      <h1>Exercise 1</h1>
      <h2>Click on the numbers to increase the counters.</h2>
      <p>The counter is programmed to throw an error when it reaches 5. This simulates a JavaScript error in a component.</p>

      <h3>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h3>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h3>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h3>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h3>This counter is not inside of boundary. So if it crashes, all other components are deleted.</h3>
      <BuggyCounter />

      <h1>Exercise 2</h1>
      <FavoriteColorComponent />

      <h1>Exercise 3</h1>
      <UnmountingExample />
    </div>
  );
}

export default App;