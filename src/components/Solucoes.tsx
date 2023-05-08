import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card1 from '../assets/Group45.png';
import Card2 from '../assets/Group47.png';
import Card3 from '../assets/Group48.png';
import Card from './Card';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#F3F2F2',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));




const Solucoes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <StyledBox>
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2rem' },
            color: '#000',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Conheça algumas de nossas soluções
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem' },
            color: '#000',
            fontWeight: 300,
            textAlign: 'center',
            padding: 1,
          }}
        >
          A inteligência artificial é altamente versátil podendo ser utilizada em qualquer área
        </Typography>

        <Grid container spacing={1} sx={{  justifyContent: 'center' }}>
          
  <Grid item xs={12} sm={6}  >
    <Card
      titulo="Análise de dados para recomendações"
      texto="Mecanismos de busca que combinam as preferências do usuário com histórico de dados a fim de indicar a melhor escolha."
      imagem={Card2}
    />
    
  </Grid>
   <Grid item xs={12} sm={6} >
    <Card
      titulo="Diagnóstico de indicadores" 
      texto="A partir dos dados da empresa, verifique quais ações feitas estão dando resultados e quais os principais problemas que precisam ser resolvidos."  
      imagem={Card2}
    />
  </Grid>
  <Grid item xs={12} sm={6} >
    <Card
      titulo="Organização de processos"
      texto="Gerenciamento do seu negócio a partir do controle de processos, visando otimizar o desenvolvimento de todas as atividades da sua empresa."
      imagem={Card3}
    />
  </Grid> 


</Grid>




      </StyledBox>
    </>
  );
};

export default Solucoes;
