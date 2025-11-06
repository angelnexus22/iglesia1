import { Box, Typography, Paper } from '@mui/material';

const ConfiguraciónPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Configuración
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Configuración general del sistema
        </Typography>
      </Paper>
    </Box>
  );
};

export default ConfiguraciónPage;
