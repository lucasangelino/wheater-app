import React from "react";

import Wind from "./Wind";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import UV from "./UV";
import Precipitation from "./Precipitation";

export default function Telemetry() {
  return (
    <div className="flex flex-row justify-evenly font-semibold text-white">
      <Wind />
      <Humidity />
      <Pressure />
      {/* <UV />
      <Precipitation /> */}
    </div>
  );
}
