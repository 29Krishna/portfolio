import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 flex justify-between items-center p-4 shadow-lg">
      <Link href={"/"}><div className="font-bold text-3xl text-gray-800">Portfolio</div></Link>
      <ul className="flex gap-6 mr-5 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-gray-700 transition duration-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-700 transition duration-300">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-700 transition duration-300">Projects</Link>
        </li>
        <li>
          <Link href="/experiences" className="hover:text-gray-700 transition duration-300">Experiences</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-700 transition duration-300">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
