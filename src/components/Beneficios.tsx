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

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center',
  alignSelf: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
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
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  }));
  
  return (
    <StyledBox>
      <Grid container  >
        <Grid item xs={12} md={4} sx={{ display: 'flex',  alignItems: 'center' }} >
          <StyledTypography>
            Contribuições da inteligência artificial para a sua empresa
          </StyledTypography>
        </Grid>

        <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'column' } }}
>
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
                      <Typography sx={{ marginTop: '1rem' }}>{card.text}</Typography>
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
