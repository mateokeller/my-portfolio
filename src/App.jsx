import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./ui/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Hello World</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
