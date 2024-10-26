import React from "react";

const QuoteBanner = () => {
  return (
    <section className="relative w-full py-24 my-16 overflow-hidden">
      {/* Background with fixed positioning */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover brightness-[0.3]"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundAttachment: "fixed", // This ensures the background stays fixed
          willChange: "transform", // Optimization for performance
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center opacity-0 animate-[fadeIn_0.8s_ease-in_forwards]">
          <p className="text-gray-400 font-serif italic mb-6">
            House of the Dragon
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            "Dreams didn't make us kings.
            <span className="block">Dragons did."</span>
          </h2>
          <p className="text-gray-300 italic">- Daemon Targaryen</p>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default QuoteBanner;
