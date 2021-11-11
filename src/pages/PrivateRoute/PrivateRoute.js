import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import Loading from "../../shared/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return user.email ? (
    children
  ) : (
    <Navigate replace to="/signin" state={{ from: location }} />
  );
  // return user.email ? (
  //   children
  // ) : (
  //   <Navigate replace to="/signin" state={{ path }} />
  // );

  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user.email ? (
  //         children
  //       ) : (
  //         <Navigate
  //           to={{
  //             pathname: "/signin",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};

export default PrivateRoute;
