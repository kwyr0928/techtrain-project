// ヘッダー
import { useNavigate } from "react-router-dom"; // ページ遷移用

function Header() {
  const navigate = useNavigate();
  const handleNew = () => {
    navigate("/thread/new"); // スレッド新規作成画面に移動
  };

  return (
    <div className="comp-Header">
      <header>
        <h1>掲示板</h1>
        <a href="" onClick={handleNew}>
          スレッドをたてる
        </a>
      </header>
    </div>
  );
}

export default Header;
