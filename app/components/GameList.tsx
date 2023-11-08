"use client";

import type { Game } from "@/types/supabase.types";

import GameCard from "@/app/components/GameCard";
import GameListEmpty from "@/app/components/GameListEmpty";

export default function GameList({ games }: { games: Game[] }) {
  return (
    <div className="w-full grid grid-cols-8 gap-2">
      {games ? (
        games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            cover_image={game.cover_image || ""}
            modalCall={() => console.log(game.name)}
          />
        ))
      ) : (
        <GameListEmpty />
      )}
    </div>
  );
}
