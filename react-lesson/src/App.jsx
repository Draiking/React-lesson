import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h3>Result University</h3>

      <span>тут будет время</span>
    </header>
  );
}

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <h1>Hello React</h1>
        </main>
      </div>
    </>
  );
}

export default App;
