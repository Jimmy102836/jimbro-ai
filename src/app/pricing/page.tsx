import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Flexible Pricing for Creators</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best suits your creative needs, from occasional use to professional creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Free</h2>
                <p className="text-gray-600 mb-6">Perfect for trying out JimBroAI tools</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">/forever</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>25 credits for new users</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to basic AI tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard quality output</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community support</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Priority processing</span>
                  </li>
                </ul>
                <Link
                  href="/start"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 transform scale-105 z-10">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Pro</h2>
                <p className="text-gray-600 mb-6">For creators who need regular content</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>150 credits</strong> per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to all AI tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>HD quality output</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority processing</span>
                  </li>
                </ul>
                <Link
                  href="/start"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe Now
                </Link>
                <p className="text-xs text-center text-gray-500 mt-2">Save 20% with annual billing</p>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Premium</h2>
                <p className="text-gray-600 mb-6">For professionals and businesses</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>500 credits</strong> per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to all AI tools + early access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4K quality output</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum priority processing</span>
                  </li>
                </ul>
                <Link
                  href="/start"
                  className="block w-full text-center bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe Now
                </Link>
                <p className="text-xs text-center text-gray-500 mt-2">Save 20% with annual billing</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Credits Explained</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="rounded-full bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      5
                    </div>
                    <h3 className="font-semibold mb-2">Image to Video</h3>
                    <p className="text-gray-600 text-sm">5 credits per generation</p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-purple-100 text-purple-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      10
                    </div>
                    <h3 className="font-semibold mb-2">Video to Video</h3>
                    <p className="text-gray-600 text-sm">10 credits per generation</p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-pink-100 text-pink-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">Text to Image</h3>
                    <p className="text-gray-600 text-sm">3 credits per generation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold mb-2">Do unused credits roll over?</h3>
                  <p className="text-gray-600">
                    Credits are reset at the beginning of each billing cycle for subscription plans. They do not roll over to the next month.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold mb-2">Can I cancel at any time?</h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time. You will still have access to your plan until the end of your current billing period.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold mb-2">Do you offer a refund policy?</h3>
                  <p className="text-gray-600">
                    We offer a 7-day refund policy if you're not satisfied with our service. Contact our support team to request a refund.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Need a custom plan for your team?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer custom enterprise plans with additional features, more credits, and dedicated support for businesses.
            </p>
            <Link
              href="/enterprise"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 