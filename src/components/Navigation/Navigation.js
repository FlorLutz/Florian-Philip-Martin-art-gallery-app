import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="h-16 bg-emerald-500">
      <ul className="flex justify-center items-center space-x-4 h-full">
        <li className="flex items-center justify-center">
          <Link href="/">Spotlight</Link>
        </li>
        <li className="flex items-center justify-center">
          <Link href="/art-pieces">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
