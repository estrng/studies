import { useContext } from "react";
import { UserContext } from "../contexts/User/user.context";

export const useUserContext = () => useContext(UserContext);
