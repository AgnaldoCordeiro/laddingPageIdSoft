import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import foco from '../assets/path302.svg';
import seguranca from '../assets/path337.svg';
import comunicacao from '../assets/comunicacao1.svg';
import crecimento from '../assets/path427.svg';
import proatividade from '../assets/proatividade.png';
import transparencia from '../assets/transparencia.png';
import etica from '../assets/etica.png';
import flexibilidade from '../assets/flexibilidade.png';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#311629',
  justifyContent: 'center',
  alignItems: 'center',
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    marginBottom: theme.spacing(2),
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
}));
function Valores() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const columns = isMobile ? 2 : 4;
  const rows = isMobile ? 4 : 2;
  const iconsPerPage = columns * rows;

  const icons = [
    { title: 'Foco', src: foco },
    { title: 'Segurança', src: seguranca },
    { title: 'Comunicação', src: comunicacao },
    { title: 'Crescimento', src: crecimento },
    { title: 'Proatividade', src: proatividade },
    { title: 'Transparência', src: transparencia },
    { title: 'Ética', src: etica },
    { title: 'Flexibilidade', src: flexibilidade },
  ];

  return (
    <StyledBox>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: '#fff', fontWeight: 500, mb: '2rem' }}
      >
        Nossos Valores
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {icons.map((icon, index) => (
          <Grid key={index} item xs={12 / columns}>
            <IconBox >
              <img src={icon.src} alt={icon.title} />
              <TitleBox>
                <Typography variant="h6" component="div">
                  {icon.title}
                </Typography>
              </TitleBox>
            </IconBox>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}


export default Valores;
