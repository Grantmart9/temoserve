"use client";
import React from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
import { Gauge } from '@mui/x-charts/Gauge';
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const text = {
    fontSize: 64,
    color: "#4ff0b7",
}

const Points = 2000;


const Loyalty = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, Points, { duration: 4 })
        return () => controls.stop()
    }, [])

    return (
        <React.Fragment>
            <div className="mt-20 m-4 text-center text-white justify-center">
                <motion.pre style={text}>{rounded}</motion.pre>
            </div>
        </React.Fragment>
    );
};

export default Loyalty;
