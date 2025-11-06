import { Box, Typography, Paper } from '@mui/material';

const ConfirmacionesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Confirmaciones
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de confirmaciones
        </Typography>
      </Paper>
    </Box>
  );
};

export default ConfirmacionesPage;
