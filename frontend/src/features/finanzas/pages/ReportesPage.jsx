import { Box, Typography, Paper } from '@mui/material';

const ReportesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Reportes Financieros
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Reportes y análisis financieros
        </Typography>
      </Paper>
    </Box>
  );
};

export default ReportesPage;
