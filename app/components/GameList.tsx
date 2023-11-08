"use client";

import GameCard from "@/app/components/GameCard";
import GameListEmpty from "@/app/components/GameListEmpty";

export default function GameList({ games }: { games: any[] }) {
  return (
    <div className="w-full grid grid-cols-8 gap-2">
      {games ? (
        games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            gameCall={() => console.log(game.name)}
            cover_image={game.cover_image}
          />
        ))
      ) : (
        <GameListEmpty />
      )}
    </div>
  );
}
