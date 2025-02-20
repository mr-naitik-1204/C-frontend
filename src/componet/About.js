import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Nav from './Nav';
import Titel from './Titel';
import Footer from './Footer';
import Count from './Count';

function About() {
  window.scrollTo({ top: 0, behavior: 'instant' });

  return (
    <>
      <Nav />
      <Titel
        url={'https://i.pinimg.com/originals/23/35/eb/2335ebdf255dd91ca7cdac37a92da22c.jpg'}
        Name={'About me'}
      />
      <Box sx={{ marginBottom: '50px', overflow: 'hidden' }}>
        <Box sx={{ width: { xs: '90%', md: '80%' }, margin: 'auto', paddingTop: '50px' }}>
          <Box
            sx={{
              width: '200px',
              height: '10px',
              backgroundColor: '#B97C3F',
              margin: 'auto',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '32px', md: '40px' },
              fontWeight: '600',
              color: 'black',
              paddingTop: '60px',
              textAlign: 'center',
            }}
          >
            We have been building houses for over 150 years
          </Typography>

          <Grid container sx={{ marginTop: '50px', justifyContent: 'space-around' }}>
            {[
              { count: 250, label: 'Realized tea and coffee' },
              { count: 250, label: 'Staff Members' },
              { count: 50, label: 'branch' },
              { count: 450, label: 'Local Experts' },
            ].map((item, index) => (
              <Grid
                item
                lg={3}
                xs={12}
                key={index}
                sx={{ marginTop: '30px', textAlign: 'center' }}
              >
                <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Count number={item.count} time={10} />
                  +
                </Typography>
                <Typography
                  sx={{
                    color: '#B97C3F',
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    fontWeight: '600',
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              width: '200px',
              height: '10px',
              backgroundColor: '#B97C3F',
              margin: 'auto',
              marginTop: '100px',
            }}
          />

          <Grid container sx={{ marginTop: '50px' }}>
            <Grid item xs={12} lg={6}>
              <Box
                component="img"
                width="90%"
                src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/About-img-1.png"
                alt="About Us"
                data-aos="fade-right"
                data-aos-delay="200"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box sx={{ fontSize: { xs: '24px', sm: '30px', md: '35px' }, fontWeight: '800' }} data-aos="fade-left" data-aos-delay="100">
                FEDERICO HICKMAN
              </Box>
              <Typography sx={{ marginTop: '30px' }} data-aos="fade-left" data-aos-delay="200">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei...
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <Box
                  sx={{
                    width: '6px',
                    height: '70px',
                    backgroundColor: '#B97C3F',
                    margin: 'auto',
                  }}
                  data-aos="fade-left"
                  data-aos-delay="400"
                />
                <Typography
                  sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    fontWeight: '800',
                    marginLeft: '20px',
                  }}
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quavenenatis estibacenas sed diam eget.
                </Typography>
              </Box>
              <Typography sx={{ marginTop: '30px' }} data-aos="fade-left" data-aos-delay="400">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei...
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default About;
