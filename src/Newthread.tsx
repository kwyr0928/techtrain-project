import { useNavigate } from "react-router-dom"; // ページ遷移用

function Newthread() {
  const navigate = useNavigate();
  const handleApp = () => {
    navigate("/"); // Top画面に戻る
  };

  return (
    <div className="comp-Newthread">
      <h2>スレッド新規作成</h2>
      <form>
        <input type="text" name="create" placeholder="スレッドタイトル" />
        <div className="btn">
          <a href="" onClick={handleApp}>
            Topに戻る
          </a>
          <button>作成</button>
        </div>
      </form>
    </div>
  );
}

export default Newthread;
