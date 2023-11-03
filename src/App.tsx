import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <main>
      <span>Counter {number}</span>
      <button onClick={() => setNumber((n) => n + 1)}>+1</button>
    </main>
  );
}

export default App;
