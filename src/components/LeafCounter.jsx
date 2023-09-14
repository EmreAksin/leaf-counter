import { useState } from "react";
function LeafCounter() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <div>
      <h1>Yaprak Sayacı</h1>
      <p>Sayacınız: {count}</p>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
}

export default LeafCounter;
