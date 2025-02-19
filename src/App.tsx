import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "layouts";
import LoginPage from "views/login";
import { SidebarProvider } from "components/navbar/provider";

const App = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/admin/*" element={<MainLayout />} />
      </Routes>
    </SidebarProvider>
  );
};

export default App;
