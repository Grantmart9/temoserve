"use client";
import React, { useState, useEffect } from "react";
import { IconButton, TextField } from "@mui/material"
import * as motion from "motion/react-client"
import SearchIcon from '@mui/icons-material/Search';
import CardMedia from "@mui/material/CardMedia";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { createClient } from "@supabase/supabase-js";
import Image from 'next/image'
import Background from "./ad1.png"

const supabase = createClient("https://sdsejsyrecrffnjqevfm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2Vqc3lyZWNyZmZuanFldmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTcxOTcsImV4cCI6MjAwNDQzMzE5N30.lQp4_X1_JxGAS3SlmFHgHs8TQs30F35ssfS-0oZOw-k");


const ServiceSearchBar = () => {
    return (
        <div className="inline-flex mx-auto">
            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 20 }} transition={{
                type: "spring",
                bounce: 0.02,
                stiffness: 200,
                damping: 80,
                mass: 10,
                duration: 1,
                delay: 0.5
            }} className="rounded-md p-0.5 bg-gray-light">
                <TextField size="small" fullWidth={true} className="rounded-md" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 20 }} transition={{
                type: "spring",
                bounce: 0.02,
                stiffness: 200,
                damping: 80,
                mass: 10,
                duration: 1,
                delay: 0.5
            }} className="rounded-full p-0.5 bg-gray-light ml-2">
                <IconButton className="rounded-full mx-auto my-auto" sx={{ bgcolor: "teal", color: "whitesmoke" }} >
                    <SearchIcon fontSize="inherit" />
                </IconButton>
            </motion.div>
        </div>
    )
}


const Service = () => {
    const [value, setValue] = React.useState(2);
    const [SectionEnabled, setSectionEnabled] = useState(true);
    const [Data, setData] = useState([]);

    const handleSectionEnabled = () => {
        setSectionEnabled(true)
    }
    const handleSectionDisabled = () => {
        setSectionEnabled(false)
    }

    useEffect(() => {
        getInstruments();
    }, []);

    async function getInstruments() {
        const { data } = await supabase.from("nextjs").select();
        setData(data);
    }

    return (
        <React.Fragment>
            <div className="mt-20">
                <div className="block align-center justify-center">
                    <div className="grid md:grid-cols-2 gap-2 p-4">
                        <Button
                            fullWidth={false}
                            size="small"
                            onClick={(e) => handleSectionEnabled(e)}
                            className="bg-gradient-to-r from-gray-dark to-blue-dark text-gray-light">
                            Search For A Service
                        </Button>
                        <Button
                            fullWidth={false}
                            size="small"
                            onClick={(e) => handleSectionDisabled(e)}
                            className="bg-gradient-to-r from-gray-dark to-blue-dark text-gray-light">
                            Add a service
                        </Button>
                    </div>
                    {SectionEnabled ? <>
                        <div>
                            <div className="flex align-center justify-center">
                                <ServiceSearchBar className="flex align-center justify-center" />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                                type: "spring",
                                bounce: 0.02,
                                stiffness: 200,
                                damping: 80,
                                mass: 10,
                                duration: 1,
                                delay: 1
                            }} className="grid lg:grid-cols-5 grid-flow-row gap-1 mt-20 mx-2">
                                {Data.map((Service) =>
                                    <div>
                                        <Stack className="grid grid-flow-row gap-1 p-2 bg-blue-dark rounded-3xl bg-fixed bg-repeat">
                                            <img className="rounded-lg p-1" alt="test" src={`data:image/jpeg;base64,${Service.person_logo}`} />
                                            <div className="text-gray-light font-serif text-center justify-center opacity-100 font-bold">Service: {Service.name}</div>
                                            <div className="text-gray-light text-center justify-center font-bold">Category: {Service.category}</div>
                                            <div className="text-gray-light text-center justify-center font-bold">Rating: {Service.rating}</div>
                                            <div className="flex align-center justify-center mx-auto" >
                                                <Rating
                                                    name="simple-controlled"
                                                    value={Service.rating}
                                                />
                                            </div>
                                        </Stack>
                                    </div>)}
                            </motion.div>
                        </div></> : <div>Add to service</div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;
