import { Box, Typography, Paper } from '@mui/material';

const IngresosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Ingresos
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de ingresos
        </Typography>
      </Paper>
    </Box>
  );
};

export default IngresosPage;
