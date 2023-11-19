import { motion } from "framer-motion";
import moment from "moment";
import type { Game } from "@/types/supabase.types";

import { Close } from "@/app/assets/icons/Close";

export default function Modal({
  selectedGame,
  handleCloseCall,
}: {
  selectedGame: Game;
  handleCloseCall: (game: Game | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.2,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="fixed inset-0 z-40 flex justify-center items-end lg:items-center p-1 lg:p-4 bg-slate-900 bg-opacity-80 cursor-pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseCall(null);
        }
      }}
    >
      <div className="w-11/12 lg:w-full lg:max-w-5xl cursor-auto">
        <div
          className="w-full cursor-pointer"
          onClick={() => handleCloseCall(null)}
        >
          <button className="modal-close rounded-md mb-1 hover:text-sky-500 hover:bg-sky-950 h-12 w-12 flex justify-center items-center ">
            <span className="sr-only">close modal</span>
            <Close className="text-2xl" />
          </button>
        </div>
        <motion.div
          key={selectedGame.id}
          layoutId={selectedGame.id}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col-reverse lg:flex-row justify-start items-stretch p-2 lg:p-4 rounded-lg modal"
        >
          <div className="flex flex-col justify-start items-start w-full lg:w-2/3 gap-8 p-4 ps-2 pe-10">
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
              {selectedGame.name}
            </h3>
            <p className="hidden lg:block text-sm leading-relaxed">
              {selectedGame.description.substring(0, 800)}...
            </p>
            <div className="w-full flex justify-start items-start gap-12 text-sm mt-auto">
              <div className="flex flex-col justify-start items-start gap-2">
                <span className="text-slate-400 text-opacity-80 text-sm">
                  Release Date
                </span>
                <span>
                  {selectedGame.released
                    ? moment(selectedGame.released).format("MMM, YYYY")
                    : "NA"}
                </span>
              </div>
              <div className="hidden lg:flex flex-col justify-start items-start gap-2">
                <span className="text-slate-400 text-opacity-80 text-sm">
                  Genres
                </span>
                <div className="flex justify-start items-center gap-2">
                  {JSON.parse(
                    selectedGame.genres
                      .replace(/'/g, '"')
                      .replace(/None/g, '""')
                  ).map((genre: string) => (
                    <span key={genre}>{genre + "," || "NA"}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/3">
            {selectedGame.cover_image && (
              <motion.img
                layout
                layoutId={`${selectedGame.name}${selectedGame.id}`}
                src={selectedGame.cover_image}
                alt={selectedGame.name}
                className="rounded-lg"
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
