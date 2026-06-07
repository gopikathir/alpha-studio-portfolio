import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-yellow-400 py-24">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-black mb-6">
          Let's Capture Your Special Moments
        </h2>

        <p className="text-xl text-gray-800 mb-10">
          Weddings, events, commercial shoots, livestreams and much more — we're here to bring your vision to life.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}

export default CTA;