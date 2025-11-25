"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

function AnimatedHamburger({ isOpen }: AnimatedHamburgerProps) {
  return (
    <Box
      sx={{
        width: 24,
        height: 18,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: isOpen ? '50%' : 0,
          left: 0,
          width: '100%',
          height: 2,
          backgroundColor: 'currentColor',
          borderRadius: 1,
          transition: 'all 0.3s ease-in-out',
          transformOrigin: 'center',
          transform: isOpen ? 'translateY(-50%) rotate(45deg)' : 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: 2,
          backgroundColor: 'currentColor',
          borderRadius: 1,
          transition: 'all 0.3s ease-in-out',
          opacity: isOpen ? 0 : 1,
          transform: 'translateY(-50%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: isOpen ? '50%' : '100%',
          left: 0,
          width: '100%',
          height: 2,
          backgroundColor: 'currentColor',
          borderRadius: 1,
          transition: 'all 0.3s ease-in-out',
          transformOrigin: 'center',
          transform: isOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-100%)',
        }}
      />
    </Box>
  );
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          alignItems: 'center'
        }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rafał Łukawski
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rafał Łukawski
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AnimatedHamburger isOpen={Boolean(anchorElNav)} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              TransitionComponent={Fade}
              TransitionProps={{
                timeout: 300,
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
