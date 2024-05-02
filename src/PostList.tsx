import axios, { AxiosResponse } from "axios"; // API取得
import { useEffect, useState } from "react"; // hooks

type PostProps = {
  id: string;
  title: string;
};

type Post = {
  threadId: string;
  posts: string[];
};

function PostList({ id, title }: PostProps) {
  const [postList, setPostList] = useState<Post>({ threadId: "", posts: [] });

  const handleAdd = () => {
  };

  useEffect(() => {
    axios
      .get(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`) // GETリクエスト
      .then((response: AxiosResponse<Post>) => {
        setPostList(response.data); // Postを格納
      })
      .catch((error) => {
        console.log("fetchエラー" + error);
      });
  }, [id]);

  return (
    <div>
      <div className="comp-PostList">
        <h2>{title}</h2>
        <p>{postList.threadId}</p>
      </div>
      <div className="comp-Submit">
        <form>
          <textarea placeholder="投稿しよう！"></textarea>
          <button onClick={handleAdd}>投稿</button>
        </form>
      </div>
    </div>
  );
}

export default PostList;
