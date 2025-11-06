import { Box, Typography, Paper } from '@mui/material';

const AuditoríaPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Auditoría
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de auditoría del sistema
        </Typography>
      </Paper>
    </Box>
  );
};

export default AuditoríaPage;
