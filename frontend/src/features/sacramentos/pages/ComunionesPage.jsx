import { Box, Typography, Paper } from '@mui/material';

const ComunionesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Primera Comunión
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de primeras comuniones
        </Typography>
      </Paper>
    </Box>
  );
};

export default ComunionesPage;
