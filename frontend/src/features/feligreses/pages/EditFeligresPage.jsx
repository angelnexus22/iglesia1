import { Box, Typography, Paper } from '@mui/material';

const EditFeligresPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Editar Feligrés
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Formulario para editar datos del feligrés
        </Typography>
      </Paper>
    </Box>
  );
};

export default EditFeligresPage;
