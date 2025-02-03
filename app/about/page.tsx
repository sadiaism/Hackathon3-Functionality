// pages/about.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
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
        <Link href="/about" className="hover:text-blue-500">
          <h2>About</h2>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
           Our mission is to provide high-quality, stylish, and affordable{`men's`} clothing that fits every occasion. We believe fashion should empower individuals to express their unique style and feel confident.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <p className="text-lg text-gray-700">
          We offer a wide range of products, including T-shirts, jeans, jackets and accessories. Our curated collections are designed to meet the needs of every modern man who wants to stay on top of trends without breaking the bank.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li>Premium quality fabrics and materials</li>
          <li>Stylish, trendy designs</li>
          <li>Affordable pricing for every budget</li>
          <li>Easy returns and exchanges</li>
          <li>Fast and reliable shipping</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
