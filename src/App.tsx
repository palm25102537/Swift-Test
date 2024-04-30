import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/Form";
import ShapePage from "./pages/Shape";
import HomePage from "./pages/Home";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<AppRoutes />}>
            <Route path="" element={<HomePage />}></Route>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="/shape" element={<ShapePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
