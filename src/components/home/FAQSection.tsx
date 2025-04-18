'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What can I do with JimBroAI?",
      answer:
        "JimBroAI provides a diverse range of creative options. You can transform videos into various styles, generate and animate images from text and images, create detailed artwork or design elements, and even animate characters from a single photo.",
    },
    {
      question: "Is JimBroAI free to use?",
      answer:
        "Yes, JimBroAI is free to use. New users receive a one-time bonus of 25 credits, enabling you to explore many of our editing tools. Once your credits run out, you have the option to upgrade to a paid subscription for additional credits.",
    },
    {
      question: "Can I use the created content commercially?",
      answer:
        "Absolutely! You retain full ownership of any content created with JimBroAI, allowing you to use it for commercial purposes.",
    },
    {
      question: "How does JimBroAI handle my data and privacy?",
      answer:
        "We prioritize user privacy and understand that images and videos can be sensitive. JimBroAI is committed to protecting your content, ensuring that images are not stored or accessed beyond what is necessary for generating your results. Your content remains solely yours; we do not use or share it without your permission.",
    },
    {
      question: "How can I get support if I encounter issues?",
      answer:
        "If you need assistance or have any questions or suggestions, please join our Discord community or email us at jimbroai@example.com directly.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI tools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 