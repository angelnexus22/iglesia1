import { Box, Typography, Paper } from '@mui/material';

const UsuariosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Usuarios
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de usuarios del sistema
        </Typography>
      </Paper>
    </Box>
  );
};

export default UsuariosPage;
