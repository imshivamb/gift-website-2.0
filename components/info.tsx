"use client";

import { Product } from "@/types/types";
import Currency from "./ui/currency";
import Link from "next/link";
import Button from "./ui/button";
import { Heart } from "lucide-react";
import { MouseEventHandler } from "react";
import useWishlist from "@/hooks/use-wishlist";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const wishlist = useWishlist();
  function addToWishlist() {
    wishlist.addItem(data);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between text-xl text-gray-900">
        <Currency value={data.price} />
      </div>
      <hr className="my-4 " />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">{data.description}</h3>
        </div>
        <div className="flex flex-row gap-x-5">
          <div>
            <Link href={data.affiliateLink} target="_blank">
              <Button className="mt-6 rounded-md px-3 py-2 bg-blue-800 hover:scale-105">
                Check it out
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-x-3">
            <Button
              onClick={addToWishlist}
              className="bg-gray-600 text-white flex items-center gap-x-2 rounded-md px-3 py-2 hover:scale-105"
            >
              Wishlist
              <Heart color="red" fill="red" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
