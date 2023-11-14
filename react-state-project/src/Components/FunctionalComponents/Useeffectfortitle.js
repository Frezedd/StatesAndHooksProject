import React, { useState, useEffect } from "react";
import "./Useeffectfortitle.css";

function Useeffectfortitle() {
  const [clickCount, setClickCount] = useState(0);

  // useEffect with callback for component mount logic
  useEffect(() => {
    const handleMount = () => {
      alert("Component is mounted");
    };

    // Call the mount callback only once when the component is mounted
    handleMount();

    // Clean up function to reset document title when component is unmounted
    return () => {
      document.title = "React App";
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount

  // useEffect to handle document title change when clickCount changes
  useEffect(() => {
    document.title = `Click Count: ${clickCount}`;
  }, [clickCount]); // useEffect runs when clickCount changes

  const ButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={ButtonClick}>Click Me!</button>
      <p>Click Count: {clickCount}</p>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const Useeffectfortitle = () => {
//   const [count, setCount] = useState(0);

//   // useEffect with callback function
//   useEffect(() => {
//     const handleSideEffects = () => {
//       // Update document title
//       document.title = `Count: ${count}`;

//       // Show alert on mount
//       alert('Component is mounted');

//       // Cleanup function to show alert on unmount
//       return () => {
//         alert('Component is unmounted');
//       };
//     };

//     // Call the callback function
//     handleSideEffects();
//   }, [count]);

//   const handleButtonClick = () => {
//     // Use the callback function to update the count
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Click me</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

export default Useeffectfortitle;
