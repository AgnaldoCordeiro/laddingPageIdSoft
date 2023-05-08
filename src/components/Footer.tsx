import React from 'react';
import { Box, Grid, Typography, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const StyledFooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#980138',
  color: '#FFFFFF',
  padding: '2rem',
  alignItems: 'center',
  flex: 2,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));



function Footer() {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (


      <StyledFooterBox>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography sx={{textAlign: isMobile? 'center':''}}>© 2022 Grupo IDSoft. Todos os direitos reservados.</Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign={'end'}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography>+55 (88) 9927-6925</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography >contato@grupoidsoft.com.br</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex-end" flexDirection="row">
                  <StyledIconButton>
                    <InstagramIcon />
                  </StyledIconButton>
                  <StyledIconButton>
                    <LinkedInIcon />
                  </StyledIconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledFooterBox>
  );
}

export default Footer;