function App() {
  const name = "world";
  let num1 = 34;
  let num2 = 43;
  let num = num1 + num2;
  let age = 25;
  let userage = 3; // try changing this value

  const worn = () => {
    alert("warning");
  };

  return (
    <div>
      {/* First image */}
      <img
        style={{ width: 300 }}
        src="https://www.bing.com/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="image"
      />

      <h1 style={{ color: "blue" }}>Hello {name}</h1>
      <p style={{ color: "green" }}>This is a simple React app.</p>
      <p style={{ color: "purple" }}>
        React <br />
        is <br />
        a <br />
        powerful <br />
        JavaScript <br />
        library <br />
        used <b style={{ color: "red" }}>{num}</b> <br />
        for <br />
        building <br />
        user <br />
        interfaces.
      </p>

      {/* Second image */}
      <img
        style={{ width: 300 }}
        src="https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="another image"
      />

      {/* Conditional rendering */}
      {userage > age ? (
        <p style={{ color: "orange" }}>User Logged IN</p>
      ) : (
        <p style={{ color: "gray" }}>Access Denied</p>
      )}

      {/* Button with double-click alert */}
      <button onDoubleClick={worn} style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
        Danger
      </button>
    </div>
  );
}

export default App;
