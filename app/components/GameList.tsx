"use client";

import { AnimatePresence } from "framer-motion";
import type { Game } from "@/types/supabase.types";

import GameCard from "@/app/components/GameCard";
import GameListEmpty from "@/app/components/GameListEmpty";

export default function GameList({
  games,
  handleGameSelect,
}: {
  games: Game[];
  handleGameSelect: (game: Game) => void;
}) {
  return (
    <div className="w-full grid grid-cols-8 gap-2">
      <AnimatePresence>
        {games ? (
          games.map((game) => (
            <GameCard
              id={game.id}
              key={game.id}
              name={game.name}
              cover_image={game.cover_image || ""}
              modalCall={() => handleGameSelect(game)}
            />
          ))
        ) : (
          <GameListEmpty />
        )}
      </AnimatePresence>
    </div>
  );
}
