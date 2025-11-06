import { Box, Typography, Paper } from '@mui/material';

const BautismosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Bautismos
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de bautismos
        </Typography>
      </Paper>
    </Box>
  );
};

export default BautismosPage;
