import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold mb-2 px-3 py-1 bg-blue-100 rounded-full text-sm">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Tools for Every Creative Idea</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our powerful suite of AI tools designed to bring your creative vision to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                  <line x1="7" y1="2" x2="7" y2="22"></line>
                  <line x1="17" y1="2" x2="17" y2="22"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <line x1="2" y1="7" x2="7" y2="7"></line>
                  <line x1="2" y1="17" x2="7" y2="17"></line>
                  <line x1="17" y1="17" x2="22" y2="17"></line>
                  <line x1="17" y1="7" x2="22" y2="7"></line>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-20 h-20 bg-white/10 rounded-full -top-5 -right-5"></div>
                <div className="absolute w-16 h-16 bg-white/10 rounded-full bottom-10 left-10"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block text-blue-600 font-semibold text-sm mb-2 px-2 py-1 bg-blue-50 rounded">/animate</div>
              <h3 className="text-xl font-bold mb-2">Image to Video</h3>
              <p className="text-gray-600">Transform static images into dynamic videos with our AI-powered technology. Perfect for creating engaging content for social media, presentations, and more.</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                <span>Try now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-20 h-20 bg-white/10 rounded-full -top-5 -right-5"></div>
                <div className="absolute w-16 h-16 bg-white/10 rounded-full bottom-10 left-10"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block text-purple-600 font-semibold text-sm mb-2 px-2 py-1 bg-purple-50 rounded">/gen</div>
              <h3 className="text-xl font-bold mb-2">Text to Image</h3>
              <p className="text-gray-600">Turn your text into stunning images with our Text to Image technology. Ideal for generating creative visuals from simple descriptions or ideas.</p>
              <div className="mt-4 flex items-center text-purple-600 font-medium">
                <span>Try now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-20 h-20 bg-white/10 rounded-full -top-5 -right-5"></div>
                <div className="absolute w-16 h-16 bg-white/10 rounded-full bottom-10 left-10"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block text-pink-600 font-semibold text-sm mb-2 px-2 py-1 bg-pink-50 rounded">/move</div>
              <h3 className="text-xl font-bold mb-2">Character Animation</h3>
              <p className="text-gray-600">Our advanced AI technology gives you the power to bring characters to life with dancing, sporting, or acting movements, creating captivating works with anime-inspired aesthetics.</p>
              <div className="mt-4 flex items-center text-pink-600 font-medium">
                <span>Try now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold mb-2 px-3 py-1 bg-blue-100 rounded-full text-sm">AI VIDEO GENERATOR</span>
              <h2 className="text-3xl font-bold mb-6">Create Anime Videos with AI</h2>
              <p className="text-lg text-gray-600 mb-6">Create animated videos in just one click with our powerful AI technology. No technical skills required - just describe what you want, and our AI will bring your vision to life.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Generate high-quality anime-style videos in minutes, not hours</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Choose from over 30 different animation styles and aesthetics</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Export in multiple resolutions and formats for any platform</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Add custom effects, transitions, and soundtracks to your videos</p>
                </li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
                Start creating
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <p className="font-semibold">AI-generated anime video</p>
                  <p className="text-sm opacity-80">00:15 - HD quality</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -right-10"></div>
                  <div className="absolute w-32 h-32 bg-white/10 rounded-full bottom-20 left-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <span className="inline-block text-purple-600 font-semibold mb-2 px-3 py-1 bg-purple-100 rounded-full text-sm">UNLIMITED STYLES</span>
          <h2 className="text-3xl font-bold mb-12">Choose from 30+ Video Styles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Anime', color: 'from-blue-400 to-blue-600' },
              { name: 'Cyberpunk', color: 'from-purple-400 to-purple-600' },
              { name: 'Watercolor', color: 'from-indigo-400 to-indigo-600' },
              { name: 'Pixel Art', color: 'from-pink-400 to-pink-600' },
              { name: 'Sketch', color: 'from-teal-400 to-teal-600' }
            ].map((style, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-all">
                  <div className="h-32 rounded-md mb-3 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-r ${style.color} flex items-center justify-center relative`}>
                      <span className="text-white font-semibold z-10">{style.name}</span>
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute w-12 h-12 bg-white/10 rounded-full top-2 right-2"></div>
                        <div className="absolute w-8 h-8 bg-white/10 rounded-full bottom-4 left-4"></div>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-center text-gray-800">{style.name} Style</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors inline-flex items-center">
            View all styles
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 