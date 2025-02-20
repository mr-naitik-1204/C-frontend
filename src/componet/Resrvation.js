import React, { useState } from 'react';
import Titel from './Titel';
import Nav from './Nav';
import Footer from './Footer';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';  // Import axios for API calls

function Reservation() {
    const [age, setAge] = useState('');          // State for the number of people
    const [time, setTime] = useState('');        // State for the time selection
    const [dateTime, setDateTime] = useState(''); // State for the datetime-local input

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateTime(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure that all fields are filled
        if (!age || !time || !dateTime) {
            alert('Please fill in all the fields.');
            return;
        }

        const formData = {
            person: age,
            datetimelocal: dateTime,
            Time: time,
        };

        try {
            // Sending POST request to the backend with form data
            const response = await axios.post('https://backend-3btg.onrender.com', formData);
            
            // Display success message
            alert('Reservation Submitted Successfully!');
            
            // Clear the form data after successful submission
            setAge('');
            setTime('');
            setDateTime('');

        } catch (error) {
            // Handle any error
            alert('Error submitting reservation. Please try again.');
            console.error('Error: ', error);
        }
    };

    return (
        <>
            <Nav />
            <Titel
                url={"https://www.gamerzunite.com/graphics/images/mmclean/Cafe-Eorzea-Decor.jpg"}
                Name={"RESERVATION"}
            />
            <Container sx={{ overflow: "hidden" }}>
                <Box>
                    <Grid container sx={{ marginTop: "60px" }}>
                        <Grid item lg={6} sx={{ marginTop: "60px" }}>
                            <Box sx={{ fontSize: "30px", fontWeight: "800" }} data-aos="fade-right" data-aos-delay="200">
                                RESERVE YOUR TABLE HERE
                            </Box>
                            <Box sx={{ height: "6px", width: "150px", backgroundColor: "#B77A3E", marginTop: "30px" }} data-aos="fade-right" data-aos-delay="400"></Box>
                            <Typography sx={{ marginTop: "30px" }} data-aos="fade-right" data-aos-delay="600">
                                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei...
                            </Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Box sx={{ width: "100%", height: "100%" }} component={'img'} src='https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/open-table-img-1.png' data-aos="fade-left" data-aos-delay="300"></Box>
                        </Grid>
                    </Grid>
                </Box>
                <Container>
                    <form onSubmit={handleSubmit}>  {/* Add form submission */}
                        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                            <Grid item xs={12} sm={3}>
                                <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                    <InputLabel id="age-select-label">Person</InputLabel>
                                    <Select
                                        labelId="age-select-label"
                                        id="age-select"
                                        value={age}
                                        label="Person"
                                        onChange={handleAgeChange}
                                    >
                                        {Array.from({ length: 24 }, (_, index) => (
                                            <MenuItem key={index} value={index + 1}>{`Person: ${index + 1}`}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    type="datetime-local"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ m: 1 }}
                                    value={dateTime}
                                    onChange={handleDateChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                    <InputLabel id="time-select-label">Time</InputLabel>
                                    <Select
                                        labelId="time-select-label"
                                        id="time-select"
                                        value={time}
                                        label="Time"
                                        onChange={handleTimeChange}
                                    >
                                        <MenuItem value={10}>11:30 PM</MenuItem>
                                        <MenuItem value={20}>12:00 PM</MenuItem>
                                        <MenuItem value={30}>1:00 PM</MenuItem>
                                        <MenuItem value={40}>2:00 PM</MenuItem>
                                        <MenuItem value={50}>3:00 PM</MenuItem>
                                        <MenuItem value={60}>4:00 PM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    type="submit"  // This triggers the form submission
                                    sx={{
                                        mb: "100px",
                                        height: "55px",
                                        width: "160px",
                                        backgroundColor: "#C7A17A",
                                        marginTop: "8px",
                                        color: "black",
                                        fontWeight: "800",
                                        border: "2px solid transparent",
                                        '&:hover': {
                                            backgroundColor: "black",
                                            border: "2px solid white",
                                            color: "white"
                                        },
                                    }}
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default Reservation;
