import { Box, Typography, Paper } from '@mui/material';

const CalendarioPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Calendario
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Calendario de eventos parroquiales
        </Typography>
      </Paper>
    </Box>
  );
};

export default CalendarioPage;
