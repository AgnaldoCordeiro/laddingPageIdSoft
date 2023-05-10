import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';

interface CardProps {
  titulo: string;
  texto: string;
  imagem: string;
}

const Card: React.FC<CardProps> = ({ titulo, texto, imagem }) => {
  const { innerWidth } = window;
  const theme = useTheme()
  let fontSize = '1rem';
  let imageSize = '15rem';
  let widthCard = '35vw';
//  width: {xl: '35vw', lg: '35vw', md: '54vw', sm: '75vw', xs: '80vw'},


  if (innerWidth <= 600) {
    fontSize = '0.6rem';
    imageSize = '9rem';
    widthCard = '80vw';
  } else if (innerWidth > 600 && innerWidth < 960) {
    fontSize = '0.8rem';
    imageSize = '10rem';
    widthCard = '75vw';
  } else if (innerWidth >= 960 && innerWidth < 1280) {
    fontSize = '1rem';
    imageSize = '8.5rem';
    widthCard = '50vw';
  } else if (innerWidth > 1280 && innerWidth < 1600) {
    fontSize = '1rem';
  } else if (innerWidth >= 1600) {
    fontSize = '1.2rem';
    imageSize = '18rem'
    widthCard = '35vw';

  }

  return (
    <Box display="flex" flexDirection="row" position="relative" sx={{marginLeft: 2 }}>
      <Box zIndex={1} >
        <img src={imagem} alt="Imagem do card" style={{ width: imageSize, height: 'auto'}} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        sx={{
          background: '#FFF',
          textAlign: 'left',
          width: {xl: widthCard, lg: widthCard, md: widthCard, sm: widthCard, xs: widthCard},
          padding: {xl: 3, lg: 4, md:3, sm:4, xs:1},
          borderRadius: 4,
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: {
              xs: fontSize,
              sm: fontSize,
              md: fontSize,
              lg: fontSize,
              xl: fontSize,
            },
            ml: {xl: '12rem', lg: '12rem', md: '8rem', sm: '10rem', xs: '7rem'},
            color: '#980138',
            fontWeight: 500,
            mt: 0,
          }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: {
              xs: fontSize,
              sm: fontSize,
              md: fontSize,
              lg: fontSize,
              xl: fontSize,
            },
            color: '#000',
            fontWeight: 300,
            mt: 1,
            ml: {xl: '12rem', lg: '12rem', md: '7rem', sm: '10rem', xs: '7rem'},
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
        >
          {texto}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
