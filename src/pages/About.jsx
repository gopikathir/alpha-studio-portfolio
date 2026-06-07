import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[6px] mb-3">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Alpha Studio
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing life's most precious moments with creativity, passion and professionalism.
          </p>

        </div>

        {/* About Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <img
              src={aboutImage}
              alt="Alpha Studio"
              className="rounded-2xl w-full h-[500px] object-cover"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Welcome to Alpha Studio
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Alpha Studio is dedicated to preserving unforgettable memories through stunning photography and creative visual storytelling. Every project is approached with attention to detail and a passion for excellence.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              From weddings and family celebrations to commercial advertisements and live events, our goal is to deliver photographs and videos that you will cherish for years to come.
            </p>

            <p className="text-gray-300 leading-8">
              We believe every smile, every emotion and every milestone deserves to be captured beautifully.
            </p>
                    {/* Statistics Section */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

  <div className="bg-[#111] p-8 rounded-2xl text-center">
    <h2 className="text-4xl font-bold text-yellow-400">2023</h2>
    <p className="text-gray-400 mt-2">Established</p>
  </div>

  <div className="bg-[#111] p-8 rounded-2xl text-center">
    <h2 className="text-4xl font-bold text-yellow-400">300+</h2>
    <p className="text-gray-400 mt-2">Happy Clients</p>
  </div>

  <div className="bg-[#111] p-8 rounded-2xl text-center">
    <h2 className="text-4xl font-bold text-yellow-400">300+</h2>
    <p className="text-gray-400 mt-2">Projects Completed</p>
  </div>

  <div className="bg-[#111] p-8 rounded-2xl text-center">
    <h2 className="text-4xl font-bold text-yellow-400">24/7</h2>
    <p className="text-gray-400 mt-2">Support</p>
  </div>

          </div>
  

</div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Alpha Studio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#111] p-8 rounded-2xl text-center">
              <h3 className="text-yellow-400 text-2xl mb-4">📸</h3>
              <h4 className="text-xl font-semibold mb-2">Creative Vision</h4>
              <p className="text-gray-400">
                Every shot is thoughtfully composed to tell a unique story.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl text-center">
              <h3 className="text-yellow-400 text-2xl mb-4">✨</h3>
              <h4 className="text-xl font-semibold mb-2">Quality Editing</h4>
              <p className="text-gray-400">
                Professional editing that enhances every memory naturally.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl text-center">
              <h3 className="text-yellow-400 text-2xl mb-4">🎥</h3>
              <h4 className="text-xl font-semibold mb-2">Modern Equipment</h4>
              <p className="text-gray-400">
                High-end cameras and lighting for exceptional results.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl text-center">
              <h3 className="text-yellow-400 text-2xl mb-4">❤️</h3>
              <h4 className="text-xl font-semibold mb-2">Client Satisfaction</h4>
              <p className="text-gray-400">
                We focus on delivering memories you'll treasure forever.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;