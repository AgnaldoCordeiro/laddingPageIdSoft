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

  if (innerWidth <= 600) {
    fontSize = '0.6rem';
    imageSize = '9rem';
  } else if (innerWidth > 600 && innerWidth < 960) {
    fontSize = '1rem';
    imageSize = '12rem';
  } else if (innerWidth >= 960 && innerWidth < 1280) {
    fontSize = '1rem';
    imageSize = '15rem';
  } else if (innerWidth > 1280 && innerWidth < 1600) {
    fontSize = '1rem';
  } else if (innerWidth >= 1600) {
    fontSize = '1.6rem';
    imageSize = '20rem'
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
          width: {xl: '35vw', lg: '35vw', md: '35vw', sm: '75vw', xs: '80vw'},
          padding: {xl: 3, lg: 4, md:4, sm:4, xs:1},
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
            ml: {xl: '12rem', lg: '12rem', md: '10rem', sm: '10rem', xs: '7rem'},
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
            ml: {xl: '12rem', lg: '12rem', md: '11rem', sm: '10rem', xs: '7rem'},
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
