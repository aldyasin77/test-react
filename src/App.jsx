import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="container">
        <div>
          <h1>
            <a href="">Sins GROUP</a>
          </h1>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
            <li>
              <a href="">Portofolio</a>
            </li>
            <li>
              <a href="">Kontak</a>
            </li>
            <li>
              <a href="">Kontak</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default App;
