import { Box, Typography, Paper } from '@mui/material';

const FeligresesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Feligreses
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Lista de feligreses registrados en la parroquia
        </Typography>
      </Paper>
    </Box>
  );
};

export default FeligresesPage;
