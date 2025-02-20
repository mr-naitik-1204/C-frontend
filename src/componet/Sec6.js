import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Sec6() {
    return (
        <Container sx={{ marginTop: "50px" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} lg={3}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="200">
                        <img 
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://avatars.mds.yandex.net/i?id=c4427e819288ba83defa25a7faedd4f0b1a2a703-2856463-images-thumbs&n=13" 
                            alt="Coffee 1" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="300">
                        <img 
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://avatars.mds.yandex.net/i?id=f3d6d09aadfa4bb067e1e8d718644bd94551b5ed-4011139-images-thumbs&n=13" 
                            alt="Coffee 2" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="400">
                        <img 
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://avatars.mds.yandex.net/i?id=a9b795b5b393a385c14f91fff884e5b18160f8d1-7545599-images-thumbs&n=13" 
                            alt="Coffee 3" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="500">
                        <img 
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://avatars.mds.yandex.net/i?id=85a4881aaa6ffb4351f73988f121137a-5167369-images-thumbs&n=13" 
                            alt="Coffee 4" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="600">
                        <img  
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://zzmusic.net/collection_images/960/0.jpg" 
                            alt="Tea and Coffee" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
                {/* Text Block for Larger Screens */}
                <Grid item xs={12} sm={6} lg={2} data-aos="fade-up" data-aos-delay="700">  
                    <Typography sx={{
                        display: { xs: 'none', sm: 'block' }, // Hide on mobile, show on larger screens
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "27px",
                        fontWeight: "800",
                        fontFamily: "Lobster, sans-serif",
                        textAlign: "center"
                    }}>
                        T <br /> E <br /> A 
                    </Typography>

                    <Typography sx={{
                        display: { xs: 'none', sm: 'block' },
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Fascinate Inline",
                        fontSize: "22px",
                        color: "#CA8E46",
                        textAlign: "center"
                    }}>
                        A <br /> N <br /> D <br />
                    </Typography>

                    <Typography sx={{
                        display: { xs: 'none', sm: 'block' },
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "27px",
                        fontWeight: "900",
                        textAlign: "center"
                    }}>
                        C <br /> O <br /> F <br /> F <br /> E <br /> E
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                    <Box sx={{ position: 'relative', borderRadius: "20px", overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="800">
                        <img 
                            style={{ width: "100%", height: "auto", transition: '0.3s' }} 
                            src="https://avatars.mds.yandex.net/i?id=1174f1db1e89230b0457bade590e2bb655107a36-9827576-images-thumbs&n=13" 
                            alt="Coffee 5" 
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: "pointer",
                            '&:hover': {
                                opacity: 1,
                            },
                        }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Sec6;
