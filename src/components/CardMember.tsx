import React from 'react';
import { Box, Grid, Typography, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

type CardMemberProps = {
  name: string;
  position: string;
  image: string;
  background: string;
};

function CardMember({ name, position, image, background }: CardMemberProps) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  let imageSize = '17rem';

  if (innerWidth <= 600) {
    imageSize = '5rem';
  } else if (innerWidth > 600 && innerWidth < 960) {
    imageSize = '8rem';
  } else if (innerWidth >= 960 && innerWidth < 1280) {
    imageSize = '11rem';
  } else if (innerWidth > 1280 && innerWidth < 1600) {
    imageSize = '13rem';
  } else if (innerWidth >= 1600) {
    imageSize = '18rem'
  }

  return (
      <Grid spacing={2} >
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              className="team-member-image"
              style={{
                display: 'block',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                padding: '1rem',
                width: imageSize,
                marginBottom: isMobile ? '': '1rem',
              }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  boxSizing: 'border-box',
                  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                  left: '-29.3px',
                  top: '-7.81px',
                  width: '100%',
                  height: '100%',
                  borderRadius: '160% 100% 100% 100%',
                  transform: 'matrix(0.47, -0.89, -0.87, -0.48, 0, 0) rotate(120.03deg) scaleX(-1)',
                  objectPosition: 'center',
                }}
              />
            </div>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: isMobile ? '0.7rem': '1.2rem',
                lineHeight: '23px',
                textAlign: 'center',
                color: '#980138',
                transform: 'rotate(-0.03deg)',
       
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: isMobile ? '0.7rem': '1rem',
                lineHeight: '18px',
                textAlign: 'center',
                color: '#311629',
                transform: 'rotate(-0.03deg)',
            
              }}
            >
              {position}
            </Typography>
          </Box>
        </Grid>
      </Grid>
  );
}

export default CardMember;
