import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9el8zpo",
        "template_hasjkcp",
        form.current,
        "NRdOoPccdBKPa-NAY"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Booking request sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert(JSON.stringify(error));
        }
      );
  };

  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[5px] mb-3">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Contact Alpha Studio for weddings,
            events, commercial shoots, livestreams and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-[#111] p-8 rounded-2xl">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Contact Information
            </h2>

            <div className="space-y-5">

              <a
                href="tel:+918903721220"
                className="block hover:text-yellow-400 transition"
              >
                📞 +91 89037 21220
              </a>

              <a
                href="tel:+916374074806"
                className="block hover:text-yellow-400 transition"
              >
                📞 +91 63740 74806
              </a>

              <a
                href="https://wa.me/918903721220"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition"
              >
                💬 WhatsApp
              </a>

              <a
                href="mailto:alphastudiotenkasi@gmail.com"
                className="block hover:text-yellow-400 transition"
              >
                ✉ alphastudiotenkasi@gmail.com
              </a>

              <a
                href="https://www.instagram.com/alpha_studio_gallery/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition"
              >
                📷 Instagram
              </a>

              <a
                href="https://www.threads.com/@alpha_studio_gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition"
              >
                🧵 Threads
              </a>

              <a
                href="https://www.facebook.com/share/18sAsd7gdP/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition"
              >
                📘 Facebook
              </a>

            </div>

            {/* Google Map */}

            <div className="mt-10">

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                📍 Our Location
              </h3>

              <iframe
                title="Alpha Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.9117110315374!2d77.29704837477998!3d8.980946491078496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0683d61566c289%3A0x26450de65fa4729f!2sAlpha%20Studio%20Tenkasi!5e1!3m2!1sen!2sin!4v1780822048862!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-[#111] p-8 rounded-2xl">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Appointment 
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 outline-none focus:border-yellow-400"
              />

              <select
                name="event"
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 outline-none focus:border-yellow-400"
              >
                <option value="">Select Event</option>
                <option>Wedding Photography</option>
                <option>Album & Frame</option>
                <option>Modeling & Project Works</option>
                <option>Equipment & Studio Rent</option>
                <option>Commercial Ads</option>
                <option>Livestream & Events</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                rows="6"
                placeholder="Describe your event..."
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 outline-none focus:border-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                Book Now
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;