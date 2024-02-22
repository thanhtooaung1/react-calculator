import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const addValues = (e) => {
    e.preventDefault();
    const result = number1 + number2;
    if (!isNaN(result)) {
      setResult(number1 + number2);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <form onSubmit={addValues}>
          <h3 className="text">Sum Calculator</h3>
          <div className="input-group">
            <label htmlFor="number1" className="label">
              Number1
            </label>
            <input
              type="number"
              id="number1"
              name="number1"
              className="input"
              placeholder="Enter number 1 value"
              required
              onChange={(e) => setNumber1(parseInt(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="number1" className="label">
              Number2
            </label>
            <input
              type="number"
              id="number1"
              name="number1"
              className="input"
              placeholder="Enter number 2 value"
              required
              onChange={(e) => setNumber2(parseInt(e.target.value))}
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>

          <h5 className="text">Your sum is: {result}</h5>
        </form>
      </div>
    </div>
  );
}

export default App;
