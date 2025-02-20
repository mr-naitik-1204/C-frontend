import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Titel from './Titel'
import { Box, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'

function Manu() {
    window.scrollTo({ top: 0, behavior: "instant" })
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get('https://backend-3btg.onrender.com')
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Nav />
            <Titel
                url={"https://www.cierracandles.com/assets/images/Espresso.jpg"}
                Name={"MENU"}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "60px",
                    padding: { xs: '20px', md: '0' },
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        variant='h4'
                        sx={{
                            color: "black",
                            fontWeight: "800",
                            marginBottom: "20px",
                            fontSize: { xs: '2rem', md: '3rem' },
                            lineHeight: 1.2,
                        }}
                    >
                        COFFEE AND TEA MENU
                    </Typography>
                    <Box width={"100%"} sx={{ maxWidth: "600px", margin: "0 auto" }}>
                        <hr style={{ backgroundColor: "#CA8E46", height: "3px" }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: { xs: "30px", md: "50px" } }}>
                <Container>
                    <Grid container spacing={4} sx={{ color: "black" }}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={6} lg={6} key={index}>
                                <Box sx={{ display: "flex", alignItems: "center" }} data-aos="fade-down" data-aos-delay={`${(index + 1) * 100}`}>
                                    <Box
                                        component={"img"}
                                        src={`http://localhost:3001/public/images/${item.img}`}
                                        sx={{
                                            width: { xs: '60px', sm: '80px', md: '100px' },
                                            height: { xs: '60px', sm: '80px', md: '100px' },
                                            borderRadius: "50%",
                                            border: "2px solid black",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box sx={{ width: "90%", pl: { xs: "10px", sm: "20px" }, mt: { xs: '10px', md: '0' } }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: { xs: '18px', sm: '20px', md: '25px' }, alignItems: "end" }}>
                                            <Box>{item.title}</Box>
                                            <Box sx={{ width: "50%", backgroundColor: "black", height: "2px" }} />
                                            <Box>{item.price}</Box>
                                        </Box>
                                        <Box sx={{ color: "#1F0F0D", mt: "7px", fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                                            {item.description}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Manu
