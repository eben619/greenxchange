"use client";
import { Recycle, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-center items-center mb-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-3xl font-semibold text-green-800">GreenXchange</span>
          </div>
        </nav>

        <main className="text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="mb-8 flex justify-center">
              {/* Larger and slowly spinning recycle icon */}
              <Recycle
                className="w-40 h-40 text-green-700"
                style={{
                  animation: "spin 6s linear infinite"
                }}
              />
              <style jsx>{`
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Revolutionizing Waste Management
            </h1>

            <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto mb-12">
              Join the blockchain-powered ecosystem that rewards you for recycling and
              making our world cleaner and greener.
            </p>

            {/* Bigger Get Started Button with Cursor Pointer */}
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl rounded-full shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-green-600 mb-4" />,
                title: "Eco-Friendly",
                description: "Contribute to a sustainable future through responsible waste management."
              },
              {
                icon: <Recycle className="w-10 h-10 text-green-600 mb-4" />,
                title: "Earn Rewards",
                description: "Get incentivized for your environmental contributions."
              },
              {
                icon: <Leaf className="w-10 h-10 text-green-600 mb-4" />,
                title: "Track Impact",
                description: "Monitor your environmental impact through blockchain technology."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md transform transition-all duration-500 hover:-translate-y-2 h-64 flex flex-col justify-center items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col items-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                  <p className="text-lg text-green-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
