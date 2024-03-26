import React from "react";

function App() {
  const coba = () => {
    console.log("coba");
  };

  return (
    <div>
      <button onClick={() => coba()}>Klik</button>
    </div>
  );
}

export default App;
