import "./App.css";
import Threads from "./Threads";

function App() {
  return (
    <div>
      <header>
        <h1>掲示板</h1>
        <a href="#">スレッドをたてる</a>
      </header>
      <main>
      <div className="threads">
          <h2>新着スレッド</h2>
          <Threads />
      </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
