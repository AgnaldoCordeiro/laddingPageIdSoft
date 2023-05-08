import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import canto1 from '../assets/Canto5.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '65vh',
}));

const StyledFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1rem',
  flexGrow: 1,
  width: '80%',
  backgroundPosition: 'left top',
  backgroundRepeat: 'no-repeat',
}));



const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '1rem',
  width: '100%',

  '& .MuiInputLabel-root': {
    color: 'black',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: '#980138',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#980138',
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#980138',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#980138',
  },
  width: '100%',
  marginTop: '1rem',
}));



const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${canto1})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '30%',
  backgroundPosition: 'left bottom',
  backgroundColor: '#ffffff',
  flex: 7,
}));

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const result = await send(
  //       'YOUR_SERVICE_ID', // Substitua pelo seu serviço de e-mail configurado no EmailJS
  //       'YOUR_TEMPLATE_ID', // Substitua pelo seu modelo de e-mail configurado no EmailJS
  //       formData,
  //       process.env.REACT_APP_EMAILJS_USER_ID
  //     );
  //     if (result.status === 200) {
  //       alert('E-mail enviado com sucesso!');
  //     } else {
  //       alert('Ocorreu um erro ao enviar o e-mail.');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao enviar e-mail:', error);
  //     alert('Ocorreu um erro ao enviar o e-mail.');
  //   }
  // };

  return (
    <StyledBox>
      <StyledFormContainer>
        <StyledFormBox sx={{ width: {xl: '50%', lg: '70%', md: '80%', sm: '80%', xs: '80%'}}}>
        <Typography
        sx={{
          fontSize: { xs: '1.5rem', sm: '4rem', md: '3rem', lg: '2rem' },
          color: '#000',
          fontWeight: 500,
          textAlign: 'center',
        }}
      >
Solicitar contato
      </Typography>
                <form>
            <StyledTextField id="nome" label="Nome" variant="outlined" />
            <StyledTextField id="email" label="E-mail" variant="outlined" />
            <StyledTextField id="assunto" label="Assunto" variant="outlined" />
            <StyledTextField
              id="mensagem"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
            />
            <StyledButton variant="contained">Enviar</StyledButton>
          </form>
        </StyledFormBox>
      </StyledFormContainer>





    </StyledBox>
  );
}

export default Contato;

