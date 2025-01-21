import React, { useState, useEffect } from "react";
import { Fade } from "@mui/material";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

export const Offering = () => {
  return (
    <div>
      <Fade in={true} timeout={1000}>
        <h1 className="p-2  text-gray-dark text-center justify-center font-bold text-3xl mt-16">
          Unique Offering
        </h1>
      </Fade>
    </div>
  );
};
