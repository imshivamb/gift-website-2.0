import { Product } from "@/types/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface SearchQuery {
  query: string;
}

const searchProducts = async (query: SearchQuery): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${URL}/search`, // Update the API endpoint for searching
    query: {
      query: query.query, // Pass the search query in the URL
    },
  });

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default searchProducts;
