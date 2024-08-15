import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mt-6">
        Bienvenue dans
        <br />
        <span className="text-5xl">Les Terres Dommer</span>
      </h1>
      <Image
        alt="les terres d'Hormer"
        src="/logo.png"
        width={200}
        height={200}
      ></Image>

      <button className="btn btn-secondary m-2">
        <Link href="/game">Rejoindre une partie</Link>
      </button>
    </div>
  );
}
