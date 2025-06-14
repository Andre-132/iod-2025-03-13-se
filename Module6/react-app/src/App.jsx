import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GreetingComp from "./Greeting";
import BigCats from "./BigCats";
import Emoji from "./Emoji";
import Calculator from "./Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <GreetingComp name="John">
          <p>This is a custom greeting message passed as children.</p>
        </GreetingComp>
      </div>

      <div>
        <h2>Big Cats</h2>
        <BigCats />
      </div>

      <div>
        <Emoji />
      </div>

      <div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
