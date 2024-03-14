import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CurrentOrderModel {
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  order: CurrentOrderModel[];
  itemsTotal: number;
  priceTotal: number;
  orderNumber: string;
  resetLatestCart: () => void;
  setOrderNumber: (orderNumber: string) => void;
  addToCartStore: (name: string, price: number) => void;
  deleteFromCartStore: (name: string, price: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      order: [],
      itemsTotal: 0,
      priceTotal: 0,
      orderNumber: "",

      resetLatestCart: () => set({ order: [], itemsTotal: 0, priceTotal: 0 }),

      setOrderNumber: (orderNumber) => set({ orderNumber }),
      addToCartStore: (name, price) =>
        set((state) => {
          const updatedOrder = [...state.order];
          const existingItem = updatedOrder.findIndex(
            (item) => item.name === name
          );

          if (existingItem !== -1) {
            updatedOrder[existingItem].quantity += 1;
          } else {
            updatedOrder.push({ name, price, quantity: 1 });
          }

          return {
            ...state,
            order: updatedOrder,
            itemsTotal: state.itemsTotal + 1,
            priceTotal: state.priceTotal + price,
          };
        }),
      deleteFromCartStore: (name, price) =>
        set((state) => {
          const updatedOrder = [...state.order];
          const existingItem = updatedOrder.findIndex(
            (item) => item.name === name
          );

          if (updatedOrder[existingItem].quantity > 1) {
            updatedOrder[existingItem].quantity -= 1;
          } else {
            updatedOrder.splice(existingItem, 1);
          }
          return {
            ...state,
            order: updatedOrder,
            itemsTotal: state.itemsTotal - 1,
            priceTotal: state.priceTotal - price,
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
