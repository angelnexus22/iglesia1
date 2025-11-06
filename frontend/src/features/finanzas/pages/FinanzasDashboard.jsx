import { Box, Typography, Paper } from '@mui/material';

const FinanzasDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Dashboard Financiero
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Resumen financiero de la parroquia
        </Typography>
      </Paper>
    </Box>
  );
};

export default FinanzasDashboard;
