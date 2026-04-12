import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { ways, differences } from "./data";
import { WayToTeach } from "./components/WayToTeach";
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
          <section>
            <h1>Hello React</h1>
            <ul>
              <WayToTeach
                title={ways[0].title}
                description={ways[0].description}
              />
              <WayToTeach {...ways[1]} />
            </ul>
          </section>
          <section>
            <h3>Why?</h3>
            <Button onClick={() => handleClick('way')}>Подтвердить</Button>
            <Button>Подход</Button>
            <Button onClick={() => handleClick('easy')}>
              Подтвердить
            </Button>
            {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>}
            
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
