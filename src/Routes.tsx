import { Route, Routes } from "react-router-dom";
import App from "./App";
import New from "./New";

export const AppRoutes = () => {
    return (
<Routes>
    <Route path = "/" element={<App />} />
    <Route path = "/thread/new" element={<New />} />
</Routes>
    )
}