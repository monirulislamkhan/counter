import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const cdate = new Date();
  cdate.setDate(cdate.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button> Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button>-</button> Count: {count}
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <div>
        {/* {cdate === 0
          ? "Today"
          : cdate > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {cdate.toDateString()} */}
      </div>
    </>
  );
}
