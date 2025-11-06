import { Box, Typography, Paper } from '@mui/material';

const MinisteriosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Ministerios
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de ministerios parroquiales
        </Typography>
      </Paper>
    </Box>
  );
};

export default MinisteriosPage;
