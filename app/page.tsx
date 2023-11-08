"use client";

import { useEffect, useState } from "react";
import supabase from "@/configs/supabaseClient";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase
      .from("games")
      .select("*")
      .order("released", { ascending: false });
    // .match({ played: true })

    setGames(data);
    console.log(data);
  }

  return (
    <div className="flex min-h-screen flex-col items-start justify-start px-4 py-24">
      <h1 className="sr-only">parallel universe archive</h1>
      {/* Header */}
      <div className="w-2/3 flex flex-col justify-start items-start gap-6 mb-16">
        <h2 className="text-3xl font-bold">My top 100 recommend video games</h2>
        <p>
          I&lsquo;ve been fortunate to journey through countless virtual worlds,
          where I&lsquo;ve discovered what feels like parallel universes
          brimming with unique life experiences. Here, I present my top 100
          recommendations, each a captivating realm for you to explore.
        </p>
      </div>

      {/* MAIN */}
      <main className="w-full grid grid-cols-8 gap-2">
        {games
          ? games.map((game) => (
              <div
                key={game.id}
                className="col-span-1 row-span-1 card rounded-lg relative"
              >
                <div className="absolute inset-4 flex justify-center items-center text-center">
                  <span className="text-slate-300 text-sm">{game.name}</span>
                </div>

                <div
                  className="w-full rounded-lg aspect-w-6 aspect-h-9 bg-cover bg-center"
                  style={{ backgroundImage: `url(${game.cover_image})` }}
                ></div>
              </div>
            ))
          : "No games"}
      </main>
    </div>
  );
}
