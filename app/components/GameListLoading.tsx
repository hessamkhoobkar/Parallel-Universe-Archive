import { Controller } from "@/app/assets/icons/Controller";

export default function GameListLoading() {
  return (
    <div className="col-span-8 h-96 flex flex-col justify-center items-center gap-1">
      <Controller className="w-32 h-32 text-sky-500 mb-2 animate-pulse" />
      <span>Traveling through universes</span>
      <span className="text-slate-600">fetching games from the server</span>
    </div>
  );
}
