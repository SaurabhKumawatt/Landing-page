import React, { useState } from "react";
import { Menu, X, Instagram, Youtube, MessageCircle } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#182432] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Name */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/favicon.ico" alt="Sakila Mandar logo" className="w-8" />
          <h1 className="text-xl font-bold text-[#C7A055]">Sakila Mandar</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white hover:text-[#C7A055] font-medium">
            About
          </a>
          <a href="#testimonials" className="text-white hover:text-[#C7A055] font-medium">
            Testimonials
          </a>
          <a
            href="https://wa.me/917988633326?text=Hi%20Sakila%2C%20I%20want%20to%20start%20my%20journey!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20C157] text-white px-5 py-2 rounded-full font-semibold shadow-lg transition"
          >
            💬 Start Journey on WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#C7A055]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#182432] shadow-lg px-4 py-4 space-y-4">
          <a
            href="#about"
            className="block text-white hover:text-[#C7A055] font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#testimonials"
            className="block text-white hover:text-[#C7A055] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="https://wa.me/917988633326?text=Hi%20Sakila%2C%20I%20want%20to%20start%20my%20journey!"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] hover:bg-[#20C157] text-white text-center px-5 py-3 rounded-full font-semibold shadow-lg transition"
            onClick={() => setIsOpen(false)}
          >
            💬 Start Journey on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#182432] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-center flex-col items-center">
        <img src="/assets/images/stravix.png" alt="StraviX Logo" className="w-48 mb-4" />

        <h3 className="text-xl font-bold text-[#C7A055] mb-6">
          Connect with Sakila Mandar
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://instagram.com/sakilamandar_75"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://wa.me/917988633326"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] p-3 rounded-full hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © 2025 Sakila Mandar - All rights reserved.
          </p>
          <p className="text-sm text-[#C7A055] font-semibold tracking-wide">
            Created with ❤️ by <span className="text-white">StraviX</span>
          </p>
        </div>
      </div>
    </footer>
  );
};


export { Header, Footer };
