import { useState } from "react";
import axios from "axios";

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);

    const calculate = async () => {
      try {
          const { data } = await axios.get("http://localhost:3000/calculate", {
              params: { num1: Number(num1), num2: Number(num2), operation },
          });
          setResult(data.result);
      } catch (error) {
          setResult("Error occurred: " + error.message);
      }
  };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Test</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
            <button onClick={calculate}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

export default App;