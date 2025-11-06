import { Box, Typography, Paper } from '@mui/material';

const GastosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Gastos
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de gastos
        </Typography>
      </Paper>
    </Box>
  );
};

export default GastosPage;
