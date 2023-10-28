"use client";

import Container from "@/components/ui/container";
import useWishlist from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";
import WishlistItem from "./components/wishlist-item";

const WishlistPage = () => {
  const wishlist = useWishlist();
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!ismounted) {
    return null;
  }

  return (
    <div className="bg-white ">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-center font-bold text-black ">
            Wishlist
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-1 max-w-6xl lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {wishlist.items.length === 0 && (
                <p className="text-neutral-600">No items in Wishlist</p>
              )}
              <ul>
                {wishlist.items.map((item) => (
                  <WishlistItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishlistPage;
