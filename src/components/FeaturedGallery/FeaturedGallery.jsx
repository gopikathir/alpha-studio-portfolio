import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function FeaturedGallery() {

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Featured Gallery
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Capturing emotions, stories and unforgettable memories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl group cursor-pointer"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedGallery;