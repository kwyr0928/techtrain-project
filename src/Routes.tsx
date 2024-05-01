import { Route, Routes } from "react-router-dom";
import App from "./App";
import New from "./New";
import Post from "./Post";

export const AppRoutes = () => {
  return (
    // 最初にマッチするものが表示される
    <Routes>
      <Route path="/thread/new" element={<New />} />
      <Route path="/thread/:id" element={<Post />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};
