import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  return json;
};

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <div>
          <div>
            <input placeholder="Number 1" onChange={(e) => setNum1(parseInt(e.target.value))} />
            <input placeholder="Number 2" onChange={(e) => setNum2(parseInt(e.target.value))} />
            <button onClick={() => setResult(add(num1, num2))}>Add</button>
          </div>
          <div>
            <input placeholder="Number 1" onChange={(e) => setNum1(parseInt(e.target.value))} />
            <input placeholder="Number 2" onChange={(e) => setNum2(parseInt(e.target.value))} />
            <button onClick={() => setResult(subtract(num1, num2))}>Subtract</button>
          </div>
          <div>
            <input placeholder="Number 1" onChange={(e) => setNum1(parseInt(e.target.value))} />
            <input placeholder="Number 2" onChange={(e) => setNum2(parseInt(e.target.value))} />
            <button onClick={() => setResult(multiply(num1, num2))}>Multiply</button>
          </div>
          <div>
            <input placeholder="Number 1" onChange={(e) => setNum1(parseInt(e.target.value))} />
            <input placeholder="Number 2" onChange={(e) => setNum2(parseInt(e.target.value))} />
            <button onClick={() => setResult(divide(num1, num2))}>Divide</button>
          </div>
        {result && <span>The result is {result}</span>}
      </div>
      <ChildComponent fetchData={fetchData} />
    </div>
  );
}

export default App;

export {
  add,
  subtract,
  multiply,
  divide,
};
