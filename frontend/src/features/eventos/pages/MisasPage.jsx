import { Box, Typography, Paper } from '@mui/material';

const MisasPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Horarios de Misas
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de horarios de misas
        </Typography>
      </Paper>
    </Box>
  );
};

export default MisasPage;
