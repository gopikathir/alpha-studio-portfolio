import { Award, Camera, HeartHandshake, Sparkles } from "lucide-react";

function WhyChoose() {
  const features = [
    {
      icon: <Camera size={40} />,
      title: "Creative Photography",
      description:
        "Every frame is captured with creativity and attention to detail.",
    },
    {
      icon: <Award size={40} />,
      title: "Professional Experience",
      description:
        "Delivering quality photography services with passion and dedication.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Modern Equipment",
      description:
        "High-quality cameras, lighting and editing for exceptional results.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Customer First",
      description:
        "Your memories matter. We work closely with you to create lasting moments.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Why Choose Alpha Studio
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Passion, creativity and professionalism in every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-400 transition duration-300"
            >
              <div className="flex justify-center text-yellow-400 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;