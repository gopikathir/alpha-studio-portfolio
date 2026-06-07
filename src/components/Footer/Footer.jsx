import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Studio Info */}

          <div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Alpha Studio
            </h2>

            <p className="text-gray-400 leading-7">
              Capturing life's beautiful moments with creativity,
              passion and professionalism.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

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

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📞 +91 89037 21220
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 63740 74806
            </p>

            <p className="text-gray-400 mt-2 break-all">
              ✉️ alphastudiotenkasi@gmail.com
            </p>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">

          © 2026 Alpha Studio. All Rights Reserved.

          <br />

          Designed & Developed by <span className="text-yellow-400">Gopinath</span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;