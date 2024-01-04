"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/images/logo.png";

export default function PageHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-start items-center p-4 lg:py-8 lg:px-12 relative z-10">
      <Image
        src={logo}
        width={196}
        height={50}
        alt="Parallel Universe Archive "
        className="w-auto h-auto"
      />
      <nav className="ms-auto p-1 lg:flex justify-start items-center gap-2 nav-group rounded-lg shadow border border-slate-900 border-opacity-20 hidden">
        <Link href="/">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg text-white  transition-all duration-200 ease-in-out nav-item 
            ${
              pathname === "/"
                ? "active"
                : "text-opacity-30 hover:text-opacity-60"
            }`}
          >
            Recommendations
          </button>
        </Link>
        <Link href="/queue">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg text-white  transition-all duration-200 ease-in-out nav-item
            ${
              pathname === "/queue"
                ? "active"
                : "text-opacity-30 hover:text-opacity-60"
            }`}
          >
            Queue to play
          </button>
        </Link>
      </nav>
    </header>
  );
}
