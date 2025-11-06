import { Box, Typography, Paper } from '@mui/material';

const CertificadosPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Certificados
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Emisión de certificados sacramentales
        </Typography>
      </Paper>
    </Box>
  );
};

export default CertificadosPage;
