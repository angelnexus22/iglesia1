import { Box, Typography, Paper } from '@mui/material';

const CuentasPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Cuentas
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de cuentas bancarias y cajas
        </Typography>
      </Paper>
    </Box>
  );
};

export default CuentasPage;
