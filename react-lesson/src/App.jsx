import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { differences } from "./data";
import TeachingSection from "./components/TeachingSection";
import Button from "./components/button/button";

function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <TeachingSection />
          <section>
            <h3>Why?</h3>
            <Button
              isActive={contentType === "way"}
              onClick={() => handleClick("way")}
            >
              Подтвердить
            </Button>
            <Button>Подход</Button>
            <Button
              isActive={contentType === "easy"}
              onClick={() => handleClick("easy")}
            >
              Подтвердить
            </Button>
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
