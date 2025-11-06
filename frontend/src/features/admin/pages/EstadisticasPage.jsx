import { Box, Typography, Paper } from '@mui/material';

const EstadísticasPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Estadísticas
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Estadísticas generales del sistema
        </Typography>
      </Paper>
    </Box>
  );
};

export default EstadísticasPage;
