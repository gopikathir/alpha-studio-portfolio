import {
  Camera,
  Image,
  User,
  Video,
  Tv,
  Building,
} from "lucide-react";

function ServicesPreview() {
  const services = [
    {
      icon: <Camera size={40} />,
      title: "Wedding Photography",
    },
    {
      icon: <Image size={40} />,
      title: "Albums & Framing",
    },
    {
      icon: <User size={40} />,
      title: "Modeling & Project Works",
    },
    {
      icon: <Building size={40} />,
      title: "Studio & Equipment Rental",
    },
    {
      icon: <Video size={40} />,
      title: "Commercial Ads",
    },
    {
      icon: <Tv size={40} />,
      title: "Livestream & Events",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Professional photography and media solutions for every occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="flex justify-center text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold">
                {service.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;