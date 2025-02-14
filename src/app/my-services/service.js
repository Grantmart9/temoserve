"use client";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material"
import * as motion from "motion/react-client"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createClient } from "@supabase/supabase-js";
import Dialog from '@mui/material/Dialog';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SUPABASE_URL, API_KEY } from "../supabase";

const supabase = createClient(SUPABASE_URL, API_KEY);

const AddServiceDialog = ({ handleServiceName, handleServiceRate, handleServiceDescription, handleImage, handleClose, handleAddService, open, image, handleUnit, unit }) => {

    return (
        <Dialog className=" shadow-gray-900" onClose={handleClose} open={open}>
            <div className="grid grid-flow-row gap-1 bg-linear-to-r from-gray-300 to-gray-300 via-gray-200 shadow-cyan-400 p-2">
                <TextField onChange={handleServiceName} placeholder="Occupation" size="medium" />
                <div className="inline-flex">
                    <TextField onChange={handleServiceRate} placeholder="ex R200" prefix="R" size="medium" />
                    <Box sx={{ minWidth: 120, marginLeft: "5pt" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={unit}
                                label="Unit"
                                onChange={handleUnit}
                            >
                                <MenuItem value={10}>hr</MenuItem>
                                <MenuItem value={20}>day</MenuItem>
                                <MenuItem value={30}>week</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <TextField onChange={handleServiceDescription} placeholder="Service Description" size="large" />
                <div className="flex text-center justify-center">Insert Your Logo</div>
                <Button>
                    <FileUploadIcon />
                    <input accept="image/*" type="file" onChange={handleImage} />
                </Button>
                <div className="flex align-center justify-center">
                    <img width={150} alt={image} src={image} />
                </div>
                <div className="flex align-center justify-center pb-4 pt-4">
                    <Button
                        sx={{ textTransform: "none" }}
                        onClick={handleAddService}
                        size="small"
                        className="bg-gradient-to-r from-gray-100 to-gray-100 via-gray-300 shadow-gray-700 shadow-md">
                        <div className="text-gray-700 font-serif">Add service</div>
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}
const ServiceSearchBar = ({
    handleServiceName,
    handleServiceRate,
    handleServiceDescription,
    file,
    handleImage,
    handleClose,
    handleAddService,
    open,
    handleFilter,
    image,
    handleUnit,
    unit
}) => {

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
                <IconButton
                    size="large"
                    className="bg-transparent text-gray-700"
                    onClick={handleFilter} >
                    <AddCircleOutlineIcon sx={{ fontSize: "50pt" }} />
                </IconButton>
            </motion.div>
            <AddServiceDialog
                handleServiceName={handleServiceName}
                handleServiceRate={handleServiceRate}
                handleServiceDescription={handleServiceDescription}
                file={file}
                handleImage={handleImage}
                handleClose={handleClose}
                handleAddService={handleAddService}
                open={open}
                image={image}
                handleUnit={handleUnit}
                unit={unit} />
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
                                    Edit Service
                                </div>
                            </Button>
                            <Button
                                variant="text"
                                sx={{ textTransform: "none", maxHeight: "20pt" }}
                                className="bg-transparent"
                            >
                                <div className="text-cyan-900 font-serif">
                                    Delete Service
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
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [Data, setData] = useState([]);
    const [ServiceName, setServiceName] = useState("");
    const [ServiceRate, setServiceRate] = useState("");
    const [ServiceDescription, setServiceDescription] = useState("");
    const [open, setOpen] = useState(false);
    const [unit, setUnit] = React.useState('');

    const handleUnit = (event) => {
        setUnit(event.target.value);
    };

    const handleFilter = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        getInstruments();
        async function getInstruments() {
            const user_id = localStorage.getItem("sb-sdsejsyrecrffnjqevfm-auth-token");
            console.log(user_id)
            const { data } = await
                supabase
                    .from("nextjs_services")
                    .select()
                    .eq("user_id", "591fa541-b66c-4c53-b3b2-c2c2c2927227")
            setData(data)
        }
    }, []);

    async function handleAddService() {
        const { data } = await
            supabase
                .from("nextjs_services")
                .insert({
                    service_title: ServiceName,
                    price: ServiceRate,
                    service_description: ServiceDescription,
                    person_logo: file,
                    rate_unit: unit,
                    distance: 5,
                    rating: 5,
                    user_id: 1
                })
        setOpen(false);
    }

    function handleImage(e) {
        const file = e.target.files[0]; // Get the selected file
        setImage(URL.createObjectURL(e.target.files[0]));

        if (file) {
            // Create a FileReader to read the file
            const reader = new FileReader();

            // Set up an event listener for when the file is read
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1]; // Strip off the data URL prefix
                setFile(base64String)
                // You can now use base64String to send it to your database
            };
            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
    }

    function handleServiceName(e) {
        setServiceName(e.target.value)
    }

    function handleServiceRate(e) {
        setServiceRate(e.target.value)
    }
    function handleServiceDescription(e) {
        setServiceDescription(e.target.value)
    }


    return (
        <React.Fragment>
            <div className="mt-14">
                <div className="block align-center justify-center">
                    <div>
                        <div className="flex align-center justify-center">
                            <ServiceSearchBar
                                handleServiceName={handleServiceName}
                                handleServiceRate={handleServiceRate}
                                handleServiceDescription={handleServiceDescription}
                                file={file}
                                image={image}
                                handleImage={handleImage}
                                handleClose={handleClose}
                                handleAddService={handleAddService}
                                open={open}
                                handleFilter={handleFilter}
                                handleUnit={handleUnit}
                                unit={unit}
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
