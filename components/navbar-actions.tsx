"use client";

import { Heart, Search } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useWishlist from "@/hooks/use-wishlist";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import SearchInput from "./search-input";

const NavbarActions = () => {
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const handleClick = () => {
    router.push("/wishlist");
  };
  const wishlist = useWishlist();

  if (!ismounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <div className="hidden md:block">
        <SearchInput />
      </div>

      <Button className="flex items-center rounded-xl bg-[#483cf4] px-2 py-2 md:px-4 md:py-3">
        <Heart size={20} color="red" fill="red" onClick={handleClick} />
        <span className="ml-2 text-[16px] font-medium text-white">
          {wishlist.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
