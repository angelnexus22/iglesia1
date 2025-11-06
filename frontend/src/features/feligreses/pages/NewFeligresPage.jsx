import { Box, Typography, Paper } from '@mui/material';

const NewFeligresPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Nuevo Feligrés
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Formulario para registrar un nuevo feligrés
        </Typography>
      </Paper>
    </Box>
  );
};

export default NewFeligresPage;
