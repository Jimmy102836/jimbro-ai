import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-64 h-64 bg-white/5 rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full -bottom-40 -right-20"></div>
        <div className="absolute w-40 h-40 bg-white/5 rounded-full top-40 right-40"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4 text-sm font-medium">POWERED BY AI</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Creating with JimBroAI Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Join thousands of creators and companies using our AI tools to bring their creative visions to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/start"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
          >
            Get started for free
          </Link>
          <Link
            href="/demo"
            className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Watch a demo
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold mb-2">500K+</h3>
            <p className="text-blue-100">Users</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold mb-2">10M+</h3>
            <p className="text-blue-100">Videos Created</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold mb-2">30+</h3>
            <p className="text-blue-100">Video Styles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-blue-100">Support</p>
          </div>
        </div>
        
        <div className="mt-16 text-sm text-white/70">
          <p>No credit card required to start. Free credits included.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 