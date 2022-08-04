import React from "react";

export default function CurrentForecast({ children }) {
  return (
    <div
      className="col-start-1 col-span-3 backdrop-blur-sm 
          bg-white/30 rounded-lg"
    >
      {children}
    </div>
  );
}
