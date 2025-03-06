import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import { Navigate } from "react-router-dom";
import Notes from "./pages/notes";
import Projects from "./pages/projects";
import Layout from "./components/Layout";

const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem("access_token");
  return token ? element : <Navigate to="/" replace />;
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<ProtectedRoute element={<Notes collapsed={collapsed} handleCollapse={handleCollapse} />} />} />
        <Route
          path="/projects"
          element={<ProtectedRoute element={<Projects collapsed={collapsed} handleCollapse={handleCollapse} />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
