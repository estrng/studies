import { useContext, createContext, useReducer } from "react";
import { CartState } from "../../../@types/Cart";
import { SelectedItem } from "../../../@types/Operation";

export interface CartContextProps {
  cartState: CartState;
  addToCartAction: (product: any) => void;
  removeFromCartAction: (product: any) => void;
  updateCartAction: (product: SelectedItem) => void;
  clearCartAction: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);