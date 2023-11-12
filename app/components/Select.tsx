import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AngleDown } from "../assets/icons/AngleDown";

export default function Select({
  label,
  options,
  handleActiveOption,
}: {
  label: string;
  options: any[];
  handleActiveOption: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setIsOpen);

  function handleCall() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(id: string) {
    setIsOpen(false);
    handleActiveOption(id);
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={handleCall}
        className="select flex justify-between items-center py-3 ps-4 pe-2 w-48 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
      >
        <span>{label}</span>
        <AngleDown className="text-2xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-20 select-options inset-x-0 top-14 p-1 rounded-lg flex flex-col justify-start items-start gap-1 shadow-xl"
            initial={{ y: -64, opacity: 0, zIndex: 0 }}
            animate={{ y: 0, opacity: 1, zIndex: 20 }}
            exit={{ y: -64, opacity: 0, zIndex: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {options ? (
              options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`w-full p-4 bg-opacity-20 hover:bg-opacity-10 hover:text-sky-500 hover:bg-sky-800 rounded-lg cursor-pointer transition-all duration-200 ease-in-out  ${
                    label == option.label ? "text-sky-500 bg-sky-800" : ""
                  }`}
                >
                  <span>{option.label}</span>
                </div>
              ))
            ) : (
              <span> No options </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function useOutsideAlerter(ref: any, setIsOpen: (value: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen]);
}
