import { SelectedItem } from "../../@types/Operation";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART = "UPDATE_CART",
  EMPTY_CART = "EMPTY_CART"

}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: SelectedItem;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: string;
}

export interface UpdateCartAction {
  type: CartActionTypes.UPDATE_CART;
  payload: SelectedItem;
}

export interface EmptyCartAction {
  type: CartActionTypes.EMPTY_CART;
}

export type CartAction = AddToCartAction | RemoveFromCartAction | UpdateCartAction | EmptyCartAction;

export const addToCart = (operation: SelectedItem): AddToCartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: operation
});

export const removeFromCart = (operation_id: string): RemoveFromCartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: operation_id
});

export const updateCart = (operation: SelectedItem): UpdateCartAction => ({
  type: CartActionTypes.UPDATE_CART,
  payload: operation
});

export const emptyCart = (): EmptyCartAction => ({
  type: CartActionTypes.EMPTY_CART
});