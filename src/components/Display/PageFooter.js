import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import {
  pagetitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

export const Footer = () => {
  const size = Size();

  return (
    <div className="block h-auto" style={{ backgroundColor: pagebgcolor }}>
      <div className="grid grid-cols-3 gap-1">
        <div className="text-center jusitfy-center">
          © African Commercial Property Solutions 2025
        </div>
        <Button sx={{ color: "black",textTransform:"none" }}>Back to top</Button>
        <div className="text-center jusitfy-center">Privacy</div>
      </div>
    </div>
  );
};
