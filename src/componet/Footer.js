import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";

function Footer() {
    return (
        <Box sx={{ marginTop: "50px", backgroundImage: "url(https://i.pinimg.com/736x/44/df/21/44df21025101ba272162de27d76b416a--planet-coffee.jpg)", paddingTop: "40px",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <Container sx={{ color: "white", textTransform: "uppercase", fontWeight: "600", fontSize: { xs: "20px", sm: "23px" }, margin: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box>Opening Hours</Box>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday*', 'Saturday*', 'Sunday'].map((day, index) => (
                            <Box sx={{ width: "70%", marginTop: "30px", display: "flex", justifyContent: "space-between", fontSize: "11px", alignItems: "end" }} key={index}>
                                <Box>{day}</Box>
                                <Box sx={{ width: "30%", backgroundColor: "#403C38", height: "1px" }} />
                                <Box color={day === 'Monday' ? "#9A6E41" : "#acacac"}>{index === 0 ? "Closed" : "9:00 - 22:00"}</Box>
                            </Box>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{ fontSize: "23px" }}>Latest posts</Box>
                        {['Expand Your Mind, Change Everything', 'Places to get lost', 'Lewis Howes', 'Elevate Your Expectations'].map((post, index) => (
                            <Box key={index} sx={{ marginTop: "30px" }}>
                                <Typography sx={{ fontSize: "11px", fontWeight: "600" }}>{post}</Typography>
                                <Typography sx={{ fontSize: "11px", fontWeight: "600", color: "#9A6E41" }}>14.02.2017</Typography>
                                <Box sx={{ backgroundColor: "#403C38", height: "1px", marginTop: "20px" }} />
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ fontSize: "23px" }}>Contact us</Box>
                        <Typography sx={{ marginTop: "30px", fontSize: "12px", textTransform: "lowercase" }}>teacoffee2@gmail.com</Typography>
                        <Typography sx={{ marginTop: "5px", color: "#acacac", textTransform: "lowercase" }}>1-444-123-4559</Typography>
                        <Typography sx={{ marginTop: "5px", color: "#acacac", textTransform: "lowercase" }}>SARTHANA JAKATNKA 224,</Typography>
                        <Typography sx={{ marginTop: "5px", color: "#acacac", textTransform: "lowercase" }}>SURAT</Typography>
                        <Box sx={{ fontSize: "18px", marginTop: "10px" }}>The Last Standard Post</Box>
                        {/* <input type="text" style={{ width: "160px",color:"white", height: "40px", backgroundColor: "transparent", border: "1px solid white", marginTop: "25px" ,paddingLeft:"7px"}} placeholder='ENTER EMAIL' />
                        <Button sx={{ backgroundColor: "#9A6E41", color: "white", width: "50px", height: "45px", borderRadius: "0px", marginLeft: "4px", marginTop: "2px" }}>ADD</Button> */}
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ fontSize: "23px" }}>Other locations</Box>
                        {['coffee shop', 'tea cafe'].map((location, index) => (
                            <Box key={index} sx={{ marginTop: "30px" }}>
                                <Box sx={{ fontSize: "11px" }}>{location}</Box>
                                <Typography sx={{ marginTop: "15px", color: "#acacac", textTransform: "lowercase" }}>
                                    {location === 'coffee shop' ? '2606 Saints Alley\nTampa, FL 33602' : '3497 Watson Street\nCamden, NJ 08102'}
                                </Typography>
                                <Box sx={{ marginTop: "20px", backgroundColor: "#403C38", height: "2px" }} />
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ width: "100%", height: "100px", backgroundColor: "black", marginTop: "50px", color: "white", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box width={"400px"} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                    <FaInstagram cursor={"pointer"} />
                    <FaFacebookF cursor={"pointer"} />
                    <FaTwitter cursor={"pointer"} />
                    <FaLinkedin cursor={"pointer"} />
                    <TiSocialTumbler cursor={"pointer"} />
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
