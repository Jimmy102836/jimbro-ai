import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

// FAQ item component with toggle functionality
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="text-lg font-semibold">{question}</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
          {answer}
        </div>
      </details>
    </div>
  );
}

// FAQ categories and their respective questions
const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What is JimBroAI?",
        answer:
          "JimBroAI is an advanced AI platform that helps you create, optimize, and manage content across various channels. It combines state-of-the-art AI technologies to deliver personalized recommendations, automate routine tasks, and provide valuable insights to enhance your digital presence.",
      },
      {
        question: "How can JimBroAI benefit my business?",
        answer:
          "JimBroAI can benefit your business by automating content creation, providing data-driven insights, optimizing your digital marketing efforts, and saving you time and resources. It helps you make informed decisions, enhance customer engagement, and ultimately drive better business results.",
      },
      {
        question: "Is JimBroAI suitable for small businesses?",
        answer:
          "Absolutely! JimBroAI is designed to be scalable and adaptable to businesses of all sizes. Small businesses can benefit from its user-friendly interface, affordable pricing options, and the ability to automate tasks that would otherwise require dedicated staff or expensive software.",
      },
      {
        question: "How user-friendly is JimBroAI?",
        answer:
          "JimBroAI is designed with user experience at its core. The platform features an intuitive interface, comprehensive tutorials, and responsive customer support to ensure that users of all technical levels can harness its full potential without a steep learning curve.",
      },
      {
        question: "Can I try JimBroAI before purchasing?",
        answer:
          "Yes, we offer a free trial period for new users to explore JimBroAI's features and determine how it can add value to their specific needs. During the trial, you'll have access to a slightly limited version of the platform, which still demonstrates its core functionalities.",
      },
    ],
  },
  {
    category: "Account & Billing",
    items: [
      {
        question: "What are the different subscription plans for JimBroAI?",
        answer:
          "JimBroAI offers several subscription tiers to accommodate different needs and budgets: Basic, Professional, and Enterprise. Each plan offers varying levels of features, usage limits, and support options. You can view detailed information about each plan on our pricing page.",
      },
      {
        question: "How do I upgrade or downgrade my JimBroAI subscription?",
        answer:
          "You can easily change your subscription plan through your account settings. Navigate to the 'Billing' section, where you'll find options to upgrade or downgrade your plan. Changes to your subscription will take effect at the beginning of the next billing cycle.",
      },
      {
        question: "Is there a limit to how many projects I can create with JimBroAI?",
        answer:
          "The number of projects you can create depends on your subscription plan. Basic plans have certain limitations, while Professional and Enterprise plans offer more flexibility. If you need additional projects beyond your plan's limit, you can either upgrade your subscription or purchase project add-ons.",
      },
      {
        question: "What payment methods does JimBroAI accept?",
        answer:
          "JimBroAI accepts major credit cards, PayPal, and in some regions, bank transfers. For Enterprise customers, we also offer invoice-based payment options. All payments are processed securely through our trusted payment gateways.",
      },
      {
        question: "What is JimBroAI's refund policy?",
        answer:
          "If you're unsatisfied with your JimBroAI subscription, you can request a refund within 14 days of your initial purchase or subscription renewal. Please note that refunds are issued at our discretion and may not be available for partial subscription periods or in cases of policy violations.",
      },
    ],
  },
  {
    category: "Features & Integration",
    items: [
      {
        question: "Can JimBroAI integrate with other tools and platforms?",
        answer:
          "Yes, JimBroAI is designed to integrate seamlessly with a wide range of tools and platforms, including CMS systems, social media platforms, email marketing services, and analytics tools. We offer native integrations for popular services and an API for custom integrations.",
      },
      {
        question: "What languages does JimBroAI support?",
        answer:
          "Currently, JimBroAI supports English, Spanish, French, German, Italian, Portuguese, Japanese, and Chinese. We're continuously working to expand our language capabilities based on user feedback and market demands.",
      },
      {
        question: "Does JimBroAI offer content templates?",
        answer:
          "Yes, JimBroAI provides an extensive library of customizable templates for various content types, including blog posts, social media updates, email newsletters, product descriptions, and more. These templates are designed to help you quickly create high-quality content that aligns with best practices.",
      },
      {
        question: "Can I collaborate with team members on JimBroAI?",
        answer:
          "Absolutely! JimBroAI offers collaborative features that allow multiple team members to work on projects simultaneously. You can assign roles and permissions to team members, share content drafts for review, and track changes made by different contributors.",
      },
      {
        question: "Does JimBroAI offer content scheduling and publishing?",
        answer:
          "Yes, JimBroAI enables you to schedule content for publication across various platforms. You can plan your content calendar, set specific publication dates and times, and automate the publishing process to ensure consistent content delivery.",
      },
    ],
  },
  {
    category: "Technical Support",
    items: [
      {
        question: "How can I get technical support for JimBroAI?",
        answer:
          "You can access technical support through multiple channels: our comprehensive knowledge base, email support, live chat during business hours, and for Enterprise customers, dedicated support managers. The level of support available depends on your subscription plan.",
      },
      {
        question: "Is my data secure with JimBroAI?",
        answer:
          "Yes, we take data security very seriously. JimBroAI employs industry-standard encryption, secure data centers, regular security audits, and strict access controls to protect your information. We are compliant with major data protection regulations and never share your data with third parties without consent.",
      },
      {
        question: "What happens to my data if I cancel my JimBroAI subscription?",
        answer:
          "If you cancel your subscription, your data will be stored for 30 days, during which time you can export it or reactivate your account. After this period, your data will be permanently deleted from our active systems, though it may remain in our encrypted backups for a limited time as required by law.",
      },
      {
        question: "Does JimBroAI work on all devices and browsers?",
        answer:
          "JimBroAI is a cloud-based platform that works on all major devices, including desktops, laptops, tablets, and smartphones. We officially support the latest versions of Chrome, Firefox, Safari, and Edge browsers. While it may work on other browsers, we recommend using these for the optimal experience.",
      },
      {
        question: "How often is JimBroAI updated?",
        answer:
          "We regularly update JimBroAI to improve performance, add new features, and fix any issues. Major updates are typically released quarterly, while minor updates and bug fixes may be implemented more frequently. We always notify users about significant updates through email and in-platform announcements.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">JimBroAI FAQ</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Find answers to commonly asked questions about our platform.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* FAQ Tabs */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col">
              {faqData.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-indigo-800">{category.category}</h2>
                  <div className="bg-white rounded-xl shadow-sm">
                    {category.items.map((item, itemIndex) => (
                      <FaqItem key={itemIndex} question={item.question} answer={item.answer} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto text-center bg-indigo-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, our support team is here to help. Reach out to us for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="mailto:support@jimbro.ai"
                className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
              >
                Email Us
              </a>
            </div>
            <p className="text-gray-600 mt-6">
              Have more questions? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our support team</Link> or join our <a href="https://discord.gg/jimbro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Discord community</a>.
            </p>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Our support team is here to help. Feel free to contact us for any
              questions not covered in this FAQ section about JimBroAI.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 