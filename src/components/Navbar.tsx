"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          DailyTask
        </Link>

        {/* Links de navegação */}
        <div className="flex space-x-6">
          <button onClick={() => router.push("/")} className="hover:text-gray-400 transition">
            Home
          </button>
          <button onClick={() => router.push("/login")} className="hover:text-gray-400 transition">
            Login
          </button>
          <button onClick={() => router.push("/register")} className="hover:text-gray-400 transition">
            Registrar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
