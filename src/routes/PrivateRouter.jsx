import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRouter({ children }) {
  const { state } = useAuth();
  const location = useLocation();

  if (state?.loading) return <p>Loading...</p>;
  if (state?.user) return children;

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
