// ルーティングの設定
import { Route, Routes } from "react-router-dom";
import New from "./New";
import Post from "./Post";
import Top from "./Top";

export const AppRoutes = () => {
  return (
    // 最初にマッチするものが表示される
    <Routes>
      {/* スレッド一覧画面 */}
      <Route path="/" element={<Top />} />
      {/* スレッド新規作成画面 */}
      <Route path="/thread/new" element={<New />} />
      {/* 投稿一覧画面 */}
      <Route path="/thread/:id" element={<Post />} />
    </Routes>
  );
};

export default AppRoutes;
