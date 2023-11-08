import { ControllerOff } from "@/app/assets/icons/ControllerOff";

export default function GameListEmpty() {
  return (
    <div className="col-span-8 h-96 flex flex-col justify-center items-center gap-1">
      <ControllerOff className="w-32 h-32 text-slate-800 mb-2" />
      <span>Somthing is wrong, No game found</span>
      <span className="text-slate-600">
        there maybe a problem with your connection or the game server
      </span>
    </div>
  );
}
