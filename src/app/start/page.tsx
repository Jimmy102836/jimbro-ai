'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

export default function StartPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // 基本表单验证
    if (!email || !password || !confirmPassword) {
      setError('请填写所有字段');
      setLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError('两次密码输入不一致');
      setLoading(false);
      return;
    }
    
    // 模拟注册过程
    try {
      // 实际项目中，这里应该是调用API注册
      console.log('注册信息:', { email, password });
      
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 注册成功后重定向到仪表盘（这里仅作演示）
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('注册失败:', err);
      setError('注册失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Get Started with JimBroAI</h1>
            <p className="text-xl text-gray-700 mb-8">
              Follow these simple steps to start creating amazing AI-generated content.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Step 1: Create Your Account</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Sign up for a free account to get started with 25 credits.
                </p>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Choose Your AI Tool</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Select from our wide range of AI tools to start creating content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold mb-2">Video to Video</h3>
                      <p className="text-gray-600">Transform existing videos with AI styles</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold mb-2">Image to Video</h3>
                      <p className="text-gray-600">Turn still images into animated videos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Upload Your Content</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Upload your images or videos to be transformed by our AI.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-gray-600">Drag and drop your files here, or click to browse</p>
                    <button className="mt-4 px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors">
                      Upload Files
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Enjoy Your Creation</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Download and share your AI-generated content on social media.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 