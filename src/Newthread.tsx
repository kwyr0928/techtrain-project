import { useNavigate } from "react-router-dom";

function Newthread() {
  const navigate = useNavigate();
  const handleApp = () => {
    navigate("/");
  };
  return (
    <div className="comp-Newthread">
      <h2>スレッド新規作成</h2>
      <form>
        <input type="text" name="create" placeholder="スレッドタイトル" />
      </form>
     <div className="btn">
         <a href="" onClick={handleApp}>
           Topに戻る
         </a>
         <button>作成</button>
     </div>
    </div>
  );
}

export default Newthread;
