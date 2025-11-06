import { Box, Typography, Paper } from '@mui/material';

const MatrimoniosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Matrimonios
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Registro de matrimonios
        </Typography>
      </Paper>
    </Box>
  );
};

export default MatrimoniosPage;
