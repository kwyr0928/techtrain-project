import axios, { AxiosResponse } from "axios"; // API取得
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ページ遷移用

function Newthread() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleApp = () => {
    navigate("/"); // Top画面に戻る
  };

  type Thread = {
    // json
    id: string;
    title: string;
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

function handleAdd() {
  axios
  .post(`https://railway.bulletinboard.techtrain.dev/threads`, {
   title: name,
  }) // POSTリクエスト
  .then((response: AxiosResponse<Thread>) => {
    console.log(response.data)
})
.catch((error) => {
  console.log("fetchエラー" + error);
});}

  return (
    <div className="comp-Newthread">
      <h2>スレッド新規作成</h2>
      <form>
        <input onChange={handleChangeName} type="text" name="create" placeholder="スレッドタイトル" />
        <div className="btn">
          <a href="" onClick={handleApp}>
            Topに戻る
          </a>
          <button onClick={handleAdd}>作成</button>
        </div>
      </form>
    </div>
  );
}

export default Newthread;
