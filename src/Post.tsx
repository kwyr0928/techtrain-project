import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Posts from "./Posts";

type Thread = {
  selectId: Thread;
  id: string;
  title: string;
};

function Post() {
  const location = useLocation();
  const initialState = location.state as { thread: Thread };
  const [selectId, setSelectId] = useState<Thread>(initialState.thread);

  return (
    <div>
      <Header />
      <main>
        <Posts selectId={ selectId } />
      </main>
      <footer></footer>
    </div>
  );
}

export default Post;
