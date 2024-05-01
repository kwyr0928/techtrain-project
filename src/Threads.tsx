import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Thread = {
  id: string;
  title: string;
};

function Threads() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const navigate = useNavigate();
  const handlePost = (thread: Thread) => {
    navigate(`/thread/${thread.id}`, { state: { thread: thread } });
  };
  useEffect(() => {
    // GETリクエスト
    axios
      .get("https://railway.bulletinboard.techtrain.dev/threads", {
        params: {
          name: "title",
        },
      })
      // 通信が成功したときに返ってくる
      .then((response: AxiosResponse<Thread[]>) => {
        setThreads(response.data);
      })
      // 通信が失敗したときに返ってくる
      .catch((error) => {
        console.log("fetchエラー" + error);
      });
  }, []);

  return (
    <div className="comp-Threads">
      <h2>新着スレッド</h2>
      {threads.map((thread, index) => (
        <p onClick={() => handlePost(thread)} key={index}>
          {thread.title}
        </p>
      ))}
    </div>
  );
}

export default Threads;
