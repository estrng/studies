import { CartState } from "../../@types/Cart";
import { CartActionTypes } from "./actions";
import { produce } from 'immer';

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.items.push(action.payload);
      });
    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, ({ items }) => {
        items.splice(items.findIndex(item => item.operation_id === action.payload), 1);
      });
    case CartActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        const indexToBeUpdated = draft.items.findIndex(
          (item) => item.operation_id === action.payload.operation_id
        );
        draft.items[indexToBeUpdated] = action.payload;
      });
    case CartActionTypes.EMPTY_CART:
      return {
        id: state.id,
        items: []
      };
    default:
      return state;
  }
}