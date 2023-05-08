import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import canto1 from '../assets/canto1.svg';
import canto2 from '../assets/canto2.svg';
import canto3 from '../assets/canto3.svg';
import canto4 from '../assets/canto4.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
  position: 'relative',
  zIndex: 1,
  flexDirection: 'column',
  fontFamily: 'PlusJakartaSans-Regular, sans-serif',
  backgroundColor: '#311629',
  backgroundImage: `url(${canto1}), url(${canto2}), url(${canto3}), url(${canto4})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300px',
  backgroundPosition:
    'top left, bottom left, right top, right bottom',

  [theme.breakpoints.down('sm')]: {
    backgroundSize: '120px',
  },
}));



function Banner() {
  return (
    <StyledBox id="banner">
      <Typography
        variant="h1"
        sx={{
          textTransform: 'uppercase',
          fontSize: { xs: '2rem', sm: '4rem', md: '5rem', lg: '3rem' },
          color: '#ffffff',
          fontWeight: 600,
          marginBottom: '1rem',
        }}
      >
        INTELIGÊNCIA NO<br />DESENVOLVIMENTO DE SOFTWARES
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.7rem', sm: '2rem', lg: '1.2rem' },
          color: '#ffffff',
          maxWidth: '60%',
          lineHeight: '1.5',
        }}
      >
        Utilize a inteligência artificial ao seu favor.<br />Obtenha soluções inovadoras de acordo com a sua necessidade.
      </Typography>
    </StyledBox>
  );
}

export default Banner;
