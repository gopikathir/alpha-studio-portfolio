import heroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <p className="text-yellow-400 tracking-[8px] uppercase mb-4">
          Welcome To
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Alpha Studio
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-2xl max-w-3xl">
          Capturing timeless memories through creative photography and cinematic storytelling.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

  <Link
    to="/gallery"
    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
  >
    View Gallery
  </Link>

  

</div>

      </div>
    </section>
  );
}

export default Hero;