"use client";
import React, { useState } from "react";

export default function SearchBar({ getSearchResults }: any) {
  const [query, setQuery] = useState<string>("");
  const onSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`/api/search?query=${query}`);
    const search = await response.json();
    getSearchResults(search);
  };
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search character, house"
        className="p-1.5 focus:outline-none focus:border-neutral-700/80 dark:focus:border-neutral-500/80 border rounded-md border-neutral-500/50 dark:border-neutral-800/80 tranition ease-in-out duration-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="p-1.5 ml-2 font-medium text-white bg-black rounded-md dark:text-black dark:bg-white text-md hover:bg-black/50 dark:hover:bg-white/80 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}
