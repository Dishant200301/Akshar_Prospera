// ContactPage.tsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-body">
      <Navigation />

      {/* ------------------------------------ HERO SECTION ------------------------------------ */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden pt-16 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: 'url(/image/contact.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center mt-24 lg:mt-36">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-6 font-medium">
            Ready to discuss your insurance needs? Let's connect and find the perfect coverage for you.
          </p>
        </div>
      </section>

      {/* ------------------------------------ MAIN CONTENT ------------------------------------ */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">

          {/* GRID LAYOUT - FORM FIRST ON MOBILE */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">

            {/* ------------------- FORM SECTION ------------------- */}
            <div className="order-1 lg:order-none bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-10">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>

                {/* SERVICE + SUBJECT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  >
                    <option value="">Choose a category</option>
                    <option value="health">Health Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="auto">Auto Insurance</option>
                  </select>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-36 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* ------------------- INFO CARD ------------------- */}
            <div className="order-2 lg:order-none bg-slate-900 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
              <div className="space-y-8">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Office Address</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      456 Business Ave, Suite 210<br />New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      +1 (123) 456-7890<br />
                      hello@insureco.com
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Open Hours</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Mon–Fri: 9 AM – 6 PM<br />
                      Sat: 10 AM – 2 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-10 border-t border-gray-700 pt-5">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <button
                      key={index}
                      className="bg-slate-800 hover:bg-blue-600 text-gray-200 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------ MAP SECTION ------------------------------------ */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-blue-600" /> Find Us on the Map
          </h2>

          <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow">
            <iframe
              title="Office Location"
              className="w-full h-80"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.84315162066!2d144.95565191531543!3d-37.81720997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f0f2ffeeeee!2sYour%20Office!5e0!3m2!1sen!2sau!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
