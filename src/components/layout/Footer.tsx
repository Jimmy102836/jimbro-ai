import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Socials */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl text-blue-600">JimBroAI</span>
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Clone</span>
            </Link>
            <p className="text-gray-600 mb-4">© 2024 JimBroAI Clone</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* AI Tools */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">AI Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/video-to-video" className="text-gray-600 hover:text-blue-600">Video to Video</Link></li>
              <li><Link href="/tools/image-to-video" className="text-gray-600 hover:text-blue-600">Image to Video</Link></li>
              <li><Link href="/tools/image-to-image" className="text-gray-600 hover:text-blue-600">Image to Image</Link></li>
              <li><Link href="/tools/character-animation" className="text-gray-600 hover:text-blue-600">Character Animation</Link></li>
              <li><Link href="/tools/text-to-image" className="text-gray-600 hover:text-blue-600">Text to Image</Link></li>
            </ul>
          </div>

          {/* Quick Apps */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Apps</h3>
            <h4 className="text-sm font-medium text-gray-500 mb-2">AI Video</h4>
            <ul className="space-y-2 mb-4">
              <li><Link href="/apps/ai-anime-video" className="text-gray-600 hover:text-blue-600">AI Anime Video Generator</Link></li>
              <li><Link href="/apps/talking-avatar" className="text-gray-600 hover:text-blue-600">AI Talking Avatar</Link></li>
              <li><Link href="/apps/video-upscaler" className="text-gray-600 hover:text-blue-600">AI Video Upscaler</Link></li>
            </ul>
            <h4 className="text-sm font-medium text-gray-500 mb-2">AI Image</h4>
            <ul className="space-y-2">
              <li><Link href="/apps/ai-image-generator" className="text-gray-600 hover:text-blue-600">AI Image Generator</Link></li>
              <li><Link href="/apps/image-upscaler" className="text-gray-600 hover:text-blue-600">AI Image Upscaler</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/affiliate" className="text-gray-600 hover:text-blue-600">Affiliate Program</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/enterprise" className="text-gray-600 hover:text-blue-600">Enterprise</Link></li>
            </ul>
            <Link href="/start" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block">
              Get started now
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2024 JimBroAI Clone. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 