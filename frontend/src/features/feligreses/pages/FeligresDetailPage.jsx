import { Box, Typography, Paper } from '@mui/material';

const FeligresDetailPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Detalle del Feligrés
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Información detallada del feligrés
        </Typography>
      </Paper>
    </Box>
  );
};

export default FeligresDetailPage;
