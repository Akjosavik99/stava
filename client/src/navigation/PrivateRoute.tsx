import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";

type PrivateRouteProps = {
  element: JSX.Element;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { invalid } = auth();
  const navigate = useNavigate();

  useEffect(() => {
    if (invalid) {
      navigate("/login");
    }
  }, [invalid, navigate]);
  return element;
};

export default PrivateRoute;
