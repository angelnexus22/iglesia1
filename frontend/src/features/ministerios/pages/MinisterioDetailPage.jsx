import { Box, Typography, Paper } from '@mui/material';

const MinisterioDetailPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Detalle del Ministerio
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Información detallada del ministerio
        </Typography>
      </Paper>
    </Box>
  );
};

export default MinisterioDetailPage;
