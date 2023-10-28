"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useWishlist from "@/hooks/use-wishlist";
import { Product } from "@/types/types";
import Button from "@/components/ui/button";
import Link from "next/link";

interface WishlistItemProps {
  data: Product;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ data }) => {
  const wishlist = useWishlist();

  const onRemove = () => {
    wishlist.removeItem(data.id);
    toast.success("Item removed from wishlist");
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-center object-cover"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:pr-0 gap-y-2">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div>
            <Currency value={data.price} />
          </div>
          <div className="m-1 flex text-sm">
            <Button className="bg-blue-800 rounded-md px-3 py-2 hover:scale-105">
              <Link href={data.affiliateLink} target="_blank">
                Check it out
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex pb-10 sm:pb-16 item-center">
          <p className="px-4 pt-2 font-medium text=lg">{data.description}</p>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
