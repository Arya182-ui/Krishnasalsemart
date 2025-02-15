// components/About.js
import React from 'react';

const Aboutus = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Krishna Sales Mart, your number one source for all things shopping. We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2023 by Arya, Krishna Sales Mart has come a long way from its beginnings in Bareilly. When Arya first started out, their passion for specific passion or goal, e.g., "eco-friendly products" drove them to start their own business.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We now serve customers all over World and are thrilled to be a part of the industry industry. We believe in providing our customers with the best possible experience, which is why we offer a wide range of products to meet your needs.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to insert mission statement, e.g., "provide high-quality products at affordable prices while ensuring customer satisfaction." We strive to create a shopping experience that is enjoyable and hassle-free.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Customer Satisfaction</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Community Engagement</li>
          <li>Sustainability</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing Krishna Sales Mart. We look forward to serving you and hope you enjoy your shopping experience with us!
        </p>
      </div>
    </section>
  );
};

export default Aboutus;