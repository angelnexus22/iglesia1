import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Sistema de Gestión Parroquial. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Ayuda
            </Link>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Contacto
            </Link>
            <Link href="#" variant="body2" color="text.secondary" underline="hover">
              Privacidad
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
