'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';

export default function DashboardPage() {
  const [username, setUsername] = useState('User');
  const [credits, setCredits] = useState(25);
  const [recentProjects, setRecentProjects] = useState([
    { id: '1', name: 'My First Video', type: 'Video to Video', date: '2 days ago', thumbnail: '/images/dashboard/project1.jpg' },
    { id: '2', name: 'Profile Image', type: 'Text to Image', date: '3 days ago', thumbnail: '/images/dashboard/project2.jpg' },
    { id: '3', name: 'Product Demo', type: 'Image to Video', date: '1 week ago', thumbnail: '/images/dashboard/project3.jpg' },
  ]);

  // 模拟从服务器获取用户数据
  useEffect(() => {
    // 实际项目中，这里应该是API调用获取用户信息
    const mockFetchUserData = async () => {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 假设这是API返回的用户数据
      setUsername('John Doe');
      setCredits(25);
    };

    mockFetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {username}!</h1>
              <p className="text-gray-600">Here's an overview of your account and recent activity.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white px-5 py-3 rounded-lg shadow-sm flex items-center">
                <div className="mr-4">
                  <p className="text-sm text-gray-500">Available Credits</p>
                  <p className="text-2xl font-bold">{credits}</p>
                </div>
                <Link 
                  href="/pricing" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get More
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md text-white p-6">
              <h2 className="text-xl font-bold mb-2">Quick Start</h2>
              <p className="mb-4">Start creating amazing content with our AI tools.</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/tools/video-to-video"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 transition-colors"
                >
                  <h3 className="font-semibold mb-1">Video</h3>
                  <p className="text-sm text-white text-opacity-80">Transform videos</p>
                </Link>
                <Link
                  href="/tools/text-to-image"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 transition-colors"
                >
                  <h3 className="font-semibold mb-1">Image</h3>
                  <p className="text-sm text-white text-opacity-80">Generate images</p>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">Usage Stats</h2>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Credits used this month</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">35 used</span>
                  <span className="text-xs text-gray-500">100 total</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Projects created</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">AI News</h2>
              <ul className="space-y-3">
                <li className="border-b border-gray-100 pb-2">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    <p className="font-medium">New video style released: Anime</p>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-2">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    <p className="font-medium">Tips for better text prompts</p>
                    <p className="text-sm text-gray-500">1 week ago</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    <p className="font-medium">System maintenance scheduled</p>
                    <p className="text-sm text-gray-500">2 weeks ago</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recentProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  {/* 实际项目中，应该显示项目缩略图 */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Thumbnail
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{project.name}</h3>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{project.type}</p>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 text-sm bg-blue-600 text-white rounded-lg py-1 hover:bg-blue-700 transition-colors">
                      Edit
                    </button>
                    <button className="text-sm px-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 text-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="font-semibold mb-1">New Project</h3>
              <p className="text-sm text-gray-500 mb-3">Create something amazing</p>
              <Link
                href="/tools"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 