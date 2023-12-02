"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }

  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1 end-2 rounded bg-color-accent px-3 py-1" onClick={handleSearch}>
        <MagnifyingGlass className="text-color-primary" size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
