import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { LiaTagSolid } from 'react-icons/lia';
import { LuMessageSquare } from 'react-icons/lu';
import Nav from './Nav';
import Footer from './Footer';
import Titel from './Titel';
import axios from 'axios';

function Blog() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const [typeofdata, settypeofdata] = useState('All');
  const [tod, settog] = useState(true); // Toggle between category and archive view

  const [data, setData] = useState([]);
  const [showdata, setShowdata] = useState([]);

  // Fetching data from backend
  const fetchData = () => {
    axios
      .get('https://backend-3btg.onrender.com/blog/show')
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Apply filter when typeofdata or page changes
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (typeofdata !== 'All') {
      if (tod) {
        setShowdata(data.filter((item) => item.type === typeofdata));
      } else {
        setShowdata(data.filter((item) => item.time === typeofdata));
      }
    } else {
      setShowdata(data);
    }
  }, [typeofdata, tod, data]);

  return (
    <>
      <Nav />
      <Titel
        url={
          'https://avatars.mds.yandex.net/i?id=01283ede9f1c3a8a39bd4b2135811193_l-4251039-images-thumbs&ref=rim&n=13&w=1440&h=960'
        }
        Name={'Blog'}
      />
      <Box sx={{ backgroundColor: '#EEEEEE' }}>
        <Container sx={{ marginTop: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              {showdata.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((dat, ind) => {
                return (
                  <Box
                    sx={{
                      width: '100%',
                      backgroundColor: 'white',
                      marginTop: ind !== 0 ? '70px' : '0px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                    key={dat._id}
                  >
                    <Box sx={{ width: '100%' }}>
                      <img
                        src={`http://localhost:3001/public/images/${dat.image}`}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        alt={dat.p1}
                      />
                    </Box>
                    <Box sx={{ padding: { xs: '20px', sm: '30px' } }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                          fontWeight: '700',
                          cursor: 'pointer',
                          '&:hover': { color: '#B77A3E' },
                        }}
                      >
                        {dat.p1}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: '300', marginTop: '20px' }}>
                        {dat.p2}
                      </Typography>
                    </Box>
                    <Box>
                      <hr />
                    </Box>
                    <Box sx={{ padding: { xs: '20px', sm: '30px' }, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Box sx={{ margin: '7px', display: 'flex', alignItems: 'center' }}>
                          <FaRegCalendarAlt />
                          <Typography sx={{ margin: '7px', color: '#B77A3E' }}>6 years ago</Typography>
                        </Box>
                        <Box sx={{ margin: '7px', display: 'flex', alignItems: 'center' }}>
                          <LiaTagSolid style={{ fontSize: '22px' }} />
                          <Typography sx={{ margin: '7px', color: '#B77A3E' }}>{dat.type}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '10px' }}>
                <Pagination
                  count={Math.ceil(showdata.length / rowsPerPage)}
                  page={page}
                  onChange={handleChange}
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ position: 'sticky', top: '100px' }}>
                <Box sx={{ backgroundColor: 'white', padding: '20px' }}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>Categories</Typography>
                  <Box sx={{ color: '#B77A3E', marginTop: '10px' }}>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('All'); settog(true); }}>
                      <MdKeyboardArrowRight /> All
                    </Box>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('tea'); settog(true); }}>
                      <MdKeyboardArrowRight /> Tea
                    </Box>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('coffee'); settog(true); }}>
                      <MdKeyboardArrowRight /> Coffee
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ backgroundColor: 'white', padding: '20px', marginTop: '30px' }}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>Archives</Typography>
                  <Box sx={{ color: '#B77A3E', marginTop: '10px' }}>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('March 2016'); settog(false); }}>
                      <MdKeyboardArrowRight /> March 2016
                    </Box>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('January 2016'); settog(false); }}>
                      <MdKeyboardArrowRight /> January 2016
                    </Box>
                    <Box sx={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => { settypeofdata('December 2016'); settog(false); }}>
                      <MdKeyboardArrowRight /> December 2016
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Blog;
