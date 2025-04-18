import Image from 'next/image';

const testimonials = [
  {
    name: "Sophie Chen",
    role: "Digital Artist",
    avatar: "/images/testimonials/avatar1.jpg",
    text: 'I share with you the last video I created with JimBroAI. This time I used Ukiyo-e style for all the animations. It\'s one of the last styles added, and I really like the way it looks.',
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Content Creator",
    avatar: "/images/testimonials/avatar2.jpg",
    text: 'I turned AI images into dancing characters using JimBroAI 😍',
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    avatar: "/images/testimonials/avatar3.jpg",
    text: 'This tool is a game-changer for our social media campaigns. We can now create high-quality video content in minutes instead of days.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold mb-2 px-3 py-1 bg-blue-100 rounded-full text-sm">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of creators and businesses are already using our AI tools to bring their visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 relative">
                <div className="absolute -top-2 left-4 w-4 h-4 bg-blue-50 transform rotate-45"></div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < testimonial.rating ? "currentColor" : "none"}>
                    <path 
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                      strokeLinejoin="round"
                      strokeWidth="1"
                      stroke={i < testimonial.rating ? "none" : "currentColor"}
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to create with AI?</h3>
                <p className="text-white/90 text-lg mb-6">
                  Join thousands of creators who are already using JimBroAI to bring their creative visions to life.
                </p>
                <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                  Get started for free
                </button>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-white/20 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-xl">25+ AI Tools</h4>
                      <p className="text-white/80">All included for free</p>
                    </div>
                  </div>
                  <div className="h-1 bg-white/20 my-4"></div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 rounded text-sm">Anime</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-sm">Videos</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-sm">Images</span>
                  </div>
                  <p className="text-sm text-white/80">No credit card required to start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 