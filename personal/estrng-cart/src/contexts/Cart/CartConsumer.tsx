import { CartContext } from "../Cart/hooks/useCartContext";

export function CartConsumer({ children }: any) {
  return (
    <CartContext.Consumer>
      {context => {
        if (context === undefined)
          throw new Error('CartConsumer must be used within a CartProvider');
        return children(context)
      }}
    </CartContext.Consumer>
  )
}