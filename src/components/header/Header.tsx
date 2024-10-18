// components/header/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg ">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex-row flex items-center">
          <img src="/logo.png" alt="House Of Dragons Logo" className="h-10" />
          <h2 className="text-2xl font-bold ml-2">House of Dragons</h2>
        </Link>

        <ul className="flex space-x-3">
          <li>
            <Link
              href="/"
              className="border border-gray-500 rounded-md text-sm px-4 py-2 hover:bg-gray-800 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="border border-gray-500 rounded-md text-sm px-4 py-2 hover:bg-gray-800  transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="border border-gray-500 rounded-md text-sm px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
