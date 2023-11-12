"use client";
import { useEffect, useState } from "react";

import Select from "./Select";
import { Search } from "@/app/assets/icons/Search";

const options = [
  { id: "01", label: "Release date", value: "release" },
  { id: "02", label: "Alphabetical", value: "alphabetical" },
];

export default function GameListActoins({
  handleSearchInput,
  handleSortChange,
}: {
  handleSearchInput: (value: string) => void;
  handleSortChange: (value: string) => void;
}) {
  const [sortBy, setSortBy] = useState(options[0] || {});

  function handleChange(value: string) {
    handleSearchInput(value);
  }

  useEffect(() => {
    handleSortChange(sortBy.value);

    return () => {
      handleSortChange(sortBy.value);
    };
  }, [sortBy]);

  function changeActiveOption(id: string) {
    const newOption = options.find((option) => option.id === id);
    if (newOption) {
      setSortBy(newOption);
    }
  }

  return (
    <div className="w-full flex justify-start items-center gap-4 my-4">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search by titles of games
        </label>
        <Search className="absolute top-4 left-4 text-slate-500" />
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => handleChange(e.target.value)}
          className="py-3 px-4 ps-12 block w-96 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search titles"
        />
      </div>

      <div className="ms-auto relative flex justify-start items-center gap-4">
        <label htmlFor="sort">Sort by :</label>
        <Select
          label={sortBy.label}
          options={options}
          handleActiveOption={(id) => changeActiveOption(id)}
        />
      </div>
    </div>
  );
}
