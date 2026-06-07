import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8 py-5">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

  <img
    src={logo}
    alt="Alpha Studio Logo"
    className="w-12 h-12 md:w-14 md:h-14 object-contain"
  />

  <div>
    <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
      ALPHA
    </h1>

    <p className="text-xs md:text-sm text-gray-400 tracking-[4px]">
      STUDIO
    </p>
  </div>

</Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-lg">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/gallery" className="hover:text-yellow-400 transition">
            Gallery
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">

          <div className="flex flex-col items-center py-6 space-y-6 text-lg">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;