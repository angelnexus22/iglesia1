import { Box, Typography, Paper } from '@mui/material';

const CatequesisPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Catequesis
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Gestión de grupos de catequesis
        </Typography>
      </Paper>
    </Box>
  );
};

export default CatequesisPage;
