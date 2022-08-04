import React from "react";
import { Link } from "react-router-dom";

export default function Timeline({ hours }) {
  return (
    <div className="grid grid-col-4 text-center p-4">
      <div className="col-start-1 col-span-4 h-12 flex flex-row justify-between items-center">
        <div className="bg-gray-400 p-2 rounded-md text-white">Today</div>
        <Link to="/forecast">
          <div className="bg-blue-500 p-2 rounded-md text-white">
            Next 7 days
          </div>
        </Link>
      </div>

      <div className="col-start-1 col-span-4 flex flex-row overflow-x-auto">
        {hours?.map((day, index) => (
          <div className="flex flex-col m-2 w-12" key={index}>
            <p>{day?.time.split(" ")[1]}</p>
            <img
              className="w-12"
              src={day?.condition.icon}
              alt={day?.condition.text}
            />
            <p>{day?.temp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
