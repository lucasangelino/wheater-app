import React from "react";

export default function CurrentStats({ children }) {
  return (
    <div
      className="mx-3 mt-3 p-4 grid grid-cols-3 grid-rows-5 rounded-lg 
        bg-[url('/sunny.jpg')] bg-center bg-cover text-center items-center"
    >
      {children}
    </div>
  );
}
