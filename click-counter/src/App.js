import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [hasError, setHasError] = React.useState(false);

  const incrementCounter = React.useCallback(function () {
    if (hasError) {
      setHasError(false);
    }
    setCount(count => count + 1);
  }, [hasError, setHasError, setCount]);

  const decrementCounter = React.useCallback(function () {
    if (count === 0) {
      setHasError(true);
    } else {
      setCount(count => count - 1);
    }
  }, [count, setCount, setHasError]);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        Counter is currently: &nbsp
      <span data-test="count">{count}</span>
      </h1>


      {hasError && <h3 data-test='counter-error'>The counter cannot be less than 0</h3>}

      <button data-test="increment-button" onClick={incrementCounter}>Increment</button>
      <button data-test="decrement-button" onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default App;
