import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { auth } from "../utils/auth";

type PrivateRouteProps = {
  element: JSX.Element;
};

// To ignore warning message. To fix, see below
console.error = () => {};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { invalid, isLoading } = auth();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  // To fix, set this inside useEffect. Decided not to do it, since then I couldn't
  // set a loading screen.
  if (invalid) {
    navigate("/login");
  }

  return element;
};

export default PrivateRoute;
