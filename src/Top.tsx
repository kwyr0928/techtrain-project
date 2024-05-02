import "./App.css";
import Header from "./Header";
import ThreadList from "./ThreadList";

function Top() {
  return (
    <div>
      <Header />
      <main>
        <ThreadList />
      </main>
    </div>
  );
}

export default Top;
