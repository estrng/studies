import { State } from "../../types/useComplexState.types";

export interface IUser {
  name: string,
  age: number
}

export interface  IErrorWantedShape {
  message: string
}

export interface IUserContextProps {
  user: State<IUser, IErrorWantedShape>
  setUserAction: (user: IUser) => void;
}