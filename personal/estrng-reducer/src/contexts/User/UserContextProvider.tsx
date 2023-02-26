import React, { PropsWithChildren } from 'react';
import { useComplexState } from '../../hooks/useComplexState';
import { UserContext } from './user.context';
import { IErrorWantedShape, IUser } from './userContext.types';

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, dispatch] = useComplexState<IUser, IErrorWantedShape>({
    name: 'JOSÉ IVAN do passado',
    age: 20
  })

  function setUserAction(data: IUser) {
    dispatch({
      type: "DRAFT_DATA",
      data: data
    })
  }

  return <UserContext.Provider value={{ user, setUserAction}}>
    {children}
  </UserContext.Provider>

}

UserContext.displayName = 'userContext'
