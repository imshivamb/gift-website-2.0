"use client";

import { useSearchParams } from "next/navigation";
import { Product } from "@/types/types";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ui/product-card";
import { url } from "inspector";
import { NextResponse } from "next/server";
import useSWR from "swr";

// const fetchSearchProducts = async (url: string) => {
//   const products = await fetch(url);

//   if (!products.ok) {
//     return new NextResponse("Failed to fetch products", { status: 500 });
//   }

//   return products.json();
// };

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  // const { data, isLoading } = useSWR(
  //   `/search?query=${encodedSearchQuery}`,
  //   fetchSearchProducts
  // );
  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))} */}
      </div>
    </div>
  );
};

export default SearchPage;
