import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';


const pages = ['home', 'menu', 'blog', 'about', 'contact'];

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{
            width: "100%",
            position: "sticky",
            top: "0px",
            zIndex: "999",
            backgroundColor: "black",
            backdropFilter: " blur( 20px )",
            // background: "rgba( 255, 255, 255, 0.25 )",
            // margin: "30px auto 0px auto",
            // // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            // WebkitBackdropFilter:" blur( 20px )",
            // border:" 1px solid rgba( 255, 255, 255, 0.18 )"

        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                   
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    <Link to={'/'}>
                        <img src="./image/logon.png" alt="Logo" width="150px" />
                        </Link>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ margin: { sm: "auto" } }}
                        >
                            <MenuIcon sx={{ color: "#D4B26A" }} />
                        </IconButton>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, width: "100px" }}>
                            <img src="./image/logon.png" alt="Logo" style={{ margin: "auto", width: "120px" }} />
                        </Box>
                        <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{ display: { xs: 'block', md: 'none' }, paddingTop: "0", paddingBottom: "0" }}
>
    {pages.map((page) => (
        <Link to={page === "home" ? "/" : `/${page}`} style={{ textDecoration: "none" }} key={page}>
            <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                    width: { lg: "1040px", sm: "1030px", xs: "1020px" },
                    backgroundColor: "transparent",
                    '&:hover': {
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly brighter on hover
                    }
                }}
            >
                <Typography
                    sx={{
                        textAlign: 'center',
                        backgroundColor: "transparent",
                        color: "#D4B26A", // Change to your desired color
                        fontSize: "1.2rem", // Increase font size
                        fontWeight: "700", // Bold font
                        transition: "color 0.3s", // Smooth transition for color change
                        '&:hover': {
                            color: "#fff", // Change color on hover
                        }
                    }}
                >
                    {page}
                </Typography>
            </MenuItem>
        </Link>
    ))}
</Menu>

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly", padding: "0px" }}>
                        {pages.map((page) => (
                            <Link to={page == "home" ? "/" : `/${page}`} style={{ textDecoration: "none" }}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', fontWeight: "800", display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title=" RESERVATION">
                            <Link to={'/reservation'}>
                                <Button
                                    onClick={handleOpenUserMenu}
                                    sx={{
                                        color: "white",
                                        height: { lg: "40px", sm: "30px", xs: "20px" },
                                        width: { lg: "140px", sm: "120px", xs: "100px" },
                                        fontSize: { sm: "15px", xs: "10px" },
                                        backgroundColor: "#CA8E46",
                                        '&:hover': {
                                            backgroundColor: "#B77A3E"
                                        },
                                        fontWeight: "700"
                                    }}
                                >
                                    RESERVATION
                                </Button>
                            </Link>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Nav;
