//投稿一覧画面
import { useLocation } from "react-router-dom"; // ページ遷移用
import "./App.css";
import Header from "./Header";
import PostList from "./PostList";

function Post() {
  const location = useLocation(); // navigateの引数を取得
  const { threadId, threadTitle } = location.state as {
    threadId: string;
    threadTitle: string;
  };

  return (
    <div>
      <Header />
      <main>
        <PostList id={threadId} title={threadTitle} />
      </main>
    </div>
  );
}

export default Post;
