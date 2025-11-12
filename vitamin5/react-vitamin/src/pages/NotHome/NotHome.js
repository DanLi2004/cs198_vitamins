import React, { useEffect, useState } from "react";

const NotHome = () => {
  const [count, setCount] = useState(0);

  // Keep the counter from going below 0
  useEffect(() => {
    if (count < 0) setCount(0);
  }, [count]);

  return (
    <div className="page">
      <h1>Not Home Page</h1>

      <h2>Counter: {count}</h2>

      {count >= 5 && <p className="passed-msg">You passed 5!</p>}

      <div className="btn-row">
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
        <button onClick={() => setCount(c => c - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default NotHome;
