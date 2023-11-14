import React, { useState } from "react";
import "./Increaseddecreasecount.css";

function Increasedecreasecount() {
  // useState hook to manage the click count
  const [clicks, setClicks] = useState(0);

  // Function to handle increase button click with a callback
  const handleIncrease = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  // Function to handle decrease button click with a callback
  const handleDecrease = () => {
    setClicks((prevClicks) => prevClicks - 1);
  };

  // Function to handle reset button click
  const handleReset = () => {
    setClicks(0);
  };

  return (
    <div>
      {/* Display current click count */}
      <p>Click Count: {clicks}</p>

      {/* Buttons to increase, decrease, and reset click count */}
      <button onClick={handleIncrease}>Increase👆</button>
      <button onClick={handleReset}>Reset🤝</button>
      <button onClick={handleDecrease}>Decrease👇</button>
    </div>
  );
}

export default Increasedecreasecount;
