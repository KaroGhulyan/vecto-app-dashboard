import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminUpdate from "../../pages/AdminUpdate";
import { Dashboard } from "../init";

export const AppRoutes: React.FC = () => (
  <Routes>
    <>
      <Route path="/admin/:id/edit" element={<AdminUpdate />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </>
  </Routes>
);
