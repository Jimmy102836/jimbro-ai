import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function VideoToVideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Video to Video AI</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your videos with AI-powered style transfer. Choose from 30+ artistic styles to create unique animations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Upload Your Video</h2>
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
                    <p className="mt-2 text-gray-600">Drag and drop your video file here, or click to browse</p>
                    <p className="mt-1 text-xs text-gray-500">Supported formats: MP4, MOV, AVI (Max 60 seconds)</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Upload Video
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Choose Style</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {['Anime', 'Cartoon', 'Monet', 'Van Gogh', 'Cubism', 'Cyberpunk'].map((style, index) => (
                      <div key={index} className="cursor-pointer group">
                        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2 group-hover:ring-2 ring-blue-500 transition-all">
                          <div className={`w-full h-full bg-${index % 2 === 0 ? 'blue' : 'purple'}-${300 + index * 50} flex items-center justify-center`}>
                            <span className="text-white text-sm font-medium">{style}</span>
                          </div>
                        </div>
                        <p className="text-center text-sm">{style}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:underline text-sm flex items-center">
                      View all 30+ styles
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Advanced Options</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Style Strength</span>
                        <span className="text-xs text-gray-500">75%</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="75"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Resolution</span>
                        <span className="text-xs text-gray-500">720p</span>
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>480p</option>
                        <option selected>720p</option>
                        <option>1080p</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="preserve-audio"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="preserve-audio" className="ml-2 text-sm font-medium text-gray-700">
                        Preserve original audio
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Generate Video
                    </button>
                    <p className="mt-2 text-xs text-center text-gray-500">
                      This will use 10 credits. You have 25 credits remaining.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4">Preview</h2>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12 text-gray-400 mb-2"
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
                    <p className="text-gray-500">Upload a video to see preview</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-t border-b border-gray-200 py-4">
                    <h3 className="font-semibold text-lg mb-3">How it works</h3>
                    <ol className="text-gray-600 space-y-3 ml-5 list-decimal">
                      <li>Upload your video (up to 60 seconds)</li>
                      <li>Select an AI style from our collection</li>
                      <li>Adjust settings to your preference</li>
                      <li>Click Generate and wait for AI processing</li>
                      <li>Download or share your stylized video</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Examples</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-video bg-blue-100 rounded-lg"></div>
                      <div className="aspect-video bg-purple-100 rounded-lg"></div>
                      <div className="aspect-video bg-pink-100 rounded-lg"></div>
                      <div className="aspect-video bg-indigo-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-center">More AI Video Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">Image to Video</h3>
                  <p className="text-gray-600 mb-4">Transform still images into dynamic videos with motion.</p>
                  <a href="/tools/image-to-video" className="text-blue-600 hover:underline flex items-center text-sm">
                    Try now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">AI Talking Avatar</h3>
                  <p className="text-gray-600 mb-4">Create realistic talking avatars from any image and text.</p>
                  <a href="/apps/talking-avatar" className="text-blue-600 hover:underline flex items-center text-sm">
                    Try now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">Character Animation</h3>
                  <p className="text-gray-600 mb-4">Bring characters to life with AI-powered animations.</p>
                  <a href="/tools/character-animation" className="text-blue-600 hover:underline flex items-center text-sm">
                    Try now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
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