"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import Button from "./ui/button";

const SearchInput = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [query] = useDebounce(searchQuery, 500);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    if (query) {
      router.push(`/search?query=${query}`);
    } else {
      router.push("/");
    }
    console.log("query:", encodedSearchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={onSearch}>
      <div className="flex flex-row items-center mx-4 ">
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          type="submit"
          className="rounded-md py-2 px-2 ml-2 bg-[#050dfc]"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
