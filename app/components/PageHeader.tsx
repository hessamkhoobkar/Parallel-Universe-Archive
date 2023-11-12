// import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";

export default function PageHeader() {
  return (
    <header className="w-full flex justify-start items-center p-8 px-12 relative z-10">
      <Image src={logo} alt="" width={196} height={50} />
      <nav className="ms-auto p-1 flex justify-start items-center gap-2 nav-group rounded-lg shadow border border-slate-900 border-opacity-20">
        {/* <Link
          className={`px-4 py-2 rounded-lg text-white hover:text-gray-200 transition-all duration-200 ease-in-out nav-item`}
          href="/"
        >
          Recommendations
        </Link>
        <Link
          className={`px-4 py-2 rounded-lg text-white hover:text-gray-200 transition-all duration-200 ease-in-out nav-item`}
          href="/queue"
        >
          Queue to play{" "}
        </Link> */}
        <button
          type="button"
          className={`px-4 py-2 rounded-lg text-white hover:text-gray-200 transition-all duration-200 ease-in-out nav-item active`}
        >
          Recommendations
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-lg text-white text-opacity-30 transition-all duration-200 ease-in-out nav-item cursor-not-allowed`}
        >
          Queue to play
        </button>
      </nav>
    </header>
  );
}
