"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, Heart } from "lucide-react";
import Currency from "./currency";
import Button from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useWishlist from "@/hooks/use-wishlist";
import toast from "react-hot-toast";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const wishlist = useWishlist();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToWishlist: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    wishlist.addItem(data);
    toast.success("Item added to wishlist");
  };
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          onClick={handleClick}
          alt="Image"
          src={data?.images?.[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-auto  top-4 right-4">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToWishlist}
              icon={
                <Heart
                  size={20}
                  fill="red"
                  color="red"
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div onClick={handleClick}>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-[13px] text-gray-700">{data.description}</p>
      </div>
      {/* Price and Button */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
        <Button className="py-2 px-3 rounded-md bg-blue-800">
          <Link href={data.affiliateLink} target="_blank">
            Check it out
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
