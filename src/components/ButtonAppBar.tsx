import React, { useState, useRef } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const AppBarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
}));


function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/#inicio");
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <AppBarContainer position="fixed">
        <Toolbar>
        <Link to="/#banner" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Button
              variant="text"
              sx={{
                fontSize: '1.5rem',
                textAlign: 'left',
                fontWeight: '800',
                color: '#980138',
                textTransform: 'none',
              }}
            >
              IDSoft
            </Button>
          </Link>
          {window.innerWidth < 600 ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon style={{ color: '#000000' }} />
            </IconButton>
          ) : (
            <>
    <Button component={Link} to="/#beneficios" color="inherit"   sx={{
    color: '#980138',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#980138',
      color: 'white',
    },
  }}>
                Benefícios
              </Button>
              <Button component={Link} to="/#solucoes" color="inherit"   sx={{
    color: '#980138',
    m: '0.5rem',

    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#980138',
      color: 'white',
    },
  }}>
                Soluções
              </Button>
              <Button component={Link} to="/#contato" color="inherit"   sx={{
    color: '#980138',
    m: '0.5rem',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#980138',
      color: 'white',
    },
  }}>
                Contato
              </Button>
              <Button component={Link} to="/quem-somos#bannerquemsomos" color="inherit"   sx={{
    color: '#980138',
    m: '0.5rem', 
    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#980138',
      color: 'white',
    },
  }}>
                Quem Somos
              </Button>
              <Button href='https://api.whatsapp.com/send?phone=558899276925&text=Ol%C3%A1,%20acabo%20de%20visualizar%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20IDSOFT.' color="inherit" sx={{
                  backgroundColor: '#980138',

                  borderRadius: '20px',
                  fontWeight: '400',
                  color: '#ffffff',
                   '&:hover': {
      backgroundColor: '#980138',
      color: 'white',
    },
                }}
              >
                Entre em Contato
              </Button>
            </>
          )}
        </Toolbar>
      </AppBarContainer>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        ref={drawerRef}
        sx={{ width: '50vw' }}
      >
        <List>
          <ListItemButton onClick={handleDrawerClose}>
            <Link to="/#beneficios" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText primary="Benefícios" />
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose}>
            <Link to="/#solucoes" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText primary="Soluções" />
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose}>
            <Link to="/#contato" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText primary="Contato" />
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose}>
            <Link to="/quem-somos#bannerquemsomos" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText primary="Quem Somos" />
            </Link>
          </ListItemButton>
          <ListItemButton
            onClick={handleDrawerClose}
            sx={{ bgcolor: '#980138', borderRadius: '20px', margin: 1 }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
              <ListItemText primary="Entre em Contato" />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}
export default ButtonAppBar;
