import { Box, Typography, Paper } from '@mui/material';

const FamiliasPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Familias
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de grupos familiares
        </Typography>
      </Paper>
    </Box>
  );
};

export default FamiliasPage;
