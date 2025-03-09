import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
const [showCounter, setShowCounter] = useState(true);
  // 1️⃣ Component Did Mount + Update
  useEffect(() => {
    console.log("Component Mounted or Updated");
  });

  // 2️⃣ Component Did Mount (Runs Only Once)
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // 3️⃣ Component Did Update (Runs When Count Changes)
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  // 4️⃣ Component Will Unmount (Cleanup)
  useEffect(() => {
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);
  const handleCounter= () => {
    setShowCounter(!showCounter);
  }
  

  return ( 
    <>
    <div>
    {showCounter && (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
      )}
      <br/>
      <button onClick={handleCounter}>{showCounter ? 'Hide Counter' : 'Show Counter'}</button>
    </div>
    </>
  );
};

export default Counter;
