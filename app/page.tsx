"use client";

import { useEffect, useState } from "react";

import supabase from "@/configs/supabaseClient";
import type { Game } from "@/types/supabase.types";

import PageHero from "@/app/components/PageHero";
import GameList from "@/app/components/GameList";
import GameListLoading from "@/app/components/GameListLoading";
import GameListActoins from "@/app/components/GameListActoins";

export default function Home() {
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [fetchedGames, setFetchedGames] = useState<Game[]>([]);
  const [currentGames, setCurrentGames] = useState<Game[]>([]);

  async function getGames() {
    const { data: fetchedGames } = await supabase
      .from("games")
      .select("*")
      .order("released", { ascending: false });

    setFetchedGames(fetchedGames || []);
  }

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    setCurrentGames(fetchedGames.filter((game) => game.played));
    setFetchLoading(false);
  }, [fetchedGames]);

  function filterBySearch(search: string) {
    if (search.length === 0) {
      setCurrentGames(fetchedGames.filter((game) => game.played));
    } else {
      setCurrentGames(
        fetchedGames.filter(
          (game) =>
            game.name.toLowerCase().includes(search.toLowerCase()) &&
            game.played
        )
      );
    }
  }

  function sortBy(sort: string) {
    if (sort === "alphabetical") {
      setCurrentGames(
        [...currentGames].sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        })
      );
    } else if (sort === "release") {
      setCurrentGames(
        [...currentGames].sort((a, b) => {
          if (a.released < b.released) return 1;
          if (a.released > b.released) return -1;
          return 0;
        })
      );
    }
  }

  return (
    <>
      <PageHero
        title="My top 100 recommend video games"
        srOnly="parallel universe archive || My top 100 recommend video games"
        description="I have been lucky enough to explore numerous virtual worlds, where I&lsquo;ve had the opportunity to experience living in parallel universes that are full of unique and captivating life experiences. In this list, I present my top 100 recommendations for you to explore and indulge in these captivating realms."
      />
      {fetchLoading ? (
        <div className="w-full flex justify-center items-center">
          <GameListLoading />
        </div>
      ) : (
        <>
          <GameListActoins
            handleSearchInput={(searchValue) => filterBySearch(searchValue)}
            handleSortChange={(sortValue) => sortBy(sortValue)}
          />
          <GameList games={currentGames} />
        </>
      )}
    </>
  );
}
