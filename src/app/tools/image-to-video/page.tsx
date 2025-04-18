import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ImageToVideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Image to Video AI</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bring your images to life with AI-powered animation. Transform static photos into dynamic videos with natural motion.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Transform Your Images</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">1. Upload Your Image</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
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
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="mt-2 text-gray-600">Drag and drop your image here, or click to browse</p>
                        <p className="mt-1 text-xs text-gray-500">Supported formats: JPG, PNG, WEBP (Max 10MB)</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Upload Image
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">2. Select Animation Type</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {['Zoom', 'Pan', 'Gentle Motion', 'Dramatic', 'Portrait'].map((type, index) => (
                          <div key={index} className="cursor-pointer group">
                            <div className="aspect-square rounded-lg bg-gray-100 mb-2 flex items-center justify-center group-hover:ring-2 ring-blue-500 transition-all">
                              <span className="text-gray-500 text-sm">{type}</span>
                            </div>
                            <p className="text-center text-sm">{type}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">3. Customize Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Animation Speed</span>
                            <span className="text-xs text-gray-500">Medium</span>
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Video Duration</span>
                            <span className="text-xs text-gray-500">5s</span>
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option>3 seconds</option>
                            <option selected>5 seconds</option>
                            <option>10 seconds</option>
                            <option>15 seconds</option>
                          </select>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="add-music"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="add-music" className="ml-2 text-sm font-medium text-gray-700">
                            Add background music
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Generate Video
                    </button>
                    <p className="text-xs text-center text-gray-500">
                      This will use 5 credits. You have 25 credits remaining.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8">
                  <h2 className="text-2xl font-bold mb-6">Preview</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2 text-sm text-gray-500">Original Image</p>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mb-2 text-sm text-gray-500">Generated Video</p>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-lg mb-3">Examples</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg"></div>
                        <div className="aspect-video bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg"></div>
                        <div className="aspect-video bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg"></div>
                        <div className="aspect-video bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-lg"></div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-lg mb-3">Share Your Creation</h3>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
                        <button className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
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

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="rounded-full bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2">Upload Your Image</h3>
                  <p className="text-gray-600">
                    Upload any photo you want to animate. For best results, use high-quality images with clear subjects.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="rounded-full bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2">Choose Animation Style</h3>
                  <p className="text-gray-600">
                    Select from various animation styles to bring your image to life - from subtle movements to dramatic effects.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="rounded-full bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2">Share Your Creation</h3>
                  <p className="text-gray-600">
                    Download your animated video and share it on social media, or use it in your presentations and projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">Ready to animate your images?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get started now and bring your photos to life with AI animation.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Try Now For Free
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 