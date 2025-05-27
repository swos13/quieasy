import { useEffect, useState } from "react";
import { getSessionItem, setSessionItem } from "../storage";
import { getToken } from "../api";

const useToken = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const token = getSessionItem("token");
    if (token) {
      setToken(token);
      setIsLoading(false);
    } else {
      getToken()
        .then((res) => {
          setToken(res);
          setSessionItem("token", res);
        })
        .catch((error) => console.log("Error while getting token: ", error))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { token, isLoading };
};

export default useToken;
