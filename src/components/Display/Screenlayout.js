import React from "react";
import ReactDOM from "react-dom";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { Footer } from "./PageFooter";

export const ScreenLayout = () => {
  return (
    <div>
      <TopBar />
      <div>
        <ScreenLayoutInner />
      </div>
      <Footer />
    </div>
  );
};
