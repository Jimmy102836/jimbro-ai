'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // 在实际项目中，这里应该检查用户会话或令牌来确定登录状态
  useEffect(() => {
    // 模拟从本地存储或cookie检查用户登录状态
    const checkLoginStatus = () => {
      const path = window.location.pathname;
      // 如果用户访问仪表盘页面，我们假设他们已登录
      if (path.includes('/dashboard')) {
        setIsLoggedIn(true);
        setUsername('John Doe');
      }
    };
    
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    // 模拟退出登录
    setIsLoggedIn(false);
    setUsername('');
    setUserMenuOpen(false);
    // 在实际应用中，这里应该清除令牌/会话并调用退出API
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-600">JimBroAI</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Clone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-2 font-medium">
              AI Tools
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 hidden group-hover:block">
              <Link href="/tools/video-to-video" className="block py-2 hover:text-blue-600">Video to Video</Link>
              <Link href="/tools/image-to-video" className="block py-2 hover:text-blue-600">Image to Video</Link>
              <Link href="/tools/image-to-image" className="block py-2 hover:text-blue-600">Image to Image</Link>
              <Link href="/tools/character-animation" className="block py-2 hover:text-blue-600">Character Animation</Link>
              <Link href="/tools/text-to-image" className="block py-2 hover:text-blue-600">Text to Image</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 font-medium">
              Quick Apps
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 hidden group-hover:block">
              <div className="mb-2 font-medium text-gray-500">AI Video</div>
              <Link href="/apps/ai-anime-video" className="block py-2 hover:text-blue-600">AI Anime Video Generator</Link>
              <Link href="/apps/talking-avatar" className="block py-2 hover:text-blue-600">AI Talking Avatar</Link>
              <div className="mt-4 mb-2 font-medium text-gray-500">AI Image</div>
              <Link href="/apps/ai-image-generator" className="block py-2 hover:text-blue-600">AI Image Generator</Link>
            </div>
          </div>

          <Link href="/resources" className="font-medium hover:text-blue-600">Resources</Link>
          <Link href="/pricing" className="font-medium hover:text-blue-600">Pricing</Link>
          <Link href="/enterprise" className="font-medium hover:text-blue-600">Enterprise</Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {username.charAt(0)}
                </div>
                <span className="font-medium">{username}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Dashboard
                  </Link>
                  <Link href="/account" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Account Settings
                  </Link>
                  <Link href="/billing" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Billing
                  </Link>
                  <div className="border-t my-1"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md text-red-600"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="font-medium hover:text-blue-600">
                Log in
              </Link>
              <Link href="/start" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Get started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4">
          <div className="border-b pb-2 mb-2">
            <div className="font-medium mb-2">AI Tools</div>
            <Link href="/tools/video-to-video" className="block py-2 px-4 hover:bg-gray-100 rounded">Video to Video</Link>
            <Link href="/tools/image-to-video" className="block py-2 px-4 hover:bg-gray-100 rounded">Image to Video</Link>
            <Link href="/tools/image-to-image" className="block py-2 px-4 hover:bg-gray-100 rounded">Image to Image</Link>
            <Link href="/tools/character-animation" className="block py-2 px-4 hover:bg-gray-100 rounded">Character Animation</Link>
            <Link href="/tools/text-to-image" className="block py-2 px-4 hover:bg-gray-100 rounded">Text to Image</Link>
          </div>
          
          <div className="border-b pb-2 mb-2">
            <div className="font-medium mb-2">Quick Apps</div>
            <div className="mb-1 text-sm text-gray-500 pl-4">AI Video</div>
            <Link href="/apps/ai-anime-video" className="block py-2 px-4 hover:bg-gray-100 rounded">AI Anime Video Generator</Link>
            <Link href="/apps/talking-avatar" className="block py-2 px-4 hover:bg-gray-100 rounded">AI Talking Avatar</Link>
            <div className="mb-1 mt-2 text-sm text-gray-500 pl-4">AI Image</div>
            <Link href="/apps/ai-image-generator" className="block py-2 px-4 hover:bg-gray-100 rounded">AI Image Generator</Link>
          </div>

          <Link href="/resources" className="block py-2 px-4 hover:bg-gray-100 rounded">Resources</Link>
          <Link href="/pricing" className="block py-2 px-4 hover:bg-gray-100 rounded">Pricing</Link>
          <Link href="/enterprise" className="block py-2 px-4 hover:bg-gray-100 rounded">Enterprise</Link>
          
          <div className="mt-4 border-t pt-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 px-4 py-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {username.charAt(0)}
                  </div>
                  <span className="font-medium">{username}</span>
                </div>
                <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-100 rounded">Dashboard</Link>
                <Link href="/account" className="block py-2 px-4 hover:bg-gray-100 rounded">Account Settings</Link>
                <Link href="/billing" className="block py-2 px-4 hover:bg-gray-100 rounded">Billing</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded text-red-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2 px-4 mb-2 hover:bg-gray-100 rounded font-medium text-center">
                  Log in
                </Link>
                <Link href="/start" className="block w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center">
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 