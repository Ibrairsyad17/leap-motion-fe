import { CartItem, Extra, Menu } from "@/interfaces";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Menu>) => {
      const existingItem = state.cartItems.find(
        (item) => item.menu.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ menu: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<Menu>) => {
      const existingItem = state.cartItems.find(
        (item) => item.menu.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.menu.id !== action.payload.id
          );
        }
      }
    },
    deleteFromCart: (state, action: PayloadAction<Menu>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.menu.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    updateExtrasInCartItem: (state, action: PayloadAction<Menu>) => {
      const existingItem = state.cartItems.find(
        (item) => item.menu.id === action.payload.id
      );
      if (existingItem) {
        existingItem.menu.extras = action.payload.extras;
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;
export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((acc: number, item: CartItem) => acc + item.quantity, 0)
);

export const totalCartPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.quantity * item.menu.price,
    0
  )
);

export const menuQuantitySelector = createSelector(
  [cartItems, (cartItems, menuId: number) => menuId],
  (cartItems, menuId) =>
    cartItems.find((item) => item.menu.id === menuId)?.quantity
);

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  resetCart,
  updateExtrasInCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
