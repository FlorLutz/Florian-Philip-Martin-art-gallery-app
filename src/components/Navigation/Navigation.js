import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex p-4 justify-center h-16 bg-cyan-700 fixed w-full z-10 border-b-8 border-cyan-800">
      <p className="pr-12 text-2xl"> • Art Love Art • </p>
      <ul className="flex justify-center space-x-4 h-full font-bold text-xl gap-5">
        <li className="transition duration-1000 hover:text-white active:text-yellow-500">
          <Link href="/">Spotlight</Link>
        </li>
        <li className="transition duration-1000 hover:text-white active:text-yellow-500">
          <Link href="/art-pieces">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
