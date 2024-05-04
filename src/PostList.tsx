import axios, { AxiosResponse } from "axios"; // API取得
import { useEffect, useRef, useState } from "react"; // hooks

type PostProps = {
  id: string;
  title: string;
};

type Post = {
  threadId: string;
  posts: Pos[];
};

type Pos = {
  id: string;
  post: string;
};

function PostList({ id, title }: PostProps) {
  const [postList, setPostList] = useState<Post>({ threadId: "", posts: [] });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAdd = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault(); // form送信によるリロードをキャンセル
    const newPostText = textareaRef.current?.value;
    if (!newPostText) return; // テキストが空の場合は処理しない
    axios
      .post(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`, {
       post: newPostText,
      }) // POSTリクエスト
      .then((response: AxiosResponse<Post>) => {
        console.log(response.data)
        axios
        .get(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`)
        .then((response: AxiosResponse<Post>) => {
          setPostList(response.data);
        })
        .catch((error) => {
          console.log("fetchエラー" + error);
        });
        if (textareaRef.current) {
          textareaRef.current.value = "";
        }
    })
    
      .catch((error) => {
        console.log("fetchエラー" + error);
      });
      
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
      <h2 className="thread-title">{title}</h2>
      <div className="post-container">
        <div className="comp-PostList">
          {postList.posts.map((pos, index) => {
            console.log(postList);
            return <p key={index}>{pos.post}</p>;
          })}
        </div>
        <div className="comp-Submit">
          <form>
            <textarea ref={textareaRef} placeholder="投稿しよう！"></textarea>
            <button onClick={handleAdd}>投稿</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostList;
