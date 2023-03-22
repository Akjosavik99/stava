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

const useValidateAdminQuery = (id: string) => {
  return useQuery(["validateAdmin"], async () => {
    return await axios
      .get("http://localhost:3001/api/user/admin", {
        params: { groupID: id },
      })
      .then((res) => {
        return res.data.message;
      });
  });
};

export const admin = (id: string) => {
  const { data: isAdmin, isLoading } = useValidateAdminQuery(id);

  return { valid: isAdmin === "Admin", isLoading };
};

export const auth = () => {
  const { data: isAuthenticated, isLoading } = useValidateUserQuery();

  return { valid: isAuthenticated === "Autorisert :)", isLoading };
};
