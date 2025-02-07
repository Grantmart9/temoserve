"use client";
import React, { useState, useEffect } from "react";
import { IconButton, ListItem, TextField, Typography } from "@mui/material"
import * as motion from "motion/react-client"
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { createClient } from "@supabase/supabase-js";
import Slider from '@mui/material/Slider';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';

const supabase = createClient("https://sdsejsyrecrffnjqevfm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2Vqc3lyZWNyZmZuanFldmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTcxOTcsImV4cCI6MjAwNDQzMzE5N30.lQp4_X1_JxGAS3SlmFHgHs8TQs30F35ssfS-0oZOw-k");

const ServiceSearchBar = () => {
    const [open, setOpen] = useState(false);

    const handleFilter = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const [value, setValue] = useState([1, 5]);
    const [value1, setValue1] = useState([300, 3000]);
    const [value2, setValue2] = useState([1, 30]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    const handleApplyFilter = () => {
        setOpen(false);
    };
    const valuetext = (value) => {
        return `${value}°C`;
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                transition={{
                    type: "spring",
                    bounce: 0.02,
                    stiffness: 300,
                    damping: 80,
                    mass: 10,
                    duration: 1,
                }} className="inline-flex gap-0">
                <Button
                    size="small"
                    variant="text"
                    className="bg-gradient-to-b from-gray-300 to-gray-300 via-gray-100 shadow-gray-800 shadow-xs  transform-none rounded-l-2xl rounded-r-none text-gray-700"
                    onClick={handleFilter} >
                    Filter
                </Button>
                <div className="bg-gradient-to-b from-gray-300 to-gray-300 via-gray-100  p-1 shadow-gray-800 shadow-xs text-center justify-center my-auto">
                    <TextField size="small" fullWidth={true} className="rounded-md text-cyan-100" />
                </div>
                <Button
                    size="small"
                    variant="text"
                    className="bg-gradient-to-b from-gray-300 to-gray-300 shadow-gray-800 shadow-xs  via-gray-100  transform-none rounded-r-2xl rounded-l-none  text-gray-700">
                    Search
                </Button>
            </motion.div>
            <Dialog onClose={handleClose} open={open}>
                <div className="bg-linear-to-r from-cyan-950 to-cyan-950 via-cyan-600 shadow-cyan-400">
                    <List className="text-center text-cyan-100 justify-center p-10">
                        <ListItem sx={{ minWidth: "200pt" }}>
                            <Typography className="text-cyan-100 whitespace-nowrap">Rating </Typography>
                            <Slider
                                className="text-cyan-300 ml-4"
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                max={5}
                                min={1}
                            />
                        </ListItem>
                        <ListItem sx={{ minWidth: "200pt" }}>
                            <Typography className="text-cyan-100 whitespace-nowrap">Price Range </Typography>
                            <Slider
                                className="text-cyan-300 ml-4"
                                getAriaLabel={() => 'Temperature range'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                max={3000}
                                min={100}
                            />
                        </ListItem>
                        <ListItem sx={{ minWidth: "200pt" }}>
                            <Typography className="text-cyan-100 whitespace-nowrap">Distance </Typography>
                            <Slider
                                className="text-cyan-300 ml-4"
                                value={value2}
                                onChange={handleChange2}
                                valueLabelDisplay="auto"
                                getAriaValueText={() => `${value}Km`}
                                max={30}
                                min={1}
                            />
                        </ListItem>
                    </List>
                    <div className="flex align-center justify-center pb-4">
                        <Button
                            onClick={handleApplyFilter}
                            size="small"
                            className="transform-none bg-gradient-to-r from-cyan-950 to-cyan-950 via-cyan-600 shadow-cyan-950 rounded-full shadow-md">
                            <div className="text-cyan-100 font-serif p-2">Apply Filter</div>
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}


const ServiceMap = ({ Data }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "tween",
                bounce: 0.02,
                stiffness: 400,
                damping: 80,
                mass: 10,
                duration: 1,
            }} className="grid lg:grid-cols-5 grid-flow-row gap-2 mt-10 mx-2">
            {Data.map((Service) =>
                <div>
                    <Stack className="grid grid-flow-row gap-1 p-2 bg-linear-to-r from-gray-400 to-gray-400 via-gray-200 shadow-sm shadow-gray-800 rounded-3xl bg-fixed bg-repeat">
                        <div className="inline-flex align-center justify-end">
                            <Rating
                                name="simple-controlled"
                                value={Service.rating}
                                className="bg-gradient-to-r from-gray-400 to-gray-400 via-gray-100 rounded-4xl shadow-sm shadow-gray-700 p-2 ml-3"
                            />
                        </div>
                        <img className="rounded-lg p-1" alt="test" src={`data:image/jpeg;base64,${Service.person_logo}`} />
                        <div className="text-gray-700 text-lg font-serif text-center justify-center opacity-100 font-bold">Service: {Service.name}</div>
                        <div className="text-gray-700 text-md font-serif text-center justify-center opacity-100 font-bold">Category: {Service.category}</div>
                        <div className="inline-flex text-center text-md justify-center">
                            <div className="text-gray-700 font-serif text-2xl text-center justify-center opacity-100 font-bold">Price: R{Service.price}</div>
                        </div>
                        <div className="bg-gray-400 rounded-4xl p-0.5">
                            <Button
                                className="w-full transform-none bg-gradient-to-r from-gray-400 to-gray-400 via-gray-100 rounded-4xl shadow-md">
                                <div className="text-gray-700 font-sans p-1">
                                    Book Now
                                </div>
                            </Button>
                        </div>
                    </Stack>
                </div>)}
        </motion.div>)
}


const Service = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        getInstruments();
    }, []);

    async function getInstruments() {
        const { data } = await supabase.from("nextjs").select();
        setData(data);
    }

    return (
        <React.Fragment>
            <div className="mt-14">
                <div className="block align-center justify-center">
                    <div>
                        <div className="flex align-center justify-center">
                            <ServiceSearchBar className="flex align-center justify-center" />
                        </div>
                        <ServiceMap Data={Data} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;
