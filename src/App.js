import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Login from "./pages/auth/Login";
import Default from "./pages/Default";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/default" element={<Default />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
