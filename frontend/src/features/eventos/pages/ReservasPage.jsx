import { Box, Typography, Paper } from '@mui/material';

const ReservasPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Reservas
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Reservas de espacios parroquiales
        </Typography>
      </Paper>
    </Box>
  );
};

export default ReservasPage;
