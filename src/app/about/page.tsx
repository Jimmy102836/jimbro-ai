import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About JimBroAI</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses to create exceptional content with AI-powered intelligence and streamlined workflows.
            </p>
          </div>

          {/* Our Mission */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At JimBroAI, we're on a mission to democratize content creation and enable businesses of all sizes to produce professional-quality content at scale. We believe that creativity should be accessible to everyone, and our AI-powered platform is designed to make that vision a reality.
                </p>
                <p className="text-lg text-gray-700">
                  We're committed to developing tools that augment human creativity, not replace it. By handling the technical aspects of content creation, our platform frees up creators to focus on strategy and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/team-working.jpg"
                  alt="JimBroAI founding team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  JimBroAI was founded in 2022 by a team of content creators, AI researchers, and software engineers who recognized the challenges businesses face in creating consistent, high-quality content at scale.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our founders experienced firsthand the limitations of existing tools and the growing demand for content across multiple channels. They set out to build a platform that would combine the latest advances in artificial intelligence with intuitive design to empower content teams.
                </p>
                <p className="text-lg text-gray-700">
                  Since our launch, we've helped thousands of businesses transform their content operations, saving them time and resources while improving quality and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible with AI and content creation, staying at the forefront of technological advancements.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Empowerment</h3>
                <p className="text-gray-700">
                  We believe in augmenting human creativity, not replacing it. Our tools empower creators to achieve more with less effort.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality & Trust</h3>
                <p className="text-gray-700">
                  We're committed to delivering reliable, high-quality results that our customers can trust for their most important content needs.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team-member-1.jpg"
                    alt="Sarah Johnson"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-blue-600 mb-4">Co-Founder & CEO</p>
                  <p className="text-gray-700">
                    Former content marketing executive with 15+ years of experience leading global teams.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team-member-2.jpg"
                    alt="Michael Chen"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-blue-600 mb-4">Co-Founder & CTO</p>
                  <p className="text-gray-700">
                    AI researcher with a PhD in Machine Learning and experience at leading tech companies.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team-member-3.jpg"
                    alt="Elena Rodriguez"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Elena Rodriguez</h3>
                  <p className="text-blue-600 mb-4">Chief Product Officer</p>
                  <p className="text-gray-700">
                    Product leader with expertise in UX design and a passion for creating intuitive tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-600 text-white rounded-2xl p-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your content creation?</h2>
              <p className="text-xl mb-8">
                Join thousands of businesses using JimBroAI to create exceptional content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/start"
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started for Free
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 