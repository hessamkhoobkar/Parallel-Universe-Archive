"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import supabase from "@/configs/supabaseClient";
import type { Game } from "@/types/supabase.types";

import PageHero from "@/app/components/PageHero";
import GameList from "@/app/components/GameList";
import GameListLoading from "@/app/components/GameListLoading";
import GameListActoins from "@/app/components/GameListActoins";
import Modal from "../components/Modal";

export default function QueuePage() {
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [fetchedGames, setFetchedGames] = useState<Game[]>([]);
  const [currentGames, setCurrentGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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
    setCurrentGames(fetchedGames.filter((game) => !game.played));
    setFetchLoading(false);
  }, [fetchedGames]);

  function filterBySearch(search: string) {
    if (search.length === 0) {
      setCurrentGames(fetchedGames.filter((game) => !game.played));
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
        title="My playing queue"
        srOnly="parallel universe archive || My top 100 recommend video games"
        description="During my travels to various worlds, I learned a common lesson: there is always more to explore, opportunities to seize, and challenges to face. Here is my queue of the world I have planned to visit."
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
          <GameList
            games={currentGames}
            handleGameSelect={(game) => setSelectedGame(game)}
          />
        </>
      )}

      <AnimatePresence>
        {selectedGame && (
          <Modal
            selectedGame={selectedGame}
            handleCloseCall={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
