import "./App.css";
import Header from "./components/Header";
import { ways } from "./data";
import { WayToTeach } from "./components/WayToTeach";
import Button from "./components/button/button";


function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section>
            <h1>Hello React</h1>
            <ul>
              <WayToTeach title={ways[0].title} description={ways[0].description} />
              <WayToTeach { ...ways[1]} />
            </ul>
          </section>
          <section>
            <h3>Why?</h3>
            <Button />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
