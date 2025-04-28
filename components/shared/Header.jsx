import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 cursor-pointer">
            Logo
          </span>
        </Link>
      </div>

      {/* Menu in the center */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/contact">
          <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Contact
          </span>
        </Link>
        <Link href="/about">
          <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
            About
          </span>
        </Link>
        <Link href="/event">
          <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Event
          </span>
        </Link>
        <Link href="/terms">
          <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Terms
          </span>
        </Link>
      </nav>

      {/* Sign In Button on the right */}
      <div>
        <Link href="/signup">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
}
