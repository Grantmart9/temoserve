import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Card } from "primereact/card";

import { Size } from "media-query";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

const topPageMax = 100;

export const Landing = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [TopBarOn, setTopBarOn] = useState(false);
  const [TopBarOff, setTopBarOff] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [timeLeft, setTimeLeft] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
      console.log("Click");
    }, 2500);
    return () => clearInterval(intervalId) + handleNext();
  }, [timeLeft]);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setTopBarOn(false);
        setTopBarOff(true);
      } else if (y < window.scrollY) {
        setTopBarOn(true);
        setTopBarOff(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex == 0) {
      setImageIndex(3);
    }
  };
  const handleNext = () => {
    if (imageIndex < 3) {
      setImageIndex(imageIndex + 1);
    }
    if (imageIndex == 3) {
      setImageIndex(0);
    }
  };

  return (
    <div className="block h-auto" style={{ backgroundColor: pagebgcolor }}>
      <div>
        <Fade in={y < topPageMax ? true : false} timeout={1000}>
          <h1
            style={{ color: pagetitlecolor, fontFamily: fontType }}
            className="text-center justify-center font-bold text-3xl mt-20"
          >
            Landing Page
          </h1>
        </Fade>
      </div>
    </div>
  );
};
