import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import Loading from "../../shared/Loading";

export const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return admin && user.email ? (
    children
  ) : (
    <Navigate replace to="/dashboard" state={{ from: location }} />
  );
};
