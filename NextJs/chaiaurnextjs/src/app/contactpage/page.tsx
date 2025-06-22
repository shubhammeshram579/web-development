import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#1B1717] flex items-center justify-center p-4">
      <div className="bg-[#1B1717] rounded-2xl shadow-lg grid md:grid-cols-2 w-full max-w-5xl">
        {/* Left Side - Contact Info */}
        <div className=" text-white p-8 rounded-l-2xl flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">We'd love to hear from you! Reach out to us via any of the following methods:</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone size={20} /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} /> <span>info@example.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} /> <span>Bangalore, India</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                // rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
