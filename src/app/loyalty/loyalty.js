"use client";
import React from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
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
                <motion.pre className="bg-linear-to-r from-cyan-950 via-cyan-700 to-cyan-950 shadow-cyan-500 p-2 rounded-full shadow-sm" style={text}>{rounded}</motion.pre>
            </div>
        </React.Fragment>
    );
};

export default Loyalty;
