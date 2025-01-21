import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Fade from "@mui/material/Fade";
import {
  pagetitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

export const Maintainance = () => {
  const size = Size();

  return (
    <div cclassName="block h-auto" style={{ backgroundColor: pagebgcolor }}>
      <Fade in={true} timeout={1000}>
        <h1
          style={{ color: pagetitlecolor, fontFamily: fontType }}
          className="p-2  text-center justify-center font-bold text-3xl mt-16"
        >
          Maintaincance Help Desk
        </h1>
      </Fade>
    </div>
  );
};
