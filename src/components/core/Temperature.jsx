import React from "react";

export default function Temperature({ temperature }) {
  return (
    <div className="text-9xl font-semibold text-white">
      <span>{temperature}</span>
      {/* <span className="text-md">°</span> */}
    </div>
  );
}
