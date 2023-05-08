import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import canto1 from '../assets/Group37.svg';
import canto2 from '../assets/Group35.svg';
import canto3 from '../assets/Group36.svg';
import image24 from '../assets/image24.svg';

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
  backgroundColor: '#FFF',
  backgroundImage: `url(${canto1}), url(${canto2}), url(${canto3})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300px, 150px, 500px',
  backgroundPosition:
    'top left, bottom left, right center;',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '250px, 200px, 240px',
  },
}));


const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
}));

function BannerQuemSomos() {
  return (
    <StyledBox>
      <Grid container sx={{  padding: '4rem'}}>
  
        <Grid item xs={12} sm={6} sx={{  }}>
          <Box sx={{ maxWidth: { xs: '90%', sm: '80%' }, ml: { xs: 0, sm: '2rem' }}}>
            <Typography
  variant="h3"
  component="h1"
  sx={{
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.3rem' },
    color: '#311629',
    fontWeight: 500,
    textAlign: { xs: 'center', sm: 'left' },
    mt: { xs: '2rem', sm: 0 },
    lineWeight: '1.2',

    flex: '1',
    order: 0,
    flexGrow: 0,
  }}
            >
              Somos especialistas em tornar processos mais ágeis e precisos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                color: '#000',
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'left' },
                mt: '2rem',
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
              
              
           
              
                flex: 'none',
                order: 1,
               flexGrow: 0,
              }}              >
              Desenvolvemos softwares empregando inteligência artificial minimizando erros e economizando seu tempo e dinheiro.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                color: '#000',
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'left' },
                mt: '2rem',
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
              
              
           
              
                flex: 'none',
                order: 1,
               flexGrow: 0,
              }}            >
              Entendemos que cada realidade tem sua particularidade, por isso valorizamos relações estreitas com nossos clientes a fim de garantir que a melhor solução será entregue.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
  <Box
    sx={{
      maxWidth: { xs: '80%', sm: '75%' },
      maxHeight: { xs: '50vh', sm: '70vh', md: '90vh' },
      mt: { xs: '2rem', sm: 0 },
      ml: { xs: 0, md: '6rem' }
    }}
  >
    <StyledImage src={image24} alt="Ilustração de processo de software" />
  </Box>
</Grid>
      </Grid>
    </StyledBox>
  );
}

export default BannerQuemSomos;
