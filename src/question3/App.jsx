// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase +</button>
      <button onClick={decrement}>Decrease -</button>
    </div>
    </>
  );
}

export default App;
