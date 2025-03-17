import { useState, useEffect } from "react";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;
    const step = Math.ceil((end - start) / (duration / 50)); // Adjusted for smooth increment
    const timer = setInterval(() => {
      current += step;
      if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 50); // Interval for smoother counting

    return () => clearInterval(timer); // Cleanup on unmount
  }, [start, end, duration]);

  return <div className="d-flex align-items-center justify-content-center mx-6">{count.toLocaleString()}+</div>; // Formatting for large numbers
};

export default Counter;
