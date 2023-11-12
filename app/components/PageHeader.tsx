import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";

export default function PageHeader() {
  return (
    <header className="w-full flex justify-start items-center p-8 px-12 relative z-10">
      <Image src={logo} alt="" width={200} height={50} />
      <nav className="ms-auto flex justify-start items-center gap-2">
        <Link href="/">Recommendations</Link>
        <Link href="/queue">Queue to play </Link>
      </nav>
    </header>
  );
}
