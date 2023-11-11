"use client";
import { motion } from "framer-motion";

export default function GameCard({
  id,
  name,
  cover_image,
  modalCall,
}: {
  id: string;
  name: string;
  cover_image: string;
  modalCall: () => void;
}) {
  function handleClick() {
    modalCall();
  }

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        onClick={handleClick}
        className="col-span-1 row-span-1 card rounded-lg relative overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-4 flex justify-center items-center text-center">
          <span className="text-slate-300 text-sm">{name}</span>
        </div>

        <div
          className="w-full rounded-lg aspect-w-6 aspect-h-9 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover_image})` }}
        ></div>
      </div>
    </motion.div>
  );
}
