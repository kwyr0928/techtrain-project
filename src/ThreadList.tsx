// スレッド一覧を表示
import axios, { AxiosResponse } from "axios"; // API取得
import { useEffect, useState } from "react"; // hooks
import { Link } from "react-router-dom"; // ページ遷移用

type Thread = {
  // json
  id: string;
  title: string;
};

function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);
  // 以下、Linkに変更済のため不要
  // const navigate = useNavigate();
  // const handlePost = (thread: Thread) => {
  //   navigate(`/thread/${thread.id}`, {
  //     state: { threadId: thread.id, threadTitle: thread.title },
  //   }); // スレッド内の投稿一覧ページに遷移 stateでthread引数を設定
  // };
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
          thread // thread: Thread // Link key={thread.id} 第二引数消す(済)
        ) => (
          <Link
            to={`/thread/${thread.id}`}
            state={{ threadId: thread.id, threadTitle: thread.title }}
            key={thread.id}
          >
            <p>{thread.title}</p>
          </Link>
        )
      )}
    </div>
  );
}

export default ThreadList;
