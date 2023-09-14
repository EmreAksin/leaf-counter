import { useState } from "react";

function LeafCounter() {
  const [count, setCount] = useState(0);
  const [LeafCount, setLeafCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setLeafCount(LeafCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setLeafCount(LeafCount - 1);
    }
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-semibold">Yaprak Sayacı</h1>
      <p className="text-xl mt-4">Sayacınız: {count}</p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={increment}
        >
          Arttır
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Azalt
        </button>
      </div>
      {/* Yaprak emoji sayısı kadar döngü oluştur */}
      {Array.from({ length: LeafCount }, (_, index) => (
        <span key={index} role="img" aria-label="Yaprak Emoji">
          🪶
        </span>
      ))}
    </div>
  );
}

export default LeafCounter;
