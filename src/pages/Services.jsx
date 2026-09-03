import { Link } from "react-router-dom";
import {
  Camera,
  Image,
  User,
  Building,
  Video,
  Tv,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Camera size={45} />,
      title: "Wedding Photography",
      description:
        "Capturing every smile, emotion and unforgettable moment with timeless photography.",
    },
    {
      icon: <Image size={45} />,
      title: "Albums & Framing",
      description:
        "Premium quality albums and customized frames to preserve your memories beautifully.",
    },
    {
      icon: <User size={45} />,
      title: "Modeling & Project Works",
      description:
        "Creative photoshoots for models, portfolios, academic projects and personal branding.",
    },
    {
      icon: <Building size={45} />,
      title: "Studio & Equipment Rental",
      description:
        "Well-equipped studio space and professional photography equipment available for rent.",
    },
    {
      icon: <Video size={45} />,
      title: "Digital Marketing",
      description:
        "Professional photography and videography for businesses, brands and promotional campaigns.",
    },
    {
      icon: <Tv size={45} />,
      title: "Livestream & Events",
      description:
        "Reliable livestream and event coverage for weddings, functions and corporate programs.",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[6px] mb-3">
            What We Offer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Our Services
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            From weddings to commercial productions, Alpha Studio delivers
            professional photography and media services tailored to your needs.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#111] rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition duration-300"
            >

              <div className="text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Capture Your Moments?
          </h2>

          <p className="text-gray-400 mb-8">
            Contact Alpha Studio today and let us create memories you'll cherish forever.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Services;