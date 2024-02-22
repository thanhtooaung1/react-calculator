import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();
  const [errors, setError] = useState();
  const [operator, setOperator] = useState("+");

  // calculate over operator
  const calculate = () => {
    switch (operator) {
      case "+":
        addValues();
        break;
      case "-":
        subtractValues();
        break;
      case "*":
        multiplyValues();
        break;
      case "/":
        divisionValues();
        break;
    }
  };

  // sum two numbers
  const addValues = () => {
    const isValidNumber = isValidNumbers();
    if (isValidNumber) {
      setResult(number1 + number2);
    }
  };

  // subtract two numbers
  const subtractValues = () => {
    const isValidNumber = isValidNumbers();
    if (isValidNumber) {
      if (number1 < number2) {
        setError({ number1: "number1 must be greater" });
      } else {
        setResult(number1 - number2);
      }
    }
  };

  // multiply two numbers
  const multiplyValues = () => {
    const isValidNumber = isValidNumbers();
    if (isValidNumber) {
      setResult(number1 * number2);
    }
  };

  // divide two numbers
  const divisionValues = () => {
    const isValidNumber = isValidNumbers();
    if (isValidNumber) {
      if (number2 === 0) {
        setError({ number2: "number2 must not be 0" });
      } else {
        setResult((number1 / number2).toFixed(2));
      }
    }
  };

  // check empty and invalid numbers
  function isValidNumbers() {
    let errors = {};
    setResult();

    if (!number1 && number1 != 0) {
      errors["number1"] = "number1 is required";
    }

    if (!number2 && number2 != 0) {
      errors["number2"] = "number2 is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return false;
    }

    setError();
    return true;
  }

  // assign operator
  const chooseOperator = (e) => {
    setOperator(e.target.value);
  };

  return (
    <div className="App">
      <div className="card">
        <h3 className="text">Calculator</h3>

        {/* number 1 input field */}
        <div className="input-group">
          <label htmlFor="number1" className="label">
            Number1
          </label>
          <input
            type="number"
            inputMode="numeric"
            id="number1"
            className="input"
            pattern="[/d]*"
            placeholder="Enter number 1 value"
            onChange={(e) => setNumber1(parseFloat(e.target.value))}
          />
          <p className="error">{errors?.number1}</p>
        </div>

        {/* number 2 input field */}
        <div className="input-group">
          <label htmlFor="number1" className="label">
            Number2
          </label>
          <input
            type="number"
            id="number1"
            className="input"
            placeholder="Enter number 2 value"
            onChange={(e) => setNumber2(parseFloat(e.target.value))}
          />
          <p className="error">{errors?.number2}</p>
        </div>

        {/* operator select field */}
        <div className="select-group">
          <label htmlFor="number1" className="label">
            Operator
          </label>
          <select onChange={chooseOperator}>
            <option className="option" value="+">
              sum(+)
            </option>
            <option value="-">subtract(-)</option>
            <option value="*">multiply(x)</option>
            <option value="/">divide(÷)</option>
          </select>
        </div>

        {/* <div className="operator-btn">
          <button onClick={addValues}>+</button>
          <button onClick={subtractValues}>-</button>
          <button onClick={multiplyValues}>x</button>
          <button onClick={divisionValues}>÷</button>
        </div> */}

        <button className="btn" type="submit" onClick={calculate}>
          Submit
        </button>
        <h5 className="text">Your result is: {result}</h5>
      </div>
    </div>
  );
}

export default App;
