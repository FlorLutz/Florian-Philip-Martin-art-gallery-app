import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const path = usePathname()
  return (
    <nav className="flex p-4 justify-center h-16 bg-cyan-700 fixed w-full z-10 border-b-8 border-cyan-800">
      <p className="pr-12 text-2xl text-[#18ffff]">• art love art • </p>
      <ul className="flex justify-center space-x-4 h-full font-bold text-xl gap-5">
        <li
          className="transition duration-1000 hover:text-white active:text-yellow-500"
          style={{ color: path === "/" ? "#18ffff" : "#000" }}
        >
          <Link href="/">spotlight</Link>
        </li>
        <li
          className="transition duration-1000 hover:text-white active:text-yellow-500"
          style={{ color: path === "/art-pieces" ? "#18ffff" : "#000" }}
        >
          <Link href="/art-pieces">gallery</Link>
        </li>
        <li
          className="flex items-center justify-center"
          style={{ color: path === "/favorites" ? "#18ffff" : "#000" }}
        >
          <Link href="/favorites">favorites</Link>
        </li>
      </ul>
    </nav>
  )
}
