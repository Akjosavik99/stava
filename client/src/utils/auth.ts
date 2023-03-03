import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useValidateUserQuery = () => {
  return useQuery(["validateUser"], async () => {
    return await axios
      .get("http://localhost:3001/api/user/auth")
      .then((res) => {
        return res.data.message;
      });
  });
};

export const auth = () => {
  const { data: isAuthenticated } = useValidateUserQuery();

  return { invalid: isAuthenticated === "Ikke Autorisert :(" };
};
