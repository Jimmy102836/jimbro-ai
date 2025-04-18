import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let Your Creativity Flow with <span className="text-blue-600">JimBroAI</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Effortlessly produce AI Anime Videos and Images with a suite of AI-powered Tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/start"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Start for free
              </Link>
              <Link
                href="/discord"
                className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                </svg>
                Join Discord
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">AI Tools</div>
              </div>
              <div className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Creations</div>
              </div>
              <div className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">200K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 shadow-lg">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <p className="text-sm font-medium">AI Generated Anime Video</p>
                  <p className="text-xs opacity-80">Created with JimBroAI</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Anime style content */}
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M10 8l6 4-6 4V8z"></path>
                      </svg>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                      <div className="absolute top-[10%] left-[20%] w-16 h-16 rounded-full bg-white/30 animate-pulse"></div>
                      <div className="absolute top-[30%] right-[15%] w-12 h-12 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-[25%] left-[40%] w-8 h-8 rounded-full bg-white/25 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Create stunning anime videos with AI</p>
              <p className="text-sm">No technical skills required</p>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg">
              <div className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-500 mb-8">Trusted by 260+ creators and leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg w-full h-16 flex items-center justify-center shadow-sm">
                  <p className="font-medium text-gray-500">Client {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 