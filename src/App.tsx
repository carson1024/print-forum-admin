import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "layouts";
import LoginPage from "views/login";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/admin/*" element={<MainLayout />} />
    </Routes>
  );
};

export default App;
