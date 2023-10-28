import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types/types";
import toast from "react-hot-toast/headless";

interface WishlistProps {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useWishlist = create(
  persist<WishlistProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in Wishlist");
        }

        set({ items: [...get().items, data] });
        toast.success("Item saved in Wishlist");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from Wishlist");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "wishlist",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useWishlist;
