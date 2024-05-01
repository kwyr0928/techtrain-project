import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Thread = {
  id: string;
  title: string;
};

type PostProps = {
  selectId: Thread; // selectIdプロパティを追加
};

type Post = {
  threadId: string;
  postpost: string[];
};

function Posts({ selectId }: PostProps) {
  const [postsss, setPostsss] = useState<Post>({ threadId: "", postpost: [] });

const handleAdd = () => {
 // ここを実装してください
}

  useEffect(() => {
    // GETリクエスト
    axios
      .get(
        `https://railway.bulletinboard.techtrain.dev/threads/${selectId.id}/posts`
      )
      // 通信が成功したときに返ってくる
      .then((response: AxiosResponse<Post>) => {
        setPostsss(response.data);
      })
      // 通信が失敗したときに返ってくる
      .catch((error) => {
        console.log("fetchエラー" + error);
      });
  }, [selectId]);

  return (
    <div>
      <div className="comp-Posts">
        <h2>{selectId.title}</h2>
        <p>{postsss.postpost}</p>
      </div>
      <div className="comp-Submit">
        <form>
          <textarea placeholder="投稿しよう！"></textarea>
          <button onClick={ handleAdd }>投稿</button>
        </form>
      </div>
    </div>
  );
}

export default Posts;
