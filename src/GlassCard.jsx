import React from "react";

const GlassCard = ({ title, issuer, date, description, color }) => {
  return (
    <div className="relative">
      {/* Background gradient glow */}
      <div
        className={`absolute inset-0 rounded-lg transform -rotate-6 scale-105 bg-gradient-to-br ${color} opacity-30`}
      ></div>

      <div className="glass relative max-w-sm rounded-lg overflow-hidden shadow-lg p-6 cursor-pointer select-none">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            {title[0]}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300 text-sm">{issuer}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{date}</span>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-md transition-colors">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
