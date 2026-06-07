import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";
import gallery7 from "../assets/images/gallery/gallery7.jpg";
import gallery8 from "../assets/images/gallery/gallery8.jpg";
import gallery9 from "../assets/images/gallery/gallery9.jpg";

function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  return (
    <section className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[6px] uppercase mb-3">
            Our Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Every photograph tells a story. Explore a selection of our finest
            moments captured with creativity, passion, and attention to detail.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl cursor-pointer group"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;