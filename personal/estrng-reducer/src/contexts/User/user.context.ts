import { createContext } from "react";
import { IUserContextProps } from "./userContext.types";

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)