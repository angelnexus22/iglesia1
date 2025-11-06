import { Box, Typography, Grid, Paper } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography>Bienvenido al Sistema de Gestión Parroquial</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Este dashboard mostrará estadísticas y resúmenes de las actividades parroquiales.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
