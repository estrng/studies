import { useReducer } from "react";
import { CartReducer } from "../../reducers/Cart/reducer";
import { v4 as uuidv4 } from 'uuid';
import { addToCart, emptyCart, updateCart, removeFromCart } from "../../reducers/Cart/actions";
import { SelectedItem } from "../../@types/Operation";
import { CartContext } from "../Cart/hooks/useCartContext";

interface Props {
  children: React.ReactNode;
}

export function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, { id: uuidv4(), items: [] });

  function addToCartAction(product: SelectedItem) {
    dispatchCartAction(addToCart(product));
  }

  function removeFromCartAction(operation_id: string) {
    dispatchCartAction(removeFromCart(operation_id));
  }

  function updateCartAction(product: SelectedItem) {
    dispatchCartAction(updateCart(product));
  }

  function clearCartAction() {
    dispatchCartAction(emptyCart());
  }

  return (
    <CartContext.Provider value={
      {
        cartState,
        addToCartAction,
        removeFromCartAction,
        updateCartAction,
        clearCartAction
      }
    }
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.displayName = "CartProvider";