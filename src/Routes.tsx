import { Route, Routes } from "react-router-dom";
import New from "./New";
import Post from "./Post";
import Top from "./Top";

export const AppRoutes = () => {
  return (
    // 最初にマッチするものが表示される
    <Routes>
      <Route path="/thread/new" element={<New />} />
      <Route path="/thread/:id" element={<Post />} />
      <Route path="/" element={<Top />} />
    </Routes>
  );
};
