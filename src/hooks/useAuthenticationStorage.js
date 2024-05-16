import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthenticationStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthenticationStorage;
