"use client";
import { Search } from "@/app/assets/icons/Search";
import { AngleDown } from "../assets/icons/AngleDown";
import { useState } from "react";

export default function GameListActoins({
  handleSearchInput,
}: {
  handleSearchInput: (value: string) => void;
}) {
  function handleChange(value: string) {
    handleSearchInput(value);
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
      {/* <div className="relative">
        <div className="absolute inset-y-2 right-1 input-background flex justify-center items-center pr-1">
          <AngleDown className="text-2xl mt-1" />
        </div>
        <label htmlFor="genres" className="sr-only">
          Search by titles of games
        </label>
        <select
          id="genres"
          name="genres"
          title="genres"
          className="py-3 px-4 pe-8 w-36 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        >
          <option selected>Genres</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div> */}
      <div className="ms-auto relative flex justify-start items-center gap-4">
        <div className="absolute inset-y-2 right-1 input-background flex justify-center items-center pr-1">
          <AngleDown className="text-2xl mt-1" />
        </div>
        <label htmlFor="sort">Sort by :</label>
        <select
          id="sort"
          name="sort"
          title="sortBy"
          className="py-3 px-4 pe-8 w-48 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        >
          <option selected>Release date</option>
          <option>Alphabetical</option>
        </select>
      </div>
    </div>
  );
}
