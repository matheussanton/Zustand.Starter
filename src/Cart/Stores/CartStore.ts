import {create} from 'zustand';

type Item = {
    id: string;
    name: string;
    price: number;
};

type CartState = {
  availableItems: Item[];
  items: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  availableItems: [
    { id: '1', name: 'Apple', price: 5 },
    { id: '2', name: 'Banana', price: 3 },
    { id: '3', name: 'Cherry', price: 7 },
  ],
  items: [],
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeFromCart: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
}));

