import axios, { AxiosResponse } from "axios"; // API取得
import { useEffect, useState } from "react"; // hooks
import { useNavigate } from "react-router-dom"; // ページ遷移用

type Thread = {
  // json
  id: string;
  title: string;
};

function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const navigate = useNavigate();
  const handlePost = (thread: Thread) => {
    navigate(`/thread/${thread.id}`, { state: { threadId: thread.id, threadTitle: thread.title } }); // スレッドページ stateでthread引数を設定
  };
  useEffect(() => {
    axios
      .get("https://railway.bulletinboard.techtrain.dev/threads", {
        // GETリクエスト
      })
      .then((response: AxiosResponse<Thread[]>) => {
        setThreads(response.data); // データを格納 Thread[]
      })
      .catch((error) => {
        console.log("fetchエラー" + error);
      });
  }, []);

  return (
    <div className="comp-ThreadList">
      <h2>新着スレッド</h2>
      {threads.map(
        (
          thread,
          index // thread: Thread
        ) => (
          <p onClick={() => handlePost(thread)} key={index}>
            {thread.title}
          </p>
        )
      )}
    </div>
  );
}

export default ThreadList;
