import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="w-full flex justify-start items-center p-4 relative z-10">
      <span>Parallel Universe Archive</span>
      <nav className="ms-auto flex justify-start items-center gap-2">
        <Link href="/">Recommendations</Link>
        <Link href="/queue">Queue to play </Link>
      </nav>
    </header>
  );
}
