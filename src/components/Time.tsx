import React from 'react';
import { Box, Grid, Typography, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import canto1 from '../assets/Group49.svg';
import canto2 from '../assets/Group41.svg';
import allef from '../assets/allef.png';
import gabriel from '../assets/gabriel.png';
import acucena from '../assets/acucena.png';
import felipe from '../assets/felipe.png';
import pedro from '../assets/pedro.png';
import timeMask from '../assets/vetor.png';
import CardMember from './CardMember';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
}));


const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  backgroundImage: `url(${canto1}), url(${canto2})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '3auto',
  backgroundPosition: 'top left, bottom right',
  backgroundColor: '#ffffff',
  flex: 1,
}));

type TeamMember = {
  name: string;
  position: string;
  image: string;
  background: string;
}

function Time() {
  const teamMembers = [
    {
      name: 'Allef Schmidt',
      position: 'Engenheiro de Software',
      image: allef,
      background: timeMask
    },
    {
      name: 'Gabriel Cordeiro',
      position: 'Desenvolvedor Full-Stack',
      image: gabriel,
      background: timeMask
    },
    {
      name: 'Açucena Gois',
      position: 'CEO e Diretora de Projetos',
      image: acucena,
      background: timeMask
    },
    {
      name: 'Felipe Moreira',
      position: 'Engenheiro de Dados',
      image: felipe,
      background: timeMask
    },
    {
      name: 'Pedro Carrera',
      position: 'Social Media',
      image: pedro,
      background: timeMask
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const maxItemsPerLine = isMobile ? 2 : 5;

  const groupedTeamMembers: TeamMember[][] = teamMembers.reduce(
    (acc: TeamMember[][], member: TeamMember, i: number) => {
      const lineIndex = Math.floor(i / maxItemsPerLine);

      if (!acc[lineIndex]) {
        acc[lineIndex] = [];
      }

      acc[lineIndex].push(member);

      return acc;
    },
    []
  );

  return (
    <StyledBox>
      <StyledFormContainer>
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' },
            color: '#000',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Conheça nosso time
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            {groupedTeamMembers.map((group: any[], index: React.Key | null | undefined) => (
              <Grid container item xs={12} justifyContent="center" spacing={2} key={index}>
                {group.map((member, idx) => (
                  <Grid item xs={6} md={2} key={idx}>
                    <CardMember
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      background={timeMask}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </StyledFormContainer>
    </StyledBox>
  );
}

export default Time;