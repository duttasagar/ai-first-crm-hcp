import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import LogInteraction from "../pages/LogInteraction/LogInteraction";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/interaction" element={<LogInteraction />} />
      </Routes>
    </Layout>
  );
}