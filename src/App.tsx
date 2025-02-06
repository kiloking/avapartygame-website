import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import UpdateAmount from "./components/UpdateAmount";

function App() {
  return (
    <BrowserRouter>
      <nav className="fixed bottom-0 left-0 w-full ">
        <Link to="/">首頁</Link> |<Link to="/update">更新金額</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/update" element={<UpdateAmount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
