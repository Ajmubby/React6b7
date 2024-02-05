import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between px-4 bg-slate-900 h-10 text-white">
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
