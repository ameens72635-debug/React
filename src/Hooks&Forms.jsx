import { useEffect, useRef } from "react";

function Data() {
  useEffect(() => {
    console.log("Information");
  }, []);

  return (
    <h1>Information</h1>
  );
}

function Refer() {
  const inputref = useRef();

  const uber = () => {
    inputref.current.focus();
  };

  return (
    <>
      <label>Name:</label>
      <input ref={inputref} type="text" />
      <button onClick={uber}>Focus Input</button>
    </>
  );
}

// Export both
export default Data;
export { Refer };
