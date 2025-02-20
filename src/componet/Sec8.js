import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sec8() {
    const items = [
        {
            imgSrc: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/02/home-1-blog-f-img-1.jpg",
            title: " MAKE IT SIMPLE",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-blog-f-img-2.jpg",
            title: " COFFEE SHOP",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
        {
            imgSrc: "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-blog-f-img-3.jpg",
            title: " COFFEE BAR",
            description: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est.",
        },
    ];

    return (
        <>
            <Container>

                <Box sx={{ width: "100%", overflow: "hidden", marginTop: "50px" }}>
                    <Grid  container>
                        {items.map((item, index) => (
                            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ padding: "5px" }} key={index}  data-aos="fade-up"
                            data-aos-delay={index * 350}>
                                <Box>
                                    <img
                                        src={item.imgSrc}
                                        alt=""
                                        width="100%"
                                        style={{ borderRadius: '8px', objectFit: 'cover' }}
                                    />
                                </Box>
                                <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", justifyContent: "flex-start", mt: 2 }}>
                                    <Typography variant='h2' sx={{ mr: 1, fontSize: { xs: '1.5rem', md: '3rem' }, color: "#C7A17A", fontFamily: "Merriweather, serif" }}>{item.title.split(' ')[0]}</Typography>
                                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, fontFamily: "Merriweather, serif", fontWeight: "600" }}>{item.title.split(' ').slice(1).join(' ')}</Typography>
                                </Typography>
                                <Typography variant='h6' sx={{ mt: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                    {item.description}
                                </Typography>
                                <Link to={'/Blog'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        color: "#C7A17A",
                                        backgroundColor: "transparent",
                                        border: "none",
                                        boxShadow: "none",
                                        '&:hover': {
                                            backgroundColor: 'transparent', // Ensure the background stays transparent on hover
                                            boxShadow: 'none' // Ensure there's no shadow on hover
                                        }
                                    }}
                                >
                                    Learn More <FaArrowRight />
                                </Button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </>
    );
}

export default Sec8;

