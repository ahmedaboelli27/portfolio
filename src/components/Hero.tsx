import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center items-center">
          <img
            src="/profile.png"
            alt="Ahmed Atief Abo-Ellil"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl translate-y-1"
          />
        </div>


        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Ahmed Atief Abo-Ellil
        </h1>

        <p className="text-2xl md:text-3xl text-blue-200 mb-8 animate-fade-in-delay">
          Data Analyst
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          Transforming data into actionable insights and driving business decisions through analytics
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 animate-fade-in-delay-3"
        >
          View My Work
          <ChevronDown className="ml-2 animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-white animate-bounce" size={32} />
      </div>
    </section>
  );
}
