import React from 'react';
import { Box, Typography, Grid, Paper, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import RocketIcon from '../assets/Icon1.svg';
import GearsIcon from '../assets/Icon2.svg';
import SpeedIcon from '../assets/Icon3.svg';
import DecisiveActionIcon from '../assets/Icon4.svg';
import CostManagementIcon from '../assets/Icon5.svg';
import SearchIcon from '../assets/Icon6.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  backgroundColor: '#980138',
}));



const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '70%',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '40%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '30%',
  },
}));


const cards = [
  {
    icon: <StyledImage src={RocketIcon} alt="Rocket Icon" />,
    text: 'Impulsionamento nas habilidades e competências de seus colaboradores',
  },
  {
    icon: <StyledImage src={GearsIcon} alt="Gears Icon" />,
    text: 'Otimização e automação de processos',
  },
  {
    icon: <StyledImage src={SpeedIcon} alt="Speed Icon" />,
    text: 'Agilidade no cruzamento e análise de dados',
  },
  {
    icon: <StyledImage src={DecisiveActionIcon} alt="Decisive Action Icon" />,
    text: 'Auxílio na tomada de decisões mais assertivas',
  },
  {
    icon: <StyledImage src={CostManagementIcon} alt="Cost Management Icon" />,
    text: 'Redução estratégica nos custos operacionais',
  },
  {
    icon: <StyledImage src={SearchIcon} alt="Search Icon" />,
    text: 'Identifica erros, fraudes e previne riscos',
  },
];




function Beneficios() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const columns = isMobile ? 2 : 3;
  const rows = isMobile ? 3 : 2;
  const cardsPerPage = columns * rows;
  const pagesCount = Math.ceil(cards.length / cardsPerPage);

  const { innerWidth } = window;
  let sizeFont = '1rem';
  let subSizeFont = '0.8rem';
    const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '1.5rem',
    backgroundColor: '#FFFFFF',
    borderRadius: '0.7rem',
    boxShadow: 'initial',
    height: '60%',
    width: '70%',
    [theme.breakpoints.up('xs')]: {
      width: '60%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  }));

  
  if (innerWidth <= 600) {
    sizeFont = '1.5rem';
    subSizeFont = '0.8rem';
  } else if (innerWidth > 600 && innerWidth < 960) {
    sizeFont = '2rem';
    subSizeFont = '0.8rem';
  } else if (innerWidth >= 960 && innerWidth < 1280) {
    sizeFont = '2rem';
    subSizeFont = '0.8rem';
  } else if (innerWidth > 1280 && innerWidth < 1600) {
    sizeFont = '2rem';
    subSizeFont = '0.9rem';
  } else if (innerWidth >= 1600) {
    sizeFont = '2rem';
    subSizeFont = '1.2rem';

  }
  //             fontSize: { xs: '0.8rem', sm: '0.8remrem', md: '0.8rem', lg: '1rem', xl: '1.2rem' },

  return (
    <StyledBox>
      <Grid container  >
  
        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row',  } }}
>      
          <Typography sx={{
            fontSize: { xs: sizeFont, sm: sizeFont, md: sizeFont, lg: sizeFont },
            color: '#FFFF',  fontWeight: 'bold',
            textAlign: 'center',
            padding: 1,
            alignSelf: 'center'}}>
            Contribuições da inteligência artificial para a sua empresa
          </Typography>

          {Array.from({ length: pagesCount }, (_, page) => {
            const startIndex = page * cardsPerPage;
            const cardsToRender = cards.slice(startIndex, startIndex + cardsPerPage);
            return (
              <>
              <Grid key={page} container alignItems="strech" justifyContent="right" alignContent="center"  >
                {cardsToRender.map((card, index) => (
                  <Grid key={index} item xs={12 / columns} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StyledPaper>
                      {card.icon}
                      <Typography  sx={{
            fontSize: { xs: subSizeFont, sm: subSizeFont, md: subSizeFont, lg: subSizeFont, xl: subSizeFont },
            color: '#000',
          }}>{card.text}</Typography>
                    </StyledPaper>
                  </Grid>
                ))}
                {cardsToRender.length < cardsPerPage && Array.from({ length: cardsPerPage - cardsToRender.length }).map((_, index) => (
                  <Grid key={index} item xs={12 / columns} md={4} />
                ))}
              </Grid>
              </>

            )
          })}
        </Grid>
      </Grid>
    </StyledBox>
  );
}

  
  
  

  export default Beneficios;
