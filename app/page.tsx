"use client";

import { useEffect, useState } from "react";
import supabase from "@/configs/supabaseClient";

import PageHero from "@/app/components/PageHero";
import GameList from "@/app/components/GameList";

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
    <>
      <PageHero
        title="My top 100 recommend video games"
        srOnly="parallel universe archive || My top 100 recommend video games"
        description="I&lsquo;ve been fortunate to journey through countless virtual worlds,
        where I&lsquo;ve discovered what feels like parallel universes brimming
        with unique life experiences. Here, I present my top 100
        recommendations, each a captivating realm for you to explore."
      />
      <GameList games={games} />
    </>
  );
}
