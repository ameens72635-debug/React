import { useState } from "react";

// 🔹 Input component: updates live as you type
function Fire() {
  const [name, setName] = useState("");

  return (
    <>
      <label>
        Name:{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <h1>{name}</h1>
    </>
  );
}

function Master() {
  const [sample, setSample] = useState("Travel");

  return (
    <>
      <h1>{sample}</h1>
      <button
        style={{ width: "fit-content" }}
        onDoubleClick={() => setSample("Journey")}
      >
        Change
      </button>
    </>
  );
}

// 🔹 Counter with increment/decrement + includes Master
function Classic() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        style={{ width: "fit-content" }}
        onClick={() => setCount(count + 1)}
      >
        Count+
      </button>
      <button
        style={{ width: "fit-content" }}
        onClick={() => setCount(count - 1)}
      >
        Count-
      </button>
      <Master />
    </>
  );
}

// ✅ Default export (main component)
export default Classic;

// ✅ Named export
export { Fire };
