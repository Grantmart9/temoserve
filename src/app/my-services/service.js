"use client";
import React, { useState, useEffect } from "react";
import { ListItem, TextField, Typography } from "@mui/material"
import * as motion from "motion/react-client"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { createClient } from "@supabase/supabase-js";
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from "@mui/material/IconButton";

const supabase = createClient("https://sdsejsyrecrffnjqevfm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2Vqc3lyZWNyZmZuanFldmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTcxOTcsImV4cCI6MjAwNDQzMzE5N30.lQp4_X1_JxGAS3SlmFHgHs8TQs30F35ssfS-0oZOw-k");

const ServiceSearchBar = ({ handleFilter,
    handleClose,
    handleChange,
    handleChange1,
    handleChange2,
    handleApplyFilter,
    valuetext,
    open,
    value,
    value1,
    value2 }) => {

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                transition={{
                    type: "tween",
                    bounce: 0.02,
                    stiffness: 200,
                    damping: 20,
                    mass: 10,
                    duration: 1,
                }} className="inline-flex">
                <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    variant="text"
                    className="bg-gradient-to-b from-gray-200 to-gray-200 via-gray-100 rounded-r-none shadow-r-none shadow-gray-800 shadow-xs transform-none text-gray-700"
                    onClick={handleFilter} >
                    <AddCircleOutlineIcon />
                </Button>
                <div className="bg-gradient-to-b from-gray-200 to-gray-200 via-gray-100  p-1 shadow-gray-800 shadow-xs text-center justify-center my-auto">
                    <TextField size="small" fullWidth={true} className=" text-cyan-100" />
                </div>
                <Button
                    sx={{ textTransform: "none" }}
                    size="small"
                    variant="text"
                    className="bg-gradient-to-b from-gray-200 to-gray-200 shadow-gray-800 rounded-l-none shadow-l-none shadow-xs  via-gray-100  transform-none text-gray-700">
                    <SearchIcon />
                </Button>
            </motion.div>
            <Dialog className=" shadow-gray-900" onClose={handleClose} open={open}>
                <div className="bg-linear-to-r from-gray-300 to-gray-300 via-gray-200 shadow-cyan-400">
                    <List className="text-center text-cyan-100 justify-center p-10">
                        <ListItem sx={{ minWidth: "200pt" }}>
                            <Typography className="text-gray-900 whitespace-nowrap">Rating </Typography>
                            <Slider
                                className="text-gray-800 ml-4"
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
                            <Typography className="text-gray-900 whitespace-nowrap">Price Range </Typography>
                            <Slider
                                className="text-gray-800 ml-4"
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
                            <Typography className="text-gray-900 whitespace-nowrap">Distance </Typography>
                            <Slider
                                className="text-gray-800 ml-4"
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
                            sx={{ textTransform: "none" }}
                            onClick={handleApplyFilter}
                            size="small"
                            className=" bg-gradient-to-r from-gray-300 to-gray-300 via-gray-100 shadow-gray-700 shadow-md">
                            <div className="text-gray-700 font-serif p-2">Apply Filter</div>
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
                damping: 20,
                mass: 10,
                duration: 1,
            }}
            className="grid lg:grid-cols-5 grid-flow-row gap-4 mt-20 mx-4 pb-5"
        >
            {Data.map((Service, index) => (
                <motion.div
                    key={Service.id} // assuming each service has a unique id
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: index * 0.2, // Add staggered delay based on index
                        type: "tween",
                        bounce: 0.02,
                        stiffness: 400,
                        damping: 80,
                        mass: 10,
                        duration: 1,
                    }}

                >
                    <Stack className="grid grid-flow-row gap-1 bg-linear-to-r from-gray-100 to-gray-100 via-gray-300 shadow-md shadow-gray-800 h-full">
                        <div>
                            <img alt="test" style={{ maxHeight: "150pt", width: "100%" }} src={`data:image/jpeg;base64,${Service.person_logo}`} />
                            <div className="w-full h-1 bg-linear-to-r from-cyan-950 to-cyan-950 via-cyan-600"></div>
                        </div>
                        <div className="flex justify-end mr-2">
                            <Rating
                                name="simple-controlled"
                                value={Service.rating}
                                className="p-1"
                            />
                        </div>
                        <div className="text-gray-700 text-2xl font-serif text-left justify-center font-bold">
                            <div className="ml-5">{Service.service_title.toUpperCase()}</div>
                            <div className="w-full h-0.5 bg-linear-to-r from-cyan-950 to-cyan-950 via-cyan-600 px-2"></div>
                        </div>
                        <div className="text-gray-700 text-md font-serif text-center justify-center p-4">
                            {Service.service_description}
                        </div>
                        <div className="p-4 flex align-center justify-center">
                            <Button
                                variant="text"
                                sx={{ textTransform: "none", maxHeight: "20pt" }}
                                className="bg-transparent"
                            >
                                <div className="text-cyan-900 font-serif">
                                    Read More
                                </div>
                            </Button>
                        </div>
                    </Stack>
                </motion.div>
            ))}
        </motion.div>
    );
};


const Service = () => {
    const [Data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([1, 5]);
    const [value1, setValue1] = useState([300, 3000]);
    const [value2, setValue2] = useState([1, 30]);

    const handleFilter = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

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

    useEffect(() => {
        getInstruments();
    }, []);

    async function getInstruments() {
        const { data } = await
            supabase
                .from("nextjs")
                .select()
                .like('person_name', 'Grant')
        setData(data);
    }

    return (
        <React.Fragment>
            <div className="mt-14">
                <div className="block align-center justify-center">
                    <div>
                        <div className="flex align-center justify-center">
                            <ServiceSearchBar
                                handleFilter={handleFilter}
                                handleClose={handleClose}
                                handleChange={handleChange}
                                handleChange1={handleChange1}
                                handleChange2={handleChange2}
                                handleApplyFilter={handleApplyFilter}
                                valuetext={valuetext}
                                open={open}
                                value={value}
                                value1={value1}
                                value2={value2}
                                className="flex align-center justify-center mb-2" />
                        </div>
                        <ServiceMap Data={Data} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;
