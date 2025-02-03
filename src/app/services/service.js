"use client";
import React from "react";
import { IconButton, TextField } from "@mui/material"
import * as motion from "motion/react-client"
import SearchIcon from '@mui/icons-material/Search';
import CardMedia from "@mui/material/CardMedia";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const NameList = [
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },
    { "name": "Name_1", "distance": "15 KM", "Rating": "Rating" },

]

const Service = () => {
    const [value, setValue] = React.useState(2);

    return (
        <React.Fragment>
            <div className="mt-20">
                <div className="grid grid-rows-2 gap-1">
                    <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 20 }} transition={{
                        type: "spring",
                        bounce: 0.02,
                        stiffness: 200,
                        damping: 80,
                        mass: 10,
                        duration: 0.5,
                    }} className="text-center font-bold justify-center text-gray-dark">Looking for a Service ?</motion.div>
                    <div className="inline-flex mx-auto">
                        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 20 }} transition={{
                            type: "spring",
                            bounce: 0.02,
                            stiffness: 200,
                            damping: 80,
                            mass: 10,
                            duration: 1,
                            delay: 0.5
                        }} className="rounded-md p-0.5 bg-gray-light"><TextField size="small" fullWidth={true} className="rounded-md" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 20 }} transition={{
                            type: "spring",
                            bounce: 0.02,
                            stiffness: 200,
                            damping: 80,
                            mass: 10,
                            duration: 1,
                            delay: 0.5
                        }} className="rounded-full p-0.5 bg-gray-light ml-2"><IconButton className="rounded-full mx-auto my-auto" sx={{ bgcolor: "teal", color: "whitesmoke" }} ><SearchIcon fontSize="inherit" /></IconButton>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                        type: "spring",
                        bounce: 0.02,
                        stiffness: 200,
                        damping: 80,
                        mass: 10,
                        duration: 1,
                        delay: 1.5
                    }} className="grid lg:grid-cols-5 grid-flow-row gap-1 mt-20 mx-2">{NameList.map((Name) => <div>
                        <Stack className="grid grid-flow-row gap-1 p-2 bg-blue-dark rounded-3xl bg-fixed bg-repeat">
                            <CardMedia

                                title="green iguana"
                            />
                            <div className="text-gray-light font-serif text-center justify-center opacity-100 font-bold">{Name.name}</div>
                            <div className="text-gray-light text-center justify-center font-bold">{Name.distance}</div>
                            <div className="text-gray-light text-center justify-center font-bold">{Name.Rating}</div>
                            <div className="flex align-center justify-center mx-auto" >
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>
                        </Stack></div>)}</motion.div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;
