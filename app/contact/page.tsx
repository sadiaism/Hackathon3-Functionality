// pages/contact.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (you can replace this with actual form submission logic)
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Your message has been sent! We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex gap-4 mt-12">
        <Link href="/" className="hover:text-blue-500">
          <h1 className="flex gap-2">
            Home
            <Image
              src={"/images/rightArrow.svg"}
              alt="arrow"
              width={16}
              height={16}
            />
          </h1>
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
          <h2>Contact</h2>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Have questions? Reach out to us and {`we'll`} be happy to assist you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Office</h2>
        <p className="text-lg text-gray-700 mt-4">
          123 Fashion St, Stylish City, Trendy State, 12345
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Email: <a href="mailto:support@yourbrand.com" className="text-blue-500">support@yourbrand.com</a>
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
