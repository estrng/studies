import { UserContext } from "./user.context";

export function UserContextConsumer({ children }: any) {
  return (
    <UserContext.Consumer>
      {context => {
        if (context === undefined)
          throw new Error('CartConsumer must be used within a CartProvider');
        return children(context)
      }}
    </UserContext.Consumer>
  )
}