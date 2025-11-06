import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Link, Alert, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-toastify';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulación de envío de email
      // TODO: Reemplazar con llamada a API real
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      toast.success('Se ha enviado un correo con las instrucciones');
    } catch (error) {
      toast.error('Error al enviar el correo. Por favor, inténtelo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Alert severity="success" sx={{ mb: 3 }}>
          Se ha enviado un correo a <strong>{email}</strong> con las instrucciones para
          restablecer tu contraseña.
        </Alert>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Por favor, revisa tu bandeja de entrada y sigue las instrucciones.
        </Typography>
        <Link component={RouterLink} to="/login" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
          <ArrowBackIcon fontSize="small" />
          Volver al inicio de sesión
        </Link>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        mt: 1,
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
        Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu
        contraseña.
      </Typography>

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo Electrónico"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1.5 }}
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar Instrucciones'}
      </Button>

      <Box sx={{ textAlign: 'center' }}>
        <Link
          component={RouterLink}
          to="/login"
          variant="body2"
          underline="hover"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
        >
          <ArrowBackIcon fontSize="small" />
          Volver al inicio de sesión
        </Link>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
