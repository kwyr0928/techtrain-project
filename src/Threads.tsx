import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Thread = {
    id: string;
    title: string;
  };

function Threads () {
const [threads, setThreads] = useState<string[]>([]);
//   useEffect(() => {
//     fetch("https://railway.bulletinboard.techtrain.dev/threads")
//       .then((res) => res.json())
//       .then((data: Thread[]) => {
//         setThreads(data.map((thread) => thread.title));
//       })
//       .catch((error) => {
//         console.log("fetchエラー" + error);
//       });
//     console.log("threads:", threads);
//   }, []);

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
      const data: Thread[] = response.data;
      setThreads(data.map((thread) => thread.title));
    })
    // 通信が失敗したときに返ってくる
    .catch((error) => {
      console.log("fetchエラー" + error);
    });
}, []);

return (
    <div>
    <table>
        {threads.map((thread, index) => (
          <p key={index}>{thread}</p>
        ))}
    </table>
    </div>
  );
}

export default Threads;
